-- Best and worst manager debuts: the first league match for each manager in charge of
-- each club they managed (permanent appointments only), split into the top 5 biggest
-- wins and top 5 biggest defeats.
copy (
    with debuts as (
        select
            manager_name,
            team_id,
            opponent_id,
            is_home,
            goals_for,
            goals_against,
            (goals_for - goals_against) as goal_diff,
            kickoff_date,
            row_number() over (
                partition by manager_name, team_id
                order by kickoff_at, match_id
            ) as rn
        from "premier_league"."main"."fct_manager_matches"
        where manager_name is not null
          and role <> 'caretaker'
    ),
    first_matches as (
        select * from debuts where rn = 1
    ),
    named as (
        select
            fm.manager_name,
            t.team_name,
            o.team_name as opponent_name,
            case when fm.is_home then 'H' else 'A' end as home_away,
            fm.goals_for,
            fm.goals_against,
            cast(fm.goals_for as varchar) || '-' || cast(fm.goals_against as varchar) as score,
            fm.goal_diff,
            fm.kickoff_date
        from first_matches fm
        left join "premier_league"."main"."dim_teams" t on t.team_id = fm.team_id
        left join "premier_league"."main"."dim_teams" o on o.team_id = fm.opponent_id
    ),
    top_wins as (
        select
            'win' as list,
            row_number() over (
                order by goal_diff desc, goals_for desc, kickoff_date, manager_name
            ) as rank,
            manager_name,
            team_name,
            opponent_name,
            home_away,
            score,
            goal_diff,
            kickoff_date
        from named
        where goal_diff > 0
        order by rank
        limit 5
    ),
    top_defeats as (
        select
            'defeat' as list,
            row_number() over (
                order by goal_diff asc, goals_against desc, kickoff_date, manager_name
            ) as rank,
            manager_name,
            team_name,
            opponent_name,
            home_away,
            score,
            goal_diff,
            kickoff_date
        from named
        where goal_diff < 0
        order by rank
        limit 5
    )
    select
        list,
        rank,
        manager_name,
        team_name,
        opponent_name,
        home_away,
        score,
        goal_diff,
        kickoff_date
    from top_wins
    union all
    select
        list,
        rank,
        manager_name,
        team_name,
        opponent_name,
        home_away,
        score,
        goal_diff,
        kickoff_date
    from top_defeats
    order by list desc, rank
)
to 'assets/data/manager_debuts.csv' (header, delimiter ',')