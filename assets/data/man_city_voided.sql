-- "What if Manchester City lost every 2025-26 game 3-0?" — the league table re-scored.
-- Every Man City match becomes a 3-0 defeat, so each opponent is awarded a 3-0 win.
-- Shows the adjusted table plus each team's original points and the points/position change.
-- Backs the /premier-league-table-if-man-city-games-voided page.
copy (
    with adjusted as (
        select
            season_label,
            team_abbr,
            team_name,
            opponent_abbr,
            case
                when team_abbr = 'MCI' then 'loss'
                when opponent_abbr = 'MCI' then 'win'
                else result
            end as adj_result,
            case
                when team_abbr = 'MCI' then 0
                when opponent_abbr = 'MCI' then 3
                else goals_for
            end as adj_goals_for,
            case
                when team_abbr = 'MCI' then 3
                when opponent_abbr = 'MCI' then 0
                else goals_against
            end as adj_goals_against,
            case
                when team_abbr = 'MCI' then 0
                when opponent_abbr = 'MCI' then 3
                else points
            end as adj_points,
            result,
            goals_for,
            goals_against,
            points
        from "premier_league"."main"."fct_team_matches"
        where season_label = '2025-26'
    ),
    agg as (
        select
            team_abbr,
            min(team_name) as team_name,
            count(*) as played,
            count(*) filter (where adj_result = 'win') as won,
            count(*) filter (where adj_result = 'draw') as drawn,
            count(*) filter (where adj_result = 'loss') as lost,
            sum(adj_goals_for) as goals_for,
            sum(adj_goals_against) as goals_against,
            sum(adj_goals_for - adj_goals_against) as goal_diff,
            sum(adj_points) as points,
            sum(goals_for) as orig_goals_for,
            sum(goals_against) as orig_goals_against,
            sum(goals_for - goals_against) as orig_goal_diff,
            sum(points) as original_points
        from adjusted
        group by team_abbr
    )
    select
        '2025-26' as season_label,
        row_number() over (
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
        points,
        original_points,
        points - original_points as points_change,
        row_number() over (
            order by original_points desc, orig_goal_diff desc, orig_goals_for desc, team_name
        ) as original_position,
        row_number() over (
            order by original_points desc, orig_goal_diff desc, orig_goals_for desc, team_name
        ) - row_number() over (
            order by points desc, goal_diff desc, goals_for desc, team_name
        ) as position_change
    from agg
    order by position
)
to 'assets/data/man_city_voided.csv' (header, delimiter ',')