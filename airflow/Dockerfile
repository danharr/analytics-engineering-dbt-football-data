# Premier League dbt + Cosmos in one Airflow container.
#
# Installs dbt (run in-process by Cosmos ExecutionMode.LOCAL) + Cosmos itself
# into the image's own /home/airflow/.local env (as the `airflow` user) so pip's
# resolver reuses the existing Airflow 3.3.0 install instead of duplicating it.
FROM apache/airflow:3.3.0-python3.12

USER airflow
RUN pip install --no-cache-dir --user \
        "astronomer-cosmos==1.15.0" \
        "dbt-core==1.11.12" \
        "dbt-duckdb==1.10.1"

# Runtime user is set in docker-compose.yml (root, to write to the host-mounted
# repo at /workspace). The image entrypoint handles the root PYTHONPATH.
USER root
