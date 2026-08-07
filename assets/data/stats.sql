copy (
    with teams as (
        select home_team_id as team_id from fct_matches
        union
        select away_team_id as team_id from fct_matches
    )
    select
        (select count(*) from fct_matches) as total_matches,
        (select count(distinct team_id) from teams) as total_unique_teams,
        (select sum(home_score + away_score) from fct_matches) as total_goals,
        current_date::varchar as last_updated
)
to 'assets/data/stats.csv' (header, delimiter ',');
