# Football Started in 1992

An interactive dashboard of Premier League football history.

**Live site:** [https://footballstartedin1992.com/](https://footballstartedin1992.com/)

## Charts

- **All-Time Table** — every team's all-time record (P/W/D/L/points), sorted by points
- **Most Wins** — total wins by team across all seasons
- **Data Quality** — coverage checks across every season
- **Attendances** — average home attendance by team per season
- **Five-Game Streaks** — the last time each team won 5+ games in a row within a single season
- **Big Win Streaks** — the longest winning streaks within a single season (11+ wins), with date, opponent and score of every win

## Data

- 34 seasons (1992-93 through 2025-26)
- 13,166 matches
- 51 unique teams
- 35,478 goals

## How it's built

1. **Scrape** the results into per-season JSON
2. **Load** into DuckDB and model with dbt
3. **Export** chart data as CSVs from dbt analyses (see `dbt/analyses/chart_*.sql`)
4. **Generate** a static Nuxt 3 site (Vuetify 3 + d3.js) that bakes the data into HTML for SEO

`./update_all_charts.sh` reruns the whole pipeline and rebuilds the static site in `docs/` (which is what GitHub Pages serves).
