-- Per-match results for the team pages (/teams/{slug}): one row per match for every
-- Premier League team (all 51), used to derive the top-5 biggest wins, biggest defeats,
-- most red cards and biggest home attendances on each team page.
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
    order by team_abbr, kickoff_date, match_id
)
to 'assets/data/team_matches.csv' (header, delimiter ',')