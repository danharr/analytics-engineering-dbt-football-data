# Premier League Insights

An interactive dashboard of Premier League football history, built from the Premier League's public API.

**Live site:** [https://danharr.github.io/analytics-engineering-dbt-football-data/](https://danharr.github.io/analytics-engineering-dbt-football-data/)

## Charts

- **All-Time Table** — every team's all-time record (P/W/D/L/points), sorted by points
- **Most Wins** — total wins by team across all seasons
- **Data Quality** — coverage checks across every season
- **Attendances** — average home attendance by team per season

## Data

- 34 seasons (1992-93 through 2025-26)
- 13,166 matches
- 51 unique teams
- 35,478 goals

## How it's built

1. **Scrape** the Pulselive API (`competition=8`) into per-season JSON
2. **Load** into DuckDB and model with dbt
3. **Export** chart data as CSVs
4. **Serve** as a Vuetify 3 + d3.js single-page app (CDN libraries, no build step)
