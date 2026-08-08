-- Longest consecutive run of matches where each team was losing at half-time but came back to win
copy (
    with team_games as (
        select
            match_id,
            season_label,
            kickoff_at,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            away_team_abbr as opponent_abbr,
            away_team_name as opponent_name,
            home_half_time_score as ht_goals_for,
            away_half_time_score as ht_goals_against,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            season_label,
            kickoff_at,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            home_team_abbr as opponent_abbr,
            home_team_name as opponent_name,
            away_half_time_score as ht_goals_for,
            home_half_time_score as ht_goals_against,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    games_ranked as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as rn
        from team_games
    ),
    flagged as (
        select
            *,
            rn - row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as grp
        from games_ranked
        where ht_goals_for < ht_goals_against and is_win
    ),
    runs as (
        select
            team_abbr,
            min(team_name) as team_name,
            min(season_label) as start_season,
            max(season_label) as end_season,
            count(*) as run_length,
            min(kickoff_at) as start_at,
            max(kickoff_at) as end_at,
            grp
        from flagged
        group by team_abbr, grp
    ),
    ranked_runs as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by run_length desc, start_at, team_name
            ) as rn
        from runs
    ),
    final as (
        select * from ranked_runs where rn = 1
    )
    select
        f.team_name,
        f.team_abbr,
        f.run_length,
        case
            when f.start_season = f.end_season then f.start_season
            else f.start_season || ' → ' || f.end_season
        end as seasons,
        date(f.start_at) as start_date,
        date(f.end_at) as end_date,
        (
            select string_agg(w.opponent_name, ', ' order by w.kickoff_at, w.match_id)
            from flagged w
            where w.team_abbr = f.team_abbr and w.grp = f.grp
        ) as opponents
    from final f
    order by f.run_length desc, f.team_name
)
to 'assets/data/comeback_kings.csv' (header, delimiter ',')