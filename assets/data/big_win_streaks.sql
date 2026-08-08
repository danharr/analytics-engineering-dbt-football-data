-- Longest winning streaks within a single season (11+ wins), one row per win game
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
            home_score as goals_for,
            away_score as goals_against,
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
            away_score as goals_for,
            home_score as goals_against,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    games_ranked as (
        select
            *,
            row_number() over (
                partition by team_abbr, season_label
                order by kickoff_at, match_id
            ) as rn_in_season
        from team_games
    ),
    wins as (
        select
            *,
            rn_in_season - row_number() over (
                partition by team_abbr
                order by season_label, kickoff_at, match_id
            ) as grp
        from games_ranked
        where is_win
    ),
    streaks as (
        select
            team_abbr,
            min(team_name) as team_name,
            season_label,
            grp,
            count(*) as streak_length,
            min(kickoff_at) as started_at
        from wins
        group by team_abbr, season_label, grp
        having count(*) > 10
    ),
    ranked_streaks as (
        select
            *,
            row_number() over (
                order by streak_length desc, started_at, team_name
            ) as streak_id
        from streaks
    )
    select
        rs.streak_id,
        rs.team_name,
        rs.season_label,
        rs.streak_length,
        date(w.kickoff_at) as match_date,
        w.opponent_abbr,
        w.opponent_name,
        cast(w.goals_for as varchar) || '-' || cast(w.goals_against as varchar) as score
    from ranked_streaks rs
    join wins w
        on w.team_abbr = rs.team_abbr
       and w.season_label = rs.season_label
       and w.grp = rs.grp
    order by rs.streak_id, w.kickoff_at, w.match_id
)
to 'assets/data/big_win_streaks.csv' (header, delimiter ',')