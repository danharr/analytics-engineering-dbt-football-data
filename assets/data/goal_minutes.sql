-- Premier League goals by minute for Arsenal and West Ham United (2025-26),
-- split into home and away goals to back the population-pyramid charts.
copy (
    with teams as (
        select 'Arsenal' as team_name
        union all
        select 'West Ham United' as team_name
    ),
    minutes as (
        select unnest(range(1, 91)) as minute
    ),
    goals as (
        select
            team_name,
            cast(split_part(replace(minute, '''', ''), '+', 1) as int) as base_minute,
            (team_side = 'home')::int as is_home_goal,
            (team_side = 'away')::int as is_away_goal
        from "premier_league"."main"."fct_team_goal"
        where competition = 'Premier League'
    ),
    agg as (
        select
            team_name,
            base_minute as minute,
            sum(is_home_goal) as home_goals,
            sum(is_away_goal) as away_goals
        from goals
        group by team_name, base_minute
    )
    select
        t.team_name,
        m.minute,
        coalesce(a.home_goals, 0) as home_goals,
        coalesce(a.away_goals, 0) as away_goals
    from teams t
    cross join minutes m
    left join agg a
        on a.team_name = t.team_name and a.minute = m.minute
    order by t.team_name, m.minute
)
to 'assets/data/goal_minutes.csv' (header, delimiter ',')