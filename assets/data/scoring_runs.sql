-- Longest runs of scoring and not scoring, for every team across the whole
-- Premier League era (1992-93 onwards). "scoreless" runs are consecutive games
-- where a team failed to score (goals_for = 0); "scoring" runs are consecutive
-- games where they scored at least once (goals_for >= 1). Emits each team's
-- single longest run per category, then the top 5 teams in each.
copy (
    with team_games as (
        select
            match_id,
            season_label,
            kickoff_at,
            team_name,
            team_abbr,
            opponent_name,
            goals_for
        from "premier_league"."main"."fct_team_matches"
    ),
    ranked as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as rn
        from team_games
    ),
    scoreless_flagged as (
        select
            *,
            rn - row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as grp
        from ranked
        where goals_for = 0
    ),
    scoring_flagged as (
        select
            *,
            rn - row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as grp
        from ranked
        where goals_for >= 1
    ),
    scoreless_runs as (
        select
            'scoreless' as category,
            team_abbr,
            min(team_name) as team_name,
            count(*) as run_length,
            min(kickoff_at) as start_at,
            max(kickoff_at) as end_at,
            min(season_label) as start_season,
            max(season_label) as end_season,
            string_agg(opponent_name, ', ' order by kickoff_at, match_id) as opponents
        from scoreless_flagged
        group by team_abbr, grp
    ),
    scoring_runs as (
        select
            'scoring' as category,
            team_abbr,
            min(team_name) as team_name,
            count(*) as run_length,
            min(kickoff_at) as start_at,
            max(kickoff_at) as end_at,
            min(season_label) as start_season,
            max(season_label) as end_season,
            string_agg(opponent_name, ', ' order by kickoff_at, match_id) as opponents
        from scoring_flagged
        group by team_abbr, grp
    ),
    all_runs as (
        select * from scoreless_runs
        union all
        select * from scoring_runs
    ),
    team_best as (
        select
            *,
            row_number() over (
                partition by category, team_abbr
                order by run_length desc, start_at
            ) as team_rn
        from all_runs
    ),
    ranked_runs as (
        select
            *,
            row_number() over (
                partition by category
                order by run_length desc, start_at, team_name
            ) as rn
        from team_best
        where team_rn = 1
    )
    select
        category,
        rn as rank,
        team_name,
        team_abbr,
        run_length,
        cast(start_at as date) as start_date,
        cast(end_at as date) as end_date,
        case
            when start_season = end_season then start_season
            else start_season || ' → ' || end_season
        end as seasons,
        opponents
    from ranked_runs
    where rn <= 5
    order by category, rn
)
to 'assets/data/scoring_runs.csv' (header, delimiter ',')