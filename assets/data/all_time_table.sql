-- All-time Premier League table (P/W/D/L/points)
copy (
    select
        team_abbr,
        min(team_name) as team_name,
        count(*) as matches_played,
        count(*) filter (where result = 'win') as wins,
        count(*) filter (where result = 'draw') as draws,
        count(*) filter (where result = 'loss') as losses,
        sum(points) as points
    from "premier_league"."main"."fct_team_matches"
    group by team_abbr
    order by points desc, team_abbr
)
to 'assets/data/all_time_table.csv' (header, delimiter ',')