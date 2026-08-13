-- The top 5 biggest wins in each season, by winning margin (then goals scored), so each
-- season page can show the season's most one-sided results.
copy (
    with wins as (
        select
            season_label,
            team_abbr,
            team_name,
            opponent_abbr,
            opponent_name,
            is_home,
            goals_for,
            goals_against,
            goal_diff,
            kickoff_date,
            row_number() over (
                partition by season_label
                order by goal_diff desc, goals_for desc, kickoff_date, team_abbr
            ) as rank
        from "premier_league"."main"."fct_team_matches"
        where goal_diff > 0
    )
    select
        season_label,
        rank,
        team_name,
        team_abbr,
        opponent_name,
        opponent_abbr,
        case when is_home then 'H' else 'A' end as home_away,
        goals_for,
        goals_against,
        cast(goals_for as varchar) || '-' || cast(goals_against as varchar) as score,
        goal_diff,
        kickoff_date
    from wins
    where rank <= 5
    order by season_label, rank
)
to 'assets/data/season_biggest_wins.csv' (header, delimiter ',')