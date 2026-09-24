-- Latest completed match (home/away teams, score, date) for the home page
copy (
    select
        home_team_name,
        away_team_name,
        home_score,
        away_score,
        kickoff_date
    from "premier_league"."main"."fct_matches"
    where home_score is not null
      and away_score is not null
    order by kickoff_at desc, match_id desc
    limit 1
)
to 'assets/data/latest_match.csv' (header, delimiter ',')