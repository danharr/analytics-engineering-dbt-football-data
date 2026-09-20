-- Top 5 assist-scorer partnerships for the 2016-17 season. Backs the season review page.
copy (
    with goals as (
        select player_id, assist_player_id, team_name
        from "premier_league"."main"."fct_match_event"
        where event_type = 'goal' and season_label = '2016-17'
          and assist_player_id is not null and player_id is not null
    ), pairs as (
        select least(player_id, assist_player_id) as p1,
               greatest(player_id, assist_player_id) as p2,
               count(*) as goals
        from goals group by 1, 2
    ), ranked as (
        select row_number() over (order by goals desc, p1 asc, p2 asc) as rank,
               p1, p2, goals
        from pairs
    ), teams as (
        select least(player_id, assist_player_id) as p1,
               greatest(player_id, assist_player_id) as p2,
               string_agg(distinct team_name, ', ' order by team_name) as team
        from goals group by 1, 2
    )
    select r.rank, a.player_name as player_1_name, b.player_name as player_2_name,
           t.team, r.goals
    from ranked r
    left join "premier_league"."main"."dim_player" a on a.player_id = r.p1
    left join "premier_league"."main"."dim_player" b on b.player_id = r.p2
    left join teams t on t.p1 = r.p1 and t.p2 = r.p2
    where r.rank <= 5
    order by r.rank
)
to 'assets/data/partnerships_2016_17.csv' (header, delimiter ',')