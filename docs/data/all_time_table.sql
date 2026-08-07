copy (
    with appearances as (
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
        count(*) as matches_played,
        count(*) filter (where side = 'home' and result = 'home_win'
                       or side = 'away' and result = 'away_win') as wins,
        count(*) filter (where result = 'draw') as draws,
        count(*) filter (where side = 'home' and result = 'away_win'
                       or side = 'away' and result = 'home_win') as losses,
        3 * count(*) filter (where side = 'home' and result = 'home_win'
                           or side = 'away' and result = 'away_win')
          + count(*) filter (where result = 'draw') as points
    from appearances
    group by team_abbr
    order by points desc, team_abbr
)
to 'web/data/all_time_table.csv' (header, delimiter ',');
