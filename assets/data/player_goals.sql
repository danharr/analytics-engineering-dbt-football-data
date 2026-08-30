-- Cumulative Premier League goals by matchweek for selected players, one row per
-- (player_name, season_label, match_week). Each player's seasons are listed
-- explicitly below (they only top the scoring charts for an individual season, so
-- the set is small). Completed seasons come from the Pulselive v1 per-match event
-- feed (fct_match_event), where player_id resolves to a name via dim_player and
-- match_id aligns with fct_matches. The in-progress 2026-27 season comes from the
-- BBC scores-fixtures feed (fct_team_goal), matched back to fct_matches by kickoff
-- date + team (the BBC match id is a different namespace), and is only consulted
-- for seasons the event feed doesn't already cover. Goals are left-joined to each
-- player's club's full league schedule so non-scoring weeks carry the previous
-- cumulative total forward. "matchweek" is the club's own nth league game (kickoff
-- order), matching the points-race convention so postponed fixtures don't gap.
-- Backs the /players/* pages.
copy (
    with players as (
        select 'Erling Haaland' as player_name, 'E. Haaland' as bbc_name, 'Manchester City' as team, '2023-24' as season_label
        union all select 'Erling Haaland', 'E. Haaland', 'Manchester City', '2024-25'
        union all select 'Erling Haaland', 'E. Haaland', 'Manchester City', '2025-26'
        union all select 'Erling Haaland', 'E. Haaland', 'Manchester City', '2026-27'
        union all select 'Mohamed Salah', 'Mohamed Salah', 'Liverpool', '2023-24'
        union all select 'Mohamed Salah', 'Mohamed Salah', 'Liverpool', '2024-25'
        union all select 'Mohamed Salah', 'Mohamed Salah', 'Liverpool', '2025-26'
    ),
    schedule as (
        select
            p.player_name,
            m.season_label,
            row_number() over (
                partition by p.player_name, m.season_label
                order by m.kickoff_at, m.match_id
            ) as matchweek,
            m.match_id
        from players p
        join "premier_league"."main"."fct_matches" m
          on m.season_label = p.season_label
         and (m.home_team_name = p.team or m.away_team_name = p.team)
    ),
    goals_fpl as (
        select
            p.player_name,
            e.season_label,
            e.match_id,
            count(*) as goals
        from "premier_league"."main"."fct_match_event" e
        join "premier_league"."main"."dim_player" dp on dp.player_id = e.player_id
        join players p on p.player_name = dp.player_name and p.season_label = e.season_label
        where e.event_type = 'goal'
        group by p.player_name, e.season_label, e.match_id
    ),
    goals_bbc as (
        select
            p.player_name,
            g.season_label,
            m.match_id,
            count(*) as goals
        from "premier_league"."main"."fct_team_goal" g
        join players p on p.bbc_name = g.player_name and p.team = g.team_name and p.season_label = g.season_label
        join "premier_league"."main"."fct_matches" m
          on cast(m.kickoff_at as date) = cast(g.kickoff_at as date)
         and m.season_label = g.season_label
         and (m.home_team_name = g.team_name or m.away_team_name = g.team_name)
        where g.competition = 'Premier League'
          and g.season_label not in (
              select distinct season_label from "premier_league"."main"."fct_match_event"
          )
        group by p.player_name, g.season_label, m.match_id
    ),
    goals as (
        select * from goals_fpl
        union all
        select * from goals_bbc
    ),
    per_matchweek as (
        select
            s.player_name,
            s.season_label,
            s.matchweek,
            coalesce(sum(g.goals), 0) as goals
        from schedule s
        left join goals g
          on g.match_id = s.match_id
         and g.player_name = s.player_name
        group by s.player_name, s.season_label, s.matchweek
    )
    select
        player_name,
        season_label,
        matchweek as match_week,
        cast(sum(goals) over (
            partition by player_name, season_label
            order by matchweek
            rows between unbounded preceding and current row
        ) as int) as cumulative_goals
    from per_matchweek
    order by player_name, season_label, matchweek
)
to 'assets/data/player_goals.csv' (header, delimiter ',')