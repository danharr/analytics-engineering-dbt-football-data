-- Premier League goals by exact minute (1-90) for every tracked team, split by
-- season and into home and away goals. The chart page aggregates these per-minute
-- rows into five-minute buckets client-side, so a single dataset backs both the
-- exact-minute and five-minute-bucket pyramid views. Teams and seasons are derived
-- from the goal feed itself, so promotion/relegation between seasons is handled
-- automatically.
copy (
    with minutes as (
        select unnest(range(1, 91)) as minute
    ),
    goals as (
        select
            team_name,
            season_label,
            cast(split_part(replace(minute, '''', ''), '+', 1) as int) as minute,
            (team_side = 'home')::int as is_home_goal,
            (team_side = 'away')::int as is_away_goal
        from "premier_league"."main"."fct_team_goal"
        where competition = 'Premier League'
    ),
    team_seasons as (
        select distinct team_name, season_label
        from goals
    ),
    agg as (
        select
            team_name,
            season_label,
            minute,
            sum(is_home_goal) as home_goals,
            sum(is_away_goal) as away_goals
        from goals
        group by team_name, season_label, minute
    )
    select
        ts.team_name,
        ts.season_label,
        m.minute,
        cast(m.minute as varchar) as label,
        coalesce(a.home_goals, 0) as home_goals,
        coalesce(a.away_goals, 0) as away_goals
    from team_seasons ts
    cross join minutes m
    left join agg a
        on a.team_name = ts.team_name
       and a.season_label = ts.season_label
       and a.minute = m.minute
    order by ts.season_label, ts.team_name, m.minute
)
to 'assets/data/goal_minutes.csv' (header, delimiter ',')