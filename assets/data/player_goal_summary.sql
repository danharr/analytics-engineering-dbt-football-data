-- Aggregated goal summary for profiled players: total goals, penalties, and the
-- first-half vs second-half split, across every season in the Pulselive v1
-- per-match event feed (fct_match_event). Own goals are excluded. This is an
-- all-time aggregate (not season-by-season), so it grows automatically as more
-- seasons are scraped. Backs the KPI numbers and the first-half/second-half
-- donut on the /players/* pages.
copy (
    with players as (
        select 'Erling Haaland' as player_name
        union all select 'Harry Kane'
        union all select 'Jamie Vardy'
        union all select 'Mohamed Salah'
        union all select 'Son Heung-min'
    ),
    goals as (
        select
            dp.player_name,
            e.period,
            e.goal_type
        from "premier_league"."main"."fct_match_event" e
        join "premier_league"."main"."dim_player" dp on dp.player_id = e.player_id
        where e.event_type = 'goal'
          and e.goal_type is distinct from 'Own'
    )
    select
        p.player_name,
        count(*) as total_goals,
        count(*) filter (where g.goal_type = 'Penalty') as penalties,
        count(*) filter (where g.period = 'FirstHalf') as first_half,
        count(*) filter (where g.period = 'SecondHalf') as second_half
    from players p
    join goals g on g.player_name = p.player_name
    group by p.player_name
    order by p.player_name
)
to 'assets/data/player_goal_summary.csv' (header, delimiter ',')