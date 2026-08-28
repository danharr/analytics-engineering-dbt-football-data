-- Yellow card timing by team and season: one row per yellow card, with the
-- team (full + short name) and the minute it was shown. The page groups these by
-- team and plots each card as a cell along a 0-90 minute axis. Backs the yellow
-- card heat map on the season review pages. Note: a player's second yellow is
-- recorded as card_type 'SecondYellow' and is counted under the red cards chart.
copy (
    select
        season_label,
        team_name,
        team_short_name,
        minute
    from "premier_league"."main"."fct_match_event"
    where event_type = 'card'
      and card_type = 'Yellow'
    order by season_label, team_name, minute
)
to 'assets/data/yellow_cards.csv' (header, delimiter ',')