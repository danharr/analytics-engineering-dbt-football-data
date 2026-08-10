-- Per-club record for all managers: games, wins, draws, losses, win%
copy (
    select
        r.manager_name,
        r.team_id,
        t.team_name,
        r.games,
        r.wins,
        r.draws,
        r.losses,
        r.win_pct
    from (
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
    ) r
    left join "premier_league"."main"."dim_teams" t on t.team_id = r.team_id
    order by r.manager_name, r.games desc
)
to 'assets/data/manager_club_records.csv' (header, delimiter ',')