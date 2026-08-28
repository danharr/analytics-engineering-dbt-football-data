-- Top 5 goal scorers for the 1999-00 season, resolving player names from the
-- players seed (populated via the players-by-id API) so the API is only hit when
-- new players need names. Backs the "Season Reviews — 1999-00" page.
copy (
    with goals as (
        select
            player_id,
            count(*)                                                   as goals,
            string_agg(distinct team_name, ', ' order by team_name)   as teams
        from "premier_league"."main"."fct_match_event"
        where event_type = 'goal'
          and season_label = '1999-00'
          and player_id is not null
        group by player_id
    ),
    ranked as (
        select
            row_number() over (order by goals desc, player_id asc) as rank,
            player_id,
            goals,
            teams
        from goals
    )
    select
        r.rank,
        p.player_name,
        r.teams as team,
        r.goals
    from ranked r
    left join "premier_league"."main"."dim_player" p on p.player_id = r.player_id
    where r.rank <= 5
    order by r.rank
)
to 'assets/data/top_scorers_1999_00.csv' (header, delimiter ',')