copy (
    with team_counts as (
        select season_label, count(distinct team_id) as team_count
        from (
            select season_label, home_team_id as team_id from fct_matches
            union all
            select season_label, away_team_id as team_id from fct_matches
        )
        group by season_label
    )
    select
        m.season_label,
        tc.team_count,
        count(*) as matches_played,
        round(2.0 * count(*) / tc.team_count, 1) as avg_matches_per_team
    from fct_matches as m
    left join team_counts as tc on m.season_label = tc.season_label
    group by m.season_label, tc.team_count
    order by min(m.kickoff_date)
)
to 'assets/data/season_quality.csv' (header, delimiter ',');
