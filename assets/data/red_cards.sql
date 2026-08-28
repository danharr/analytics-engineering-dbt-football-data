-- Red card timing by team and season: one row per red card (straight red or a
-- second yellow, both of which dismiss a player), with the team and the minute.
-- Backs the red card heat map on the season review pages.
copy (
    select
        season_label,
        team_name,
        team_short_name,
        minute
    from "premier_league"."main"."fct_match_event"
    where event_type = 'card'
      and card_type in ('StraightRed', 'SecondYellow')
    order by season_label, team_name, minute
)
to 'assets/data/red_cards.csv' (header, delimiter ',')