-- Substitution timing by team for the 2016-17 season. Backs the season review page.
copy (
    select team_name, team_short_name, minute
    from "premier_league"."main"."fct_match_event"
    where event_type = 'sub' and season_label = '2016-17'
    order by team_name, minute
)
to 'assets/data/sub_timing_2016_17.csv' (header, delimiter ',')