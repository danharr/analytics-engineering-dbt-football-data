-- Manager timeline by club: one row per managerial spell (from the Wikipedia managers list),
-- used to draw the Gantt chart on the "Manager Timeline" page. Open-ended spells are extended
-- to today so their bars reach the present edge of the chart.
copy (
    select
        club_name as team_name,
        manager_name,
        from_date,
        case
            when until_date = date '9999-12-31' then current_date
            else until_date
        end as until_date,
        case when until_date = date '9999-12-31' then 1 else 0 end as present,
        role
    from "premier_league"."main"."fact_manager_dates"
    order by club_name, from_date
)
to 'assets/data/manager_timeline.csv' (header, delimiter ',')