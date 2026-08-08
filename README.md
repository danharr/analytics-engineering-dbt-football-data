# Premier League Insights

An interactive dashboard of Premier League football history, built from the Premier League's public API.

**Live site:** [https://danharr.github.io/analytics-engineering-dbt-football-data/](https://danharr.github.io/analytics-engineering-dbt-football-data/)

## Charts

- **All-Time Table** — every team's all-time record (P/W/D/L/points), sorted by points
- **Most Wins** — total wins by team across all seasons
- **Data Quality** — coverage checks across every season
- **Attendances** — average home attendance by team per season
- **Five-Game Streaks** — the last time each team won 5+ games in a row within a single season

## Data

- 34 seasons (1992-93 through 2025-26)
- 13,166 matches
- 51 unique teams
- 35,478 goals

## How it's built

1. **Scrape** the Pulselive API (`competition=8`) into per-season JSON
2. **Load** into DuckDB and model with dbt
3. **Export** chart data as CSVs from dbt analyses (see `dbt/analyses/chart_*.sql`)
4. **Generate** a static Nuxt 3 site (Vuetify 3 + d3.js) that bakes the data into HTML for SEO

`./update_all_charts.sh` reruns the whole pipeline and rebuilds the static site in `docs/` (which is what GitHub Pages serves).
