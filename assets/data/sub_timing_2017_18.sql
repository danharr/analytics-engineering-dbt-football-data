-- Substitution timing by team for the 2017-18 season. Backs the season review page.
copy (
    select team_name, team_short_name, minute
    from "premier_league"."main"."fct_match_event"
    where event_type = 'sub' and season_label = '2017-18'
    order by team_name, minute
)
to 'assets/data/sub_timing_2017_18.csv' (header, delimiter ',')