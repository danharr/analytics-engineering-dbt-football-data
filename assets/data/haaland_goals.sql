-- Erling Haaland's cumulative Premier League goals by matchweek, one row per
-- (season_label, match_week). 2024-25 and 2025-26 come from the Pulselive v1
-- per-match event feed (fct_match_event), where player_id resolves to a name via
-- dim_player and match_id aligns with fct_matches. The in-progress 2026-27 season
-- comes from the BBC scores-fixtures feed (fct_team_goal), matched back to
-- fct_matches by kickoff date + team to recover the match_id (the BBC match id is
-- a different namespace). Goals are left-joined to Manchester City's full league
-- schedule so non-scoring weeks carry the previous cumulative total forward.
-- "matchweek" is Manchester City's own nth league game (kickoff order), matching
-- the points-race convention, so postponed fixtures don't create gaps.
-- Backs the /players/erling-haaland page.
copy (
    with schedule as (
        select
            season_label,
            row_number() over (
                partition by season_label
                order by kickoff_at, match_id
            ) as matchweek,
            match_id
        from "premier_league"."main"."fct_matches"
        where season_label in ('2024-25', '2025-26', '2026-27')
          and (home_team_name = 'Manchester City' or away_team_name = 'Manchester City')
    ),
    goals_fpl as (
        select
            e.season_label,
            e.match_id,
            count(*) as goals
        from "premier_league"."main"."fct_match_event" e
        join "premier_league"."main"."dim_player" p on p.player_id = e.player_id
        where e.event_type = 'goal'
          and p.player_name = 'Erling Haaland'
          and e.season_label in ('2024-25', '2025-26')
        group by e.season_label, e.match_id
    ),
    goals_bbc as (
        select
            g.season_label,
            m.match_id,
            count(*) as goals
        from "premier_league"."main"."fct_team_goal" g
        join "premier_league"."main"."fct_matches" m
          on cast(m.kickoff_at as date) = cast(g.kickoff_at as date)
         and m.season_label = g.season_label
         and (m.home_team_name = g.team_name or m.away_team_name = g.team_name)
        where g.competition = 'Premier League'
          and g.team_name = 'Manchester City'
          and g.player_name ilike '%Haaland%'
          and g.season_label = '2026-27'
        group by g.season_label, m.match_id
    ),
    goals as (
        select * from goals_fpl
        union all
        select * from goals_bbc
    ),
    per_matchweek as (
        select
            s.season_label,
            s.matchweek,
            coalesce(sum(g.goals), 0) as goals
        from schedule s
        left join goals g on g.match_id = s.match_id
        group by s.season_label, s.matchweek
    )
    select
        season_label,
        matchweek as match_week,
        cast(sum(goals) over (
            partition by season_label
            order by matchweek
            rows between unbounded preceding and current row
        ) as int) as cumulative_goals
    from per_matchweek
    order by season_label, matchweek
)
to 'assets/data/haaland_goals.csv' (header, delimiter ',')