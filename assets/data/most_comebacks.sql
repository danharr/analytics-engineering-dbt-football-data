-- Teams with the most half-time comebacks (trailing at HT, then winning) in a single season, top 10
copy (
    with team_games as (
        select
            match_id,
            season_label,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            home_half_time_score as ht_goals_for,
            away_half_time_score as ht_goals_against,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            season_label,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            away_half_time_score as ht_goals_for,
            home_half_time_score as ht_goals_against,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    comebacks as (
        select
            team_abbr,
            min(team_name) as team_name,
            season_label,
            count(*) as comeback_count
        from team_games
        where ht_goals_for < ht_goals_against and is_win
        group by team_abbr, season_label
    ),
    ranked as (
        select
            *,
            row_number() over (
                order by comeback_count desc, season_label desc, team_name
            ) as rn
        from comebacks
    )
    select
        team_name,
        team_abbr,
        season_label,
        comeback_count
    from ranked
    where rn <= 10
    order by comeback_count desc, season_label desc, team_name
)
to 'assets/data/most_comebacks.csv' (header, delimiter ',')