-- Total wins by team across all seasons (home/away split)
copy (
    select
        team_abbr,
        min(team_name) as team_name,
        count(*) filter (where is_home and result = 'win') as home_wins,
        count(*) filter (where not is_home and result = 'win') as away_wins,
        count(*) filter (where result = 'win') as total_wins
    from "premier_league"."main"."fct_team_matches"
    group by team_abbr
    order by total_wins desc, team_abbr
)
to 'assets/data/wins.csv' (header, delimiter ',')