-- Goals by player for every team per season, from the BBC scores-fixtures goal
-- feed (fct_team_goal keeps one row per goal scored by a tracked team, taken
-- from its own feed so head-to-heads aren't double-counted). Competitions are
-- collapsed to their family (e.g. "FA Cup - 3rd Round" -> "FA Cup"), and own
-- goals are attributed to a player named "Own Goal". Backs the per-team
-- "<season> goals by player" sub-pages, which filter by competition client-side.
copy (
    with goals as (
        select
            season_label,
            team_name,
            case when event_type = 'Own Goal' then 'Own Goal' else player_name end as player_name,
            case
                when competition = 'Premier League' then 'Premier League'
                when competition like 'FA Cup%' then 'FA Cup'
                when competition like 'League Cup%' then 'League Cup'
                when competition like 'UEFA Champions League%' then 'Champions League'
                when competition like 'UEFA Europa League%' then 'Europa League'
                when competition like 'UEFA Conference League%' then 'Conference League'
                when competition like 'Community Shield%' then 'Community Shield'
                when competition like 'Club Friendlies%' then 'Club Friendlies'
                else 'Other'
            end as competition
        from "premier_league"."main"."fct_team_goal"
    )
    select
        season_label,
        team_name,
        player_name,
        competition,
        count(*) as goals
    from goals
    group by season_label, team_name, player_name, competition
    order by season_label, team_name, competition, goals desc, player_name
)
to 'assets/data/team_goals_by_player.csv' (header, delimiter ',')