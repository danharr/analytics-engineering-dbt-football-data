-- Top 5 assist-scorer partnerships for the 1999-00 season. A partnership is an
-- unordered pair (assister + scorer), so a goal where A assists B and a goal where
-- B assists A both count toward the same pair. Player names come from the players
-- seed via dim_player. Backs the "Season Reviews — 1999-00" page.
copy (
    with goals as (
        select
            player_id,
            assist_player_id,
            team_name
        from "premier_league"."main"."fct_match_event"
        where event_type = 'goal'
          and assist_player_id is not null
          and player_id is not null
          and season_label = '1999-00'
    ),
    pairs as (
        select
            least(player_id, assist_player_id)   as p1,
            greatest(player_id, assist_player_id) as p2,
            count(*)                              as goals
        from goals
        group by 1, 2
    ),
    ranked as (
        select
            row_number() over (order by goals desc, p1 asc, p2 asc) as rank,
            p1,
            p2,
            goals
        from pairs
    ),
    teams as (
        select
            least(player_id, assist_player_id)   as p1,
            greatest(player_id, assist_player_id) as p2,
            string_agg(distinct team_name, ', ' order by team_name) as team
        from goals
        group by 1, 2
    )
    select
        r.rank,
        a.player_name as player_1_name,
        b.player_name as player_2_name,
        t.team,
        r.goals
    from ranked r
    left join "premier_league"."main"."dim_player" a on a.player_id = r.p1
    left join "premier_league"."main"."dim_player" b on b.player_id = r.p2
    left join teams t on t.p1 = r.p1 and t.p2 = r.p2
    where r.rank <= 5
    order by r.rank
)
to 'assets/data/partnerships_1999_00.csv' (header, delimiter ',')