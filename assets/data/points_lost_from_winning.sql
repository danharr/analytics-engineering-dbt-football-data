-- Points lost from winning positions for West Ham United in 2025-26 (Premier League
-- only). A game counts when West Ham led at some point but failed to win: a draw costs
-- 2 points and a defeat costs 3. The running score is reconstructed from the per-minute
-- BBC goal feed (stg_match_events), which is the only source with exact goal times;
-- fct_matches has no goal timing. First-half stoppage-time goals (45'+n) are ordered
-- before the second half by adding stoppage * 0.01 to the base minute.
copy (
    with goals as (
        select
            match_id,
            kickoff_at,
            team_side,
            team_name,
            opponent_name,
            minute,
            home_score,
            away_score,
            winner,
            case when team_name = 'West Ham United' then 1 else -1 end as delta,
            cast(split_part(replace(minute, '''', ''), '+', 1) as int) as base_min,
            case when minute like '%+%'
                then cast(split_part(replace(minute, '''', ''), '+', 2) as int)
                else 0
            end as stoppage
        from "premier_league"."main"."stg_match_events"
        where focus_team = 'West Ham United'
          and competition = 'Premier League'
          and action_type = 'goal'
          and year(kickoff_at) - (case when month(kickoff_at) < 8 then 1 else 0 end) = 2025
    ),
    running as (
        select
            *,
            sum(delta) over (
                partition by match_id
                order by (base_min + stoppage * 0.01)
                rows unbounded preceding
            ) as running_diff
        from goals
    ),
    matches as (
        select
            match_id,
            min(kickoff_at) as kickoff_at,
            max(home_score) as home_score,
            max(away_score) as away_score,
            max(winner) as winner,
            max(case when team_name = 'West Ham United' then team_side end) as venue,
            max(case when team_name = 'West Ham United' then opponent_name end) as opponent,
            max(running_diff) as led_by
        from running
        group by match_id
    ),
    with_result as (
        select
            *,
            case when venue = 'home' then home_score else away_score end as goals_for,
            case when venue = 'home' then away_score else home_score end as goals_against,
            case
                when (winner = 'home' and venue = 'home') or (winner = 'away' and venue = 'away') then 'win'
                when winner = 'draw' then 'draw'
                else 'loss'
            end as result
        from matches
    )
    select
        cast(kickoff_at as date) as kickoff_date,
        opponent,
        venue,
        goals_for || '-' || goals_against as score,
        result,
        case when result = 'draw' then 2 else 3 end as points_lost,
        led_by
    from with_result
    where led_by > 0
      and result in ('draw', 'loss')
    order by kickoff_at
)
to 'assets/data/points_lost_from_winning.csv' (header, delimiter ',')