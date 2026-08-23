# Football Started in 1992

An interactive dashboard of Premier League football history.

**Live site:** [https://footballstartedin1992.com/](https://footballstartedin1992.com/)

## Charts

- **All-Time Table** — every team's all-time record (P/W/D/L/points), sorted by points
- **Most Wins** — total wins by team across all seasons
- **Data Quality** — coverage checks across every season
- **Attendances** — average home attendance by team per season
- **Scoring Trends** — goals per game, nil-nils, draw share and red cards in every season, ranked by an "excitement" score (2023-24 most exciting)
- **Goals by Minute** — population pyramids charting every 2025-26 Premier League goal by Arsenal and West Ham United in five-minute intervals, home goals on the left and away goals on the right
- **Scoring Runs** — the longest runs of consecutive games without scoring (goal droughts) and with scoring (scoring streaks) per team, top 5 in each category
- **Points Lost From Winning Positions** — every 2025-26 Premier League club ranked by the points thrown away from winning positions (2 lost for a draw, 3 for a defeat), with a page per club listing each game where a lead was lost, reconstructed from per-minute goal data
- **Five-Game Streaks** — the last time each team won 5+ games in a row within a single season
- **Big Win Streaks** — the longest winning streaks within a single season (11+ wins), with date, opponent and score of every win
- **Longest Gap Between Wins** — for every team, the longest time between two consecutive wins, shown in years and days
- **Most Chaotic Matches** — the top 50 matches ranked by a chaos score of 3 points per goal + 2 points per red card
- **One-Nil Wins** — which club's wins most often finish 1-0, by share of total wins (clubs with 30+ wins)
- **Longest No-Win Streaks After HT Lead** — for every team, the longest consecutive run of matches where they led at half-time but failed to win
- **Comeback Kings** — for every team, the longest consecutive run of matches where they were losing at half-time but came back to win
- **Most Comebacks in a Season** — the top 10 team-seasons by half-time comebacks (trailing at HT, then winning)
- **Most Manager Wins** — the top managers by all-time Premier League wins, from the Wikipedia managers list joined to match results
- **Manager Debuts** — the first league match for every manager at each club they managed, split into the top 5 biggest wins and top 5 biggest defeats
- **Manager Timeline** — a Gantt chart of every Premier League club's managers since 1992, coloured by club with hover tooltips
- **Individual Manager Pages** — profile pages at `/managers` for the top 30 managers by all-time Premier League wins (Wenger, Ferguson, Moyes, Guardiola, Redknapp, Mourinho, Klopp and more) showing their total wins (compared to all managers), biggest wins/losses, and club-by-club records
- **Team Pages** — one page per club at `/teams` (all 51 teams) with their top-5 biggest wins/defeats, most red cards, biggest home attendances, every season they've played in, the all-time table with their row highlighted, and their manager history
- **Team Season Pages** — a `/teams/<club>/2025-26-goals-by-player` and `/teams/<club>/2026-27-goals-by-player` sub-page for each club, showing every player's goals as a horizontal bar chart from the per-minute goal feed
- **Cumulative Points by Season** — a `/teams/<club>/cumulative-points-per-season` sub-page for every club, charting cumulative points after each matchweek as one line per season since 1992, with title-winning seasons highlighted
- **Season Pages** — the final league table (P/W/D/L/GF/GA/GD/points) for every season at `/seasons`, 1992-93 through 2025-26, ranked by points then goal difference then goals scored, plus the season's five biggest wins and a "points race" line chart of every team's cumulative points by matchweek

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
