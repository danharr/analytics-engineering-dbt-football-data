-- Current unbeaten runs for the current Premier League teams. For each team in the
-- most recent season, find their most recent defeat and emit every result since then
-- (all W or D by construction) as parallel comma-joined arrays so the frontend can draw
-- a horizontal W/D strip with a marker at each season boundary.
copy (
    with current_teams as (
        select distinct
            team_abbr,
            min(team_name) as team_name
        from "premier_league"."main"."fct_team_matches"
        where season_label = (select max(season_label) from "premier_league"."main"."fct_matches")
        group by team_abbr
    ),
    team_games as (
        select
            tm.*,
            row_number() over (
                partition by tm.team_abbr
                order by tm.kickoff_at, tm.match_id
            ) as rn
        from "premier_league"."main"."fct_team_matches" tm
        join current_teams ct on ct.team_abbr = tm.team_abbr
    ),
    last_loss as (
        select
            team_abbr,
            max(rn) as loss_rn
        from team_games
        where result = 'loss'
        group by team_abbr
    ),
    loss_row as (
        select
            tg.team_abbr,
            tg.kickoff_date as last_loss_date,
            tg.opponent_abbr as last_loss_opponent,
            cast(tg.goals_for as varchar) || '-' || cast(tg.goals_against as varchar) as last_loss_score
        from team_games tg
        join last_loss ll on ll.team_abbr = tg.team_abbr and ll.loss_rn = tg.rn
    ),
    run_games as (
        select tg.*
        from team_games tg
        left join last_loss ll on ll.team_abbr = tg.team_abbr
        where ll.loss_rn is null or tg.rn > ll.loss_rn
    ),
    run_agg as (
        select
            team_abbr,
            count(*) as run_length,
            string_agg(case when result = 'win' then 'W' else 'D' end, ',' order by kickoff_at, match_id) as results,
            string_agg(opponent_abbr, ',' order by kickoff_at, match_id) as opponents,
            string_agg(cast(goals_for as varchar) || '-' || cast(goals_against as varchar), ',' order by kickoff_at, match_id) as scores,
            string_agg(season_label, ',' order by kickoff_at, match_id) as seasons,
            string_agg(cast(kickoff_date as varchar), ',' order by kickoff_at, match_id) as dates
        from run_games
        group by team_abbr
    )
    select
        ct.team_abbr,
        ct.team_name,
        lr.last_loss_date,
        lr.last_loss_opponent,
        lr.last_loss_score,
        coalesce(ra.run_length, 0) as run_length,
        ra.results,
        ra.opponents,
        ra.scores,
        ra.seasons,
        ra.dates
    from current_teams ct
    left join loss_row lr on lr.team_abbr = ct.team_abbr
    left join run_agg ra on ra.team_abbr = ct.team_abbr
    order by coalesce(ra.run_length, 0) desc, lr.last_loss_date desc, ct.team_name
)
to 'assets/data/current_unbeaten_runs.csv' (header, delimiter ',')