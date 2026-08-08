-- Dataset headline stats (total matches, unique teams, total goals)
copy (
    select
        count(distinct match_id) as total_matches,
        count(distinct team_id) as total_unique_teams,
        sum(goals_for) as total_goals,
        current_date::varchar as last_updated
    from "premier_league"."main"."fct_team_matches"
)
to 'assets/data/stats.csv' (header, delimiter ',')