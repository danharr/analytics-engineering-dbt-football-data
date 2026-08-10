-- Per-club record for all managers: games, wins, draws, losses, win%
copy (
    select
        manager_name,
        team_id,
        count(*) as games,
        sum(is_win) as wins,
        sum(case when result = 'draw' then 1 else 0 end) as draws,
        sum(case when result = 'loss' then 1 else 0 end) as losses,
        round(100.0 * sum(is_win) / count(*), 1) as win_pct
    from "premier_league"."main"."fct_manager_matches"
    where manager_name is not null
    group by manager_name, team_id
    order by manager_name, games desc
)
to 'assets/data/manager_club_records.csv' (header, delimiter ',')