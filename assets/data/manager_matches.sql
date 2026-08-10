-- Per-match results for manager pages (one row per match for each profiled manager).
-- Drives biggest wins/losses and club splits.
copy (
    select
        manager_name,
        team_id,
        kickoff_date,
        season_label,
        is_home,
        opponent_id,
        goals_for,
        goals_against,
        (goals_for - goals_against) as goal_diff,
        result,
        match_id
    from "premier_league"."main"."fct_manager_matches"
    where manager_name is not null
    order by manager_name, kickoff_date, match_id
)
to 'assets/data/manager_matches.csv' (header, delimiter ',')