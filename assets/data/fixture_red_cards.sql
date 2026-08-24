-- Premier League fixtures with the most red cards, home vs away treated as a distinct
-- fixture, broken down by season for the top 5 fixtures.
copy (
    with fixture_totals as (
        select
            home_team_name,
            away_team_name,
            home_team_abbr,
            away_team_abbr,
            count(*) as total_matches,
            coalesce(sum(home_red_cards), 0) + coalesce(sum(away_red_cards), 0) as total_red_cards
        from "premier_league"."main"."fct_matches"
        group by home_team_name, away_team_name, home_team_abbr, away_team_abbr
        order by total_red_cards desc, total_matches desc, home_team_name
        limit 5
    ),
    by_season as (
        select
            home_team_name,
            away_team_name,
            home_team_abbr,
            away_team_abbr,
            season_label,
            count(*) as matches,
            coalesce(sum(home_red_cards), 0) + coalesce(sum(away_red_cards), 0) as red_cards
        from "premier_league"."main"."fct_matches"
        group by home_team_name, away_team_name, home_team_abbr, away_team_abbr, season_label
    )
    select
        t.home_team_name,
        t.away_team_name,
        t.home_team_abbr,
        t.away_team_abbr,
        s.season_label,
        s.matches,
        s.red_cards,
        t.total_red_cards
    from fixture_totals t
    join by_season s
      on s.home_team_name = t.home_team_name
     and s.away_team_name = t.away_team_name
    order by t.total_red_cards desc, t.home_team_name, s.season_label
)
to 'assets/data/fixture_red_cards.csv' (header, delimiter ',')