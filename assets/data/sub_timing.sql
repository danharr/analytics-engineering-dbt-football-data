-- Substitution timing by team for the 1992-93 sample: one row per substitution,
-- with the team (full + short name) and the minute the change was made. The page
-- groups these by team and plots each substitution as a dot along a 0-90 minute
-- axis. Backs the /season-reviews/1992-93-sample page.
copy (
    select
        team_name,
        team_short_name,
        minute
    from "premier_league"."main"."fct_match_event"
    where event_type = 'sub'
      and season_label = '1992-93'
    order by team_name, minute
)
to 'assets/data/sub_timing.csv' (header, delimiter ',')