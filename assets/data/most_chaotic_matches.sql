-- Most chaotic matches: 3 points per goal + 2 points per red card, top 50
copy (
    select
        match_id,
        kickoff_date,
        season_label,
        home_team_name,
        home_team_abbr,
        home_score,
        coalesce(home_red_cards, 0) as home_red_cards,
        away_team_name,
        away_team_abbr,
        away_score,
        coalesce(away_red_cards, 0) as away_red_cards,
        home_score + away_score as total_goals,
        coalesce(home_red_cards, 0) + coalesce(away_red_cards, 0) as total_red_cards,
        3 * (home_score + away_score) as goals_points,
        2 * (coalesce(home_red_cards, 0) + coalesce(away_red_cards, 0)) as red_points,
        3 * (home_score + away_score) + 2 * (coalesce(home_red_cards, 0) + coalesce(away_red_cards, 0)) as chaos_score
    from "premier_league"."main"."fct_matches"
    order by chaos_score desc, kickoff_date, match_id
    limit 50
)
to 'assets/data/most_chaotic_matches.csv' (header, delimiter ',')