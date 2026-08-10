-- Per-match results for manager pages (one row per match for each profiled manager).
-- Drives biggest wins/losses and club splits.
copy (
    select
        m.manager_name,
        m.team_id,
        home_t.team_name,
        m.kickoff_date,
        m.season_label,
        m.is_home,
        m.opponent_id,
        away_t.team_name as opponent_name,
        m.goals_for,
        m.goals_against,
        (m.goals_for - m.goals_against) as goal_diff,
        m.result,
        m.match_id
    from "premier_league"."main"."fct_manager_matches" m
    left join "premier_league"."main"."dim_teams" home_t on home_t.team_id = m.team_id
    left join "premier_league"."main"."dim_teams" away_t on away_t.team_id = m.opponent_id
    where m.manager_name is not null
    order by m.manager_name, m.kickoff_date, m.match_id
)
to 'assets/data/manager_matches.csv' (header, delimiter ',')