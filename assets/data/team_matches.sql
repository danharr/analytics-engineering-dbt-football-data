-- Per-match results for the team pages (/arsenal, /manchester-united, /liverpool,
-- /tottenham, /west-ham): one row per match for each profiled team, used to derive the
-- top-5 biggest wins, biggest defeats, most red cards and biggest home attendances.
-- Add a team_abbr to the IN list to profile it too.
copy (
    select
        team_abbr,
        kickoff_date,
        season_label,
        case when is_home then 1 else 0 end as is_home,
        opponent_abbr,
        opponent_name,
        goals_for,
        goals_against,
        goals_for - goals_against as goal_diff,
        red_cards,
        attendance
    from "premier_league"."main"."fct_team_matches"
    where team_abbr in ('ARS', 'MUN', 'LIV', 'TOT', 'WHU', 'MCI', 'NEW', 'SUN', 'LEE', 'AVL', 'BRE', 'CHE')
    order by team_abbr, kickoff_date, match_id
)
to 'assets/data/team_matches.csv' (header, delimiter ',')