-- Premier League goals by 5-minute interval for Arsenal and West Ham United (2025-26),
-- split into home and away goals to back the population-pyramid charts.
copy (
    with teams as (
        select 'Arsenal' as team_name
        union all
        select 'West Ham United' as team_name
    ),
    buckets as (
        select unnest(range(1, 19)) as bucket
    ),
    goals as (
        select
            team_name,
            cast(ceil(cast(split_part(replace(minute, '''', ''), '+', 1) as int) / 5.0) as int) as bucket,
            (team_side = 'home')::int as is_home_goal,
            (team_side = 'away')::int as is_away_goal
        from "premier_league"."main"."fct_team_goal"
        where competition = 'Premier League'
    ),
    agg as (
        select
            team_name,
            bucket,
            sum(is_home_goal) as home_goals,
            sum(is_away_goal) as away_goals
        from goals
        group by team_name, bucket
    )
    select
        t.team_name,
        m.bucket * 5 as minute,
        (m.bucket * 5 - 4) || '-' || (m.bucket * 5) as label,
        coalesce(a.home_goals, 0) as home_goals,
        coalesce(a.away_goals, 0) as away_goals
    from teams t
    cross join buckets m
    left join agg a
        on a.team_name = t.team_name and a.bucket = m.bucket
    order by t.team_name, m.bucket
)
to 'assets/data/goal_minutes.csv' (header, delimiter ',')