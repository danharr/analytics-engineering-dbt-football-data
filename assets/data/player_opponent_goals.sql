-- Goals by opposition club for profiled players, aggregated across every season
-- in the Pulselive v1 per-match event feed (fct_match_event). Own goals are
-- excluded. The player pages slice this to the top 5 opponents. Backs the
-- "top opposition clubs" table on the /players/* pages.
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
            e.opponent_name
        from "premier_league"."main"."fct_match_event" e
        join "premier_league"."main"."dim_player" dp on dp.player_id = e.player_id
        where e.event_type = 'goal'
          and e.goal_type is distinct from 'Own'
    )
    select
        p.player_name,
        g.opponent_name,
        count(*) as goals
    from players p
    join goals g on g.player_name = p.player_name
    group by p.player_name, g.opponent_name
    order by p.player_name, goals desc, g.opponent_name
)
to 'assets/data/player_opponent_goals.csv' (header, delimiter ',')