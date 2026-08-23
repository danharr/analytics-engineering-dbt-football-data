import os
import re
import shutil
from pathlib import Path

import duckdb
from dagster import (
    AssetExecutionContext,
    AssetKey,
    AssetSelection,
    Definitions,
    asset,
    define_asset_job,
    in_process_executor,
)
from dagster_dbt import DbtCliResource, DbtProject, dbt_assets

# All paths are absolute inside the container (repo mounted at /workspace).
REPO_ROOT = Path("/workspace")
DBT_DIR = REPO_ROOT / "dbt"
PROFILES_DIR = REPO_ROOT / "orchestration"
DB_PATH = REPO_ROOT / "duckdb" / "premier_league.duckdb"
ANALYSES_SRC_DIR = DBT_DIR / "analyses"
COMPILED_ANALYSES_DIR = DBT_DIR / "target" / "compiled" / "premier_league" / "analyses"
DATA_DIR = REPO_ROOT / "assets" / "data"

dbt_project = DbtProject(
    project_dir=str(DBT_DIR),
    profiles_dir=str(PROFILES_DIR),
    profile="premier_league",
    target="dev",
    # `compile` (not just `parse`) so the manifest carries compiled_code for the
    # UI's SQL tab and the compiled analyses are written to target/compiled.
    prepare_project_cli_args=["compile", "--quiet"],
)
# In dev (`dagster dev`) this runs `dbt compile` at code-location load time.
dbt_project.prepare_if_dev()
if not Path(dbt_project.manifest_path).exists():
    dbt_project.prepare()

dbt_resource = DbtCliResource(
    project_dir=dbt_project,
    profiles_dir=str(PROFILES_DIR),
    profile="premier_league",
    target="dev",
)


@dbt_assets(manifest=dbt_project.manifest_path, project=dbt_project)
def premier_league_dbt_assets(context: AssetExecutionContext, dbt: DbtCliResource):
    """All dbt models/seeds/tests in one `dbt build`; each node becomes an asset."""
    yield from dbt.cli(["build"], context=context).stream()


# ---------------------------------------------------------------------------
# One Dagster asset per chart analysis. dbt analyses are NOT part of
# manifest.json, so we derive the list from the analyses source dir and pull
# each chart's upstream models from its `{{ ref('...') }}` calls. Running the
# analysis means executing its *compiled* SQL (refs resolved) against the
# DuckDB file, which writes assets/data/<name>.csv; the compiled SQL is copied
# to assets/data/<name>.sql for display on the site.
# ---------------------------------------------------------------------------

REF_RE = re.compile(r"ref\(\s*'([^']+)'\s*\)")


def _chart_asset(name: str):
    csv_name = name.removeprefix("chart_")
    source_path = ANALYSES_SRC_DIR / f"{name}.sql"
    compiled_path = COMPILED_ANALYSES_DIR / f"{name}.sql"
    deps = sorted(set(REF_RE.findall(source_path.read_text())))

    @asset(
        key=AssetKey(f"{csv_name}_chart"),
        deps=deps,
        group_name="charts",
        description=f"Regenerates assets/data/{csv_name}.csv from compiled analysis {name}.sql",
    )
    def _chart(context: AssetExecutionContext):
        if not compiled_path.exists():
            raise FileNotFoundError(
                f"compiled analysis not found at {compiled_path}; "
                "reload the Dagster code location so dbt compile re-runs"
            )
        # The compiled `to 'assets/data/...'` path is relative to the repo root.
        os.chdir(REPO_ROOT)
        # Charts only READ the marts (the `copy ... to` writes to a separate CSV),
        # so open read-only: safe to parallelize against the single DuckDB file.
        con = duckdb.connect(str(DB_PATH), read_only=True)
        try:
            con.execute(compiled_path.read_text())
        finally:
            con.close()
        shutil.copy(compiled_path, DATA_DIR / f"{csv_name}.sql")
        context.log.info(f"wrote {DATA_DIR / csv_name}.csv")

    return _chart


chart_assets = [
    _chart_asset(path.stem) for path in sorted(ANALYSES_SRC_DIR.glob("chart_*.sql"))
]

# in_process_executor runs all steps serially in one process: the chart assets
# can then run in parallel without contention on the single DuckDB file.
refresh_all = define_asset_job(
    "refresh_all",
    selection=AssetSelection.all(),
    executor_def=in_process_executor,
)

defs = Definitions(
    assets=[premier_league_dbt_assets, *chart_assets],
    resources={"dbt": dbt_resource},
    jobs=[refresh_all],
)
