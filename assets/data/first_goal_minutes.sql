-- Distribution of the minute the FIRST goal is scored in each match, by season,
-- for 2018-19 through 2025-26 (the seasons covered by the Pulselive v1 per-match
-- event feed). For every match the earliest goal minute is taken (own goals count,
-- they are still the match's first goal), and 0-0 draws contribute nothing. The
-- minute is binned to exact minutes 1-90 with a catch-all "90+" bucket for
-- first goals scored in stoppage time (the feed records minutes up to ~100+).
-- A minute spine fills every minute so zero-count minutes still render.
-- Backs the "Super 6 Golden Goal Data" page.
copy (
    with minutes as (
        select unnest(range(1, 91)) as minute
        union all
        select 91 as minute
    ),
    first_goals as (
        select
            season_label,
            match_id,
            min(minute) as first_minute
        from "premier_league"."main"."fct_match_event"
        where event_type = 'goal'
          and season_label between '2018-19' and '2025-26'
        group by season_label, match_id
    ),
    binned as (
        select
            season_label,
            case when first_minute > 90 then 91 else first_minute end as minute,
            count(*) as matches
        from first_goals
        group by season_label, minute
    ),
    seasons as (
        select distinct season_label from first_goals
    )
    select
        s.season_label,
        m.minute,
        case when m.minute = 91 then '90+' else cast(m.minute as varchar) end as label,
        coalesce(b.matches, 0) as matches
    from seasons s
    cross join minutes m
    left join binned b
      on b.season_label = s.season_label
     and b.minute = m.minute
    order by s.season_label, m.minute
)
to 'assets/data/first_goal_minutes.csv' (header, delimiter ',')