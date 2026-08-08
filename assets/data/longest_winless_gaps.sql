-- Longest calendar gap each team went between consecutive wins, across all seasons
copy (
    with team_games as (
        select
            match_id,
            kickoff_at,
            kickoff_date,
            home_team_id as team_id,
            home_team_name as team_name,
            home_team_abbr as team_abbr,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            kickoff_at,
            kickoff_date,
            away_team_id as team_id,
            away_team_name as team_name,
            away_team_abbr as team_abbr,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    games_ranked as (
        select
            *,
            row_number() over (
                partition by team_id
                order by kickoff_at, match_id
            ) as game_rank
        from team_games
    ),
    wins as (
        select
            *,
            lag(game_rank) over (
                partition by team_id
                order by kickoff_at, match_id
            ) as prev_win_game_rank,
            lag(kickoff_date) over (
                partition by team_id
                order by kickoff_at, match_id
            ) as prev_win_date
        from games_ranked
        where is_win
    ),
    gaps as (
        select
            team_id,
            min(team_name) as team_name,
            min(team_abbr) as team_abbr,
            prev_win_date as start_date,
            kickoff_date as end_date,
            datediff('day', prev_win_date, kickoff_date) as gap_days,
            game_rank - prev_win_game_rank - 1 as matches_between
        from wins
        where prev_win_date is not null
        group by
            team_id,
            prev_win_date,
            kickoff_date,
            game_rank - prev_win_game_rank - 1
    ),
    ranked as (
        select
            *,
            row_number() over (
                partition by team_id
                order by gap_days desc, end_date desc
            ) as rn
        from gaps
    )
    select
        team_name,
        team_abbr,
        start_date,
        end_date,
        gap_days,
        matches_between
    from ranked
    where rn = 1
    order by gap_days desc, team_name
)
to 'assets/data/longest_winless_gaps.csv' (header, delimiter ',')