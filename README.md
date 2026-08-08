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
- **Longest Gap Between Wins** — for every team, the longest time between two consecutive wins, shown in years and days
- **Most Chaotic Matches** — the top 50 matches ranked by a chaos score of 3 points per goal + 2 points per red card
- **One-Nil Wins** — which club's wins most often finish 1-0, by share of total wins (clubs with 30+ wins)
- **Longest No-Win Streaks After HT Lead** — for every team, the longest consecutive run of matches where they led at half-time but failed to win
- **Comeback Kings** — for every team, the longest consecutive run of matches where they were losing at half-time but came back to win
- **Most Comebacks in a Season** — the top 10 team-seasons by half-time comebacks (trailing at HT, then winning)
- **Most Manager Wins** — the top managers by all-time Premier League wins, from the Wikipedia managers list joined to match results

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
