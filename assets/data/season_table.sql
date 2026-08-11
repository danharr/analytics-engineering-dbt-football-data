-- Final league table for every Premier League season (P/W/D/L/GF/GA/GD/points),
-- ranked like a real table: points, then goal difference, then goals scored, then team name.
-- One row per team-season. Backs the per-season pages (e.g. /epl-1992-93-season-stats).
copy (
    select
        season_label,
        row_number() over (
            partition by season_label
            order by points desc, goal_diff desc, goals_for desc, team_name
        ) as position,
        team_abbr,
        team_name,
        played,
        won,
        drawn,
        lost,
        goals_for,
        goals_against,
        goal_diff,
        points
    from (
        select
            season_label,
            team_abbr,
            min(team_name) as team_name,
            count(*) as played,
            count(*) filter (where result = 'win') as won,
            count(*) filter (where result = 'draw') as drawn,
            count(*) filter (where result = 'loss') as lost,
            sum(goals_for) as goals_for,
            sum(goals_against) as goals_against,
            sum(goal_diff) as goal_diff,
            sum(points) as points
        from "premier_league"."main"."fct_team_matches"
        group by season_label, team_abbr
    )
    order by season_label, points desc, goal_diff desc, goals_for desc, team_name
)
to 'assets/data/season_table.csv' (header, delimiter ',')