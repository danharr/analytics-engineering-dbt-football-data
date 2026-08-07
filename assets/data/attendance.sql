copy (
    select
        season_label,
        home_team_abbr as team_abbr,
        min(home_team_name) as team_name,
        round(avg(attendance), 0) as avg_home_attendance
    from fct_matches
    where attendance is not null
    group by season_label, home_team_abbr
    order by season_label, home_team_abbr
)
to 'assets/data/attendance.csv' (header, delimiter ',');
