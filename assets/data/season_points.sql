-- Cumulative league points for every team at each matchweek of every season, so each
-- season page can draw the "points race" line chart. matchweek is each team's own nth
-- game (kickoff order), since the official match_week column is only populated from
-- 2020-21 onwards.
copy (
    with ranked as (
        select
            season_label,
            team_abbr,
            team_name,
            points,
            row_number() over (
                partition by season_label, team_abbr
                order by kickoff_at, match_id
            ) as matchweek
        from "premier_league"."main"."fct_team_matches"
    )
    select
        season_label,
        team_abbr,
        team_name,
        matchweek,
        cast(sum(points) over (
            partition by season_label, team_abbr
            order by matchweek
            rows between unbounded preceding and current row
        ) as int) as points
    from ranked
    order by season_label, team_abbr, matchweek
)
to 'assets/data/season_points.csv' (header, delimiter ',')