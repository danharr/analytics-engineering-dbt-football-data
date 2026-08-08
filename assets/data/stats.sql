-- Dataset headline stats (total matches, unique teams, total goals)
copy (
    with teams as (
        select home_team_id as team_id from "premier_league"."main"."fct_matches"
        union
        select away_team_id as team_id from "premier_league"."main"."fct_matches"
    )
    select
        (select count(*) from "premier_league"."main"."fct_matches") as total_matches,
        (select count(distinct team_id) from teams) as total_unique_teams,
        (select sum(home_score + away_score) from "premier_league"."main"."fct_matches") as total_goals,
        current_date::varchar as last_updated
)
to 'assets/data/stats.csv' (header, delimiter ',')