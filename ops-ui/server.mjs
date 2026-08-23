import http from 'node:http';
import { spawn } from 'node:child_process';
import { readFileSync, readdirSync, unlinkSync, existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const OPS_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(OPS_DIR, '..');

const PORT = Number(process.env.PORT || 8787);
const DB = 'duckdb/premier_league.duckdb';

// DuckDB CLI lives at ~/.duckdb/cli/latest/duckdb (added to PATH by ~/.bash_profile).
const DUCKDB_CLI = path.join(os.homedir(), '.duckdb', 'cli', 'latest', 'duckdb');
const duckdbBin = existsSync(DUCKDB_CLI) ? DUCKDB_CLI : 'duckdb';

const script = (name) => path.join(REPO_ROOT, name);
const env = () => ({
  ...process.env,
  PATH: existsSync(DUCKDB_CLI) ? `${path.dirname(DUCKDB_CLI)}:${process.env.PATH || ''}` : process.env.PATH,
});

// ---------------------------------------------------------------------------
// Run registry: one action runs at a time (DuckDB is single-writer and the
// rebuild must not overlap scrapers/loads). Each run gets an id, streams
// stdout/stderr to subscribed SSE clients, and reports queued/running/exit.
// ---------------------------------------------------------------------------
const runs = new Map(); // runId -> { kind, label, status, argv, buffer, clients, proc, exitCode, before, stdin }
let queue = []; // runIds waiting for their turn
let active = false;

function startRun(kind, label, argv, opts = {}) {
  const runId = crypto.randomUUID();
  runs.set(runId, {
    kind,
    label,
    status: 'queued',
    argv,
    buffer: [],
    clients: new Set(),
    proc: null,
    exitCode: null,
    before: opts.before,
    stdin: opts.stdin,
  });
  queue.push(runId);
  pump();
  return runId;
}

function emit(run, payload) {
  const line = `data: ${JSON.stringify(payload)}\n\n`;
  run.buffer.push(line);
  if (run.buffer.length > 5000) run.buffer.shift();
  for (const res of run.clients) res.write(line);
}

function pump() {
  if (active || queue.length === 0) return;
  active = true;
  const runId = queue.shift();
  const run = runs.get(runId);
  run.status = 'running';
  emit(run, { type: 'status', status: 'running' });

  const doSpawn = () => {
    const child = spawn(run.argv[0], run.argv.slice(1), {
      cwd: REPO_ROOT,
      env: env(),
    });
    run.proc = child;
    child.stdout.on('data', (d) => emit(run, { type: 'log', stream: 'stdout', text: d.toString() }));
    child.stderr.on('data', (d) => emit(run, { type: 'log', stream: 'stderr', text: d.toString() }));
    child.on('error', (err) => {
      emit(run, { type: 'log', stream: 'stderr', text: `spawn error: ${err.message}\n` });
      finish(run, 1);
    });
    child.on('close', (code) => finish(run, code ?? 1));
    if (run.stdin) {
      child.stdin.write(run.stdin());
      child.stdin.end();
    }
  };

  if (run.before) {
    try {
      run.before();
    } catch (err) {
      emit(run, { type: 'log', stream: 'stderr', text: `pre-run error: ${err.message}\n` });
      finish(run, 1);
      return;
    }
  }
  doSpawn();
}

function finish(run, code) {
  run.status = code === 0 ? 'success' : 'failed';
  run.exitCode = code;
  emit(run, { type: 'exit', code, status: run.status });
  run.proc = null;
  active = false;
  pump();
}

function attachSSE(run, res) {
  run.clients.add(res);
  for (const chunk of run.buffer) res.write(chunk);
  res.on('close', () => run.clients.delete(res));
}

// ---------------------------------------------------------------------------
// Command builders
// ---------------------------------------------------------------------------
function cmdPullBbc(body) {
  const start = (body.start || '').trim();
  const end = (body.end || '').trim();
  const force = body.force !== false;
  const teams = String(body.teams || '')
    .split(/[\s,]+/)
    .map((t) => t.trim())
    .filter(Boolean);
  const args = [];
  if (force) args.push('--force');
  args.push('--months', start, end, ...teams);
  return { label: `BBC events ${start}..${end} (${teams.length} teams)`, argv: [script('scrape_bbc_match_events.sh'), ...args] };
}

function cmdPullPl(body) {
  const seasonId = (body.season_id || '').trim();
  const label = (body.label || '').trim();
  const matchweeks = (body.matchweeks || '').trim();
  const forceDelete = body.force === true;
  const before = forceDelete
    ? () => {
        const dir = path.join(REPO_ROOT, 'matches', label);
        if (!existsSync(dir)) return;
        for (const f of readdirSync(dir)) {
          if (f.startsWith(`${label}_MW`)) unlinkSync(path.join(dir, f));
        }
      }
    : undefined;
  return {
    label: `PL matchweeks 1..${matchweeks} (${label})`,
    argv: [script('scrape_season_matchweek.sh'), seasonId, label, matchweeks],
    before,
  };
}

function cmdLoadDuckdb(body) {
  const loaders = [];
  if (body.match_events) loaders.push('duckdb/load_match_events.sql');
  if (body.matches) loaders.push('duckdb/load_2026_27.sql');
  const before = () => {
    for (const l of loaders) {
      const p = path.join(REPO_ROOT, l);
      if (!existsSync(p)) throw new Error(`loader not found: ${l}`);
    }
  };
  const stdin = () => loaders.map((l) => readFileSync(path.join(REPO_ROOT, l), 'utf8')).join('\n');
  return {
    label: `Load DuckDB (${loaders.map((l) => l.split('/').pop()).join(', ') || 'none selected'})`,
    argv: [duckdbBin, DB],
    before,
    stdin,
  };
}

function cmdRebuild(body) {
  const full = body.full !== false;
  return {
    label: `Rebuild (${full ? 'full dbt' : '--no-dbt'})`,
    argv: [script('update_all_charts.sh'), ...(full ? [] : ['--no-dbt'])],
  };
}

// ---------------------------------------------------------------------------
// HTTP server
// ---------------------------------------------------------------------------
function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const route = url.pathname;

  try {
    if (route === '/' || route === '/index.html') {
      const html = readFileSync(path.join(OPS_DIR, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
      return;
    }

    if (route === '/api/state') {
      const runsList = [...runs.entries()].map(([id, r]) => ({
        id,
        kind: r.kind,
        label: r.label,
        status: r.status,
        exitCode: r.exitCode,
      }));
      json(res, 200, { active, queue: queue.length, runs: runsList });
      return;
    }

    if (route.startsWith('/api/stream/')) {
      const runId = route.slice('/api/stream/'.length);
      const run = runs.get(runId);
      if (!run) {
        json(res, 404, { error: 'unknown run' });
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      });
      res.write(': connected\n\n');
      attachSSE(run, res);
      return;
    }

    if (route === '/api/run' && req.method === 'POST') {
      const body = await readBody(req);
      let spec;
      if (body.action === 'pull-bbc') spec = cmdPullBbc(body);
      else if (body.action === 'pull-pl') spec = cmdPullPl(body);
      else if (body.action === 'load-duckdb') spec = cmdLoadDuckdb(body);
      else if (body.action === 'rebuild') spec = cmdRebuild(body);
      else return json(res, 400, { error: 'unknown action' });

      const runId = startRun(body.action, spec.label, spec.argv, {
        before: spec.before,
        stdin: spec.stdin,
      });
      json(res, 200, { runId, label: spec.label });
      return;
    }

    json(res, 404, { error: 'not found' });
  } catch (e) {
    json(res, 500, { error: e.message });
  }
});

server.listen(PORT, () => {
  console.log(`Ops UI running at http://localhost:${PORT}`);
  console.log(`Repo root: ${REPO_ROOT}`);
  console.log(`duckdb:    ${duckdbBin}`);
});
