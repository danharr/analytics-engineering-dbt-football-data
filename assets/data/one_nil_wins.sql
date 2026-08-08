-- Share of each club's Premier League wins that finished 1-0 (home or away), clubs with 30+ wins
copy (
    with team_wins as (
        select
            home_team_id as team_id,
            home_team_name as team_name,
            home_team_abbr as team_abbr,
            (result = 'home_win')::int as is_win,
            (result = 'home_win' and home_score = 1 and away_score = 0)::int as is_1_0_home,
            0::int as is_1_0_away
        from "premier_league"."main"."fct_matches"
        union all
        select
            away_team_id as team_id,
            away_team_name as team_name,
            away_team_abbr as team_abbr,
            (result = 'away_win')::int as is_win,
            0::int as is_1_0_home,
            (result = 'away_win' and home_score = 0 and away_score = 1)::int as is_1_0_away
        from "premier_league"."main"."fct_matches"
    ),
    totals as (
        select
            team_id,
            min(team_name) as team_name,
            min(team_abbr) as team_abbr,
            sum(is_win) as total_wins,
            sum(is_1_0_home) as home_1_0_wins,
            sum(is_1_0_away) as away_1_0_wins
        from team_wins
        group by team_id
    )
    select
        team_name,
        team_abbr,
        total_wins,
        home_1_0_wins,
        away_1_0_wins,
        home_1_0_wins + away_1_0_wins as one_nil_wins,
        round(100.0 * (home_1_0_wins + away_1_0_wins) / total_wins, 1) as pct_one_nil
    from totals
    where total_wins >= 30
    order by pct_one_nil desc, total_wins desc
)
to 'assets/data/one_nil_wins.csv' (header, delimiter ',')