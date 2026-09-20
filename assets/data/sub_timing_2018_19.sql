-- Substitution timing by team for the 2018-19 season. Backs the season review page.
copy (
    select team_name, team_short_name, minute
    from "premier_league"."main"."fct_match_event"
    where event_type = 'sub' and season_label = '2018-19'
    order by team_name, minute
)
to 'assets/data/sub_timing_2018_19.csv' (header, delimiter ',')