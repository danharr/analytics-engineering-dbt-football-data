-- Premier League Golden Boot winners and their cumulative goals by matchweek,
-- one row per (player_name, season_label, match_week). The winner of each season
-- is computed dynamically as the top scorer in fct_match_event (own goals
-- excluded, ties shared via rank()), so the page self-updates as more seasons of
-- the Pulselive v1 per-match event feed are scraped. A player's total counts all
-- goals across the season even if they changed clubs mid-season (e.g. Sheringham
-- 1992-93: one for Nottingham Forest, the rest for Tottenham); the "club" shown
-- is the team they scored most for (arg_max). The cumulative line is built from
-- the club's full league schedule (kickoff order) with goals tallied by kickoff
-- date, so non-scoring weeks carry the previous total forward and "matchweek" is
-- the club's own nth league game, matching the points-race convention.
-- Backs the "Premier League Golden Boot Winners" page.
copy (
    with team_goals as (
        select
            e.season_label,
            e.player_id,
            p.player_name,
            e.team_name,
            count(*) as goals
        from "premier_league"."main"."fct_match_event" e
        left join "premier_league"."main"."dim_player" p on p.player_id = e.player_id
        where e.event_type = 'goal'
          and e.goal_type is distinct from 'Own'
          and e.player_id is not null
        group by e.season_label, e.player_id, p.player_name, e.team_name
    ),
    totals as (
        select
            season_label,
            player_id,
            player_name,
            sum(goals)                              as goals,
            arg_max(team_name, goals)               as team_name
        from team_goals
        group by season_label, player_id, player_name
    ),
    ranked as (
        select
            season_label,
            player_id,
            player_name,
            team_name,
            goals,
            rank() over (partition by season_label order by goals desc) as rnk
        from totals
    ),
    complete_seasons as (
        select season_label
        from "premier_league"."main"."fct_match_event"
        group by season_label
        having count(distinct match_id) >= 380
    ),
    winners as (
        select
            season_label,
            player_id,
            player_name,
            team_name,
            goals
        from ranked
        where rnk = 1
          and player_name is not null
          and season_label in (select season_label from complete_seasons)
    ),
    schedule as (
        select
            w.player_name,
            w.season_label,
            row_number() over (
                partition by w.player_name, w.season_label
                order by m.kickoff_at, m.match_id
            ) as matchweek,
            m.kickoff_at as week_kickoff
        from winners w
        join "premier_league"."main"."fct_matches" m
          on m.season_label = w.season_label
         and (m.home_team_name = w.team_name or m.away_team_name = w.team_name)
    ),
    goal_events as (
        select
            w.player_name,
            w.season_label,
            m.kickoff_at as goal_kickoff
        from winners w
        join "premier_league"."main"."fct_match_event" e
          on e.player_id = w.player_id
         and e.season_label = w.season_label
        join "premier_league"."main"."fct_matches" m on m.match_id = e.match_id
        where e.event_type = 'goal'
          and e.goal_type is distinct from 'Own'
    ),
    cumulative as (
        select
            s.player_name,
            s.season_label,
            s.matchweek,
            cast((
                select count(*)
                from goal_events g
                where g.player_name = s.player_name
                  and g.season_label = s.season_label
                  and g.goal_kickoff <= s.week_kickoff
            ) as int) as cumulative_goals
        from schedule s
    )
    select
        c.player_name,
        w.season_label,
        w.team_name as team,
        c.matchweek as match_week,
        c.cumulative_goals
    from cumulative c
    join winners w
      on w.player_name = c.player_name
     and w.season_label = c.season_label
    order by w.season_label, c.matchweek, c.player_name
)
to 'assets/data/golden_boots.csv' (header, delimiter ',')