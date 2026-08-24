-- Total red cards by season across all teams, home and away combined. Red cards are
-- only recorded in the league's data from 2006-07 onwards, so earlier seasons report 0.
copy (
    select
        season_label,
        count(*) as matches,
        sum(home_red_cards) as home_red_cards,
        sum(away_red_cards) as away_red_cards,
        sum(home_red_cards) + sum(away_red_cards) as red_cards
    from "premier_league"."main"."fct_matches"
    group by season_label
    order by season_label
)
to 'assets/data/red_cards_by_season.csv' (header, delimiter ',')