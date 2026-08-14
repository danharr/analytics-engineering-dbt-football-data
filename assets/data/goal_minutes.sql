-- Premier League goals by exact minute (1-90) for all 20 teams in 2025-26, split into
-- home and away goals. The chart page aggregates these per-minute rows into five-minute
-- buckets client-side, so a single dataset backs both the exact-minute and
-- five-minute-bucket pyramid views.
copy (
    with teams as (
        select 'Arsenal' as team_name
        union all select 'Aston Villa'
        union all select 'Bournemouth'
        union all select 'Brentford'
        union all select 'Brighton & Hove Albion'
        union all select 'Burnley'
        union all select 'Chelsea'
        union all select 'Crystal Palace'
        union all select 'Everton'
        union all select 'Fulham'
        union all select 'Leeds United'
        union all select 'Liverpool'
        union all select 'Manchester City'
        union all select 'Manchester United'
        union all select 'Newcastle United'
        union all select 'Nottingham Forest'
        union all select 'Sunderland'
        union all select 'Tottenham Hotspur'
        union all select 'West Ham United'
        union all select 'Wolverhampton Wanderers'
    ),
    minutes as (
        select unnest(range(1, 91)) as minute
    ),
    goals as (
        select
            team_name,
            cast(split_part(replace(minute, '''', ''), '+', 1) as int) as minute,
            (team_side = 'home')::int as is_home_goal,
            (team_side = 'away')::int as is_away_goal
        from "premier_league"."main"."fct_team_goal"
        where competition = 'Premier League'
          and season_label = '2025-26'
    ),
    agg as (
        select
            team_name,
            minute,
            sum(is_home_goal) as home_goals,
            sum(is_away_goal) as away_goals
        from goals
        group by team_name, minute
    )
    select
        t.team_name,
        m.minute,
        cast(m.minute as varchar) as label,
        coalesce(a.home_goals, 0) as home_goals,
        coalesce(a.away_goals, 0) as away_goals
    from teams t
    cross join minutes m
    left join agg a
        on a.team_name = t.team_name and a.minute = m.minute
    order by t.team_name, m.minute
)
to 'assets/data/goal_minutes.csv' (header, delimiter ',')