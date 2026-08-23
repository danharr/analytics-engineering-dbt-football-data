"""
Premier League dbt + chart exports as an Airflow DAG (Astronomer Cosmos).

Side-by-side with the dagster `orchestration/` setup:

- One Cosmos `DbtDag` turns the dbt project into Airflow tasks: the
  `season_map` seed plus every model (each model = its own task running
  `dbt run --select <model>` in ExecutionMode.LOCAL).
- `dbt_compile` (BashOperator) regenerates the manifest + compiled analyses in
  `dbt/target/compiled/...` after all models finish.
- One Python task per chart analysis (`dbt/analyses/chart_*.sql`): executes the
  *compiled* analysis against `duckdb/premier_league.duckdb` (read-only, cwd =
  /workspace so the relative `to 'assets/data/...'` path resolves), writing
  `assets/data/<name>.csv` and copying the compiled SQL to `assets/data/<name>.sql`.

Trigger: Airflow UI -> DAGs -> premier_league_dbt -> play button (or
`airflow dags trigger premier_league_dbt`).
"""

from __future__ import annotations

import os
import re
import shutil
from datetime import datetime
from functools import partial
from pathlib import Path

from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonOperator

from cosmos import DbtDag, ExecutionConfig, ProfileConfig, ProjectConfig, RenderConfig
from cosmos.constants import ExecutionMode, SourceRenderingBehavior, TestBehavior

REPO_ROOT = Path("/workspace")
DBT_DIR = REPO_ROOT / "dbt"
DB_PATH = REPO_ROOT / "duckdb" / "premier_league.duckdb"
DATA_DIR = REPO_ROOT / "assets" / "data"
ANALYSES_DIR = DBT_DIR / "analyses"
COMPILED_DIR = DBT_DIR / "target" / "compiled" / "premier_league" / "analyses"
PROFILES_YML = REPO_ROOT / "airflow" / "profiles.yml"

REF_RE = re.compile(r"ref\(\s*'([^']+)'\s*\)")

profile_config = ProfileConfig(
    profile_name="premier_league",
    target_name="dev",
    profiles_yml_filepath=str(PROFILES_YML),
)

project_config = ProjectConfig(
    dbt_project_path=str(DBT_DIR),
    install_dbt_deps=False,  # no packages.yml in this project
)

render_config = RenderConfig(
    test_behavior=TestBehavior.NONE,  # models only; skip dbt test tasks
    source_rendering_behavior=SourceRenderingBehavior.NONE,  # raw tables are loaded by host scripts
    emit_datasets=False,  # keep Airflow 3 asset wiring out of it
)

execution_config = ExecutionConfig(execution_mode=ExecutionMode.LOCAL)

dbt_dag = DbtDag(
    dag_id="premier_league_dbt",
    project_config=project_config,
    profile_config=profile_config,
    render_config=render_config,
    execution_config=execution_config,
    schedule=None,
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=["dbt", "premier-league"],
    # AIRFLOW 3.3 no longer ships SequentialExecutor (`airflow standalone`
    # forces LocalExecutor), so serialize at the DAG level instead: every dbt
    # model/seed task opens a WRITE connection to the single DuckDB file, and
    # the chart tasks open READ-ONLY connections that need the exclusive write
    # lock free. max_active_tasks=1 runs the DAG strictly one task at a time —
    # the Airflow equivalent of Dagster's in_process_executor.
    max_active_tasks=1,
)

# Task ids of the Cosmos-generated dbt tasks (models get a `_run` suffix, the
# seed a `_seed` suffix). Everything we add below must run after these.
cosmos_task_ids = set(dbt_dag.task_dict.keys())


def _run_chart(name: str, **context) -> None:
    """Run a compiled chart analysis against the DuckDB file, writing its CSV."""
    csv_name = name.removeprefix("chart_")
    compiled = COMPILED_DIR / f"{name}.sql"
    if not compiled.exists():
        raise FileNotFoundError(
            f"compiled analysis not found at {compiled}; dbt_compile must have run"
        )
    os.chdir(REPO_ROOT)
    import duckdb

    # Charts only READ the marts (the `copy ... to` writes to a separate CSV).
    con = duckdb.connect(str(DB_PATH), read_only=True)
    try:
        con.execute(compiled.read_text())
    finally:
        con.close()
    shutil.copy(compiled, DATA_DIR / f"{csv_name}.sql")
    print(f"wrote {DATA_DIR / csv_name}.csv (+ .sql)")


with dbt_dag:
    dbt_compile = BashOperator(
        task_id="dbt_compile",
        bash_command=(
            "cd /workspace/dbt && dbt compile --profiles-dir /workspace/airflow --target dev"
        ),
        doc_md=(
            "Regenerate the dbt manifest and compiled analyses in `dbt/target/`; "
            "the per-chart tasks below execute the *compiled* analysis SQL."
        ),
    )

    chart_tasks = []
    for analysis_path in sorted(ANALYSES_DIR.glob("chart_*.sql")):
        name = analysis_path.stem
        csv_name = name.removeprefix("chart_")
        refs = sorted(set(REF_RE.findall(analysis_path.read_text())))
        chart = PythonOperator(
            task_id=f"{csv_name}_chart",
            python_callable=partial(_run_chart, name),
            doc_md=f"Runs compiled `{name}.sql` and writes `assets/data/{csv_name}.csv` + `.sql`.",
        )
        chart_tasks.append((chart, refs))

    # Every dbt model/seed finishes before compile, so the compiled analyses are
    # in step with the models the charts read.
    for task_id in cosmos_task_ids:
        task = dbt_dag.task_dict[task_id]
        if not task.downstream_task_ids:
            task >> dbt_compile

    for chart, refs in chart_tasks:
        dbt_compile >> chart
        # Chart -> the exact models/seed it ref()s (Cosmos ids: <name>_run/_seed).
        for ref in refs:
            for suffix in ("_run", "_seed"):
                ref_task_id = f"{ref}{suffix}"
                if ref_task_id in dbt_dag.task_dict:
                    dbt_dag.task_dict[ref_task_id] >> chart
                    break
