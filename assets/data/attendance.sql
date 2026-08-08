-- Average home attendance by team per season
copy (
    select
        season_label,
        team_abbr,
        min(team_name) as team_name,
        round(avg(attendance), 0) as avg_home_attendance
    from "premier_league"."main"."fct_team_matches"
    where attendance is not null and is_home
    group by season_label, team_abbr
    order by season_label, team_abbr
)
to 'assets/data/attendance.csv' (header, delimiter ',')