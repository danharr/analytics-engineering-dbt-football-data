-- Managers with the most Premier League wins, aggregated across all their spells
-- (permanent + caretaker), from the Wikipedia managers list joined to match results.
copy (
    select
        rank() over (order by wins desc, win_pct desc, games desc) as rank,
        manager_name,
        wins,
        games,
        draws,
        losses,
        win_pct,
        points,
        goals_for,
        goals_against
    from (
        select
            manager_name,
            count(*) as games,
            sum(is_win) as wins,
            sum(case when result = 'draw' then 1 else 0 end) as draws,
            sum(case when result = 'loss' then 1 else 0 end) as losses,
            round(100.0 * sum(is_win) / count(*), 1) as win_pct,
            sum(points) as points,
            sum(goals_for) as goals_for,
            sum(goals_against) as goals_against
        from "premier_league"."main"."fct_manager_matches"
        where manager_name is not null
        group by manager_name
    )
    order by wins desc, win_pct desc, games desc, manager_name
)
to 'assets/data/manager_wins.csv' (header, delimiter ',')