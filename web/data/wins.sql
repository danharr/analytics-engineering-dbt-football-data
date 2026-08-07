copy (
    with matches as (
        select
            match_id,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            'home' as side,
            result
        from fct_matches
        union all
        select
            match_id,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            'away' as side,
            result
        from fct_matches
    )
    select
        team_abbr,
        min(team_name) as team_name,
        count(*) filter (where side = 'home' and result = 'home_win') as home_wins,
        count(*) filter (where side = 'away' and result = 'away_win') as away_wins,
        count(*) filter (
            where side = 'home' and result = 'home_win'
               or side = 'away' and result = 'away_win'
        ) as total_wins
    from matches
    group by team_abbr
    order by total_wins desc, team_abbr
)
to 'web/data/wins.csv' (header, delimiter ',');
