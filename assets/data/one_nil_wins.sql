-- Share of each club's Premier League wins that finished 1-0 (home or away), clubs with 30+ wins
copy (
    select
        min(team_name) as team_name,
        min(team_abbr) as team_abbr,
        count(*) filter (where result = 'win') as total_wins,
        count(*) filter (where is_home and is_one_nil) as home_1_0_wins,
        count(*) filter (where not is_home and is_one_nil) as away_1_0_wins,
        sum(is_one_nil) as one_nil_wins,
        round(100.0 * sum(is_one_nil) / count(*) filter (where result = 'win'), 1) as pct_one_nil
    from "premier_league"."main"."fct_team_matches"
    group by team_id
    having count(*) filter (where result = 'win') >= 30
    order by pct_one_nil desc, total_wins desc
)
to 'assets/data/one_nil_wins.csv' (header, delimiter ',')