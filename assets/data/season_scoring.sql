-- Season-by-season scoring and discipline trends, plus an "excitement" ranking built
-- from goals per game (high), nil-nils (few) and draw share (low). Red cards are only
-- recorded from 2006-07 onwards, so earlier seasons report 0.
copy (
    with per_season as (
        select
            season_label,
            count(*) as matches,
            sum(home_score + away_score) as total_goals,
            round(sum(home_score + away_score) / count(*), 2) as goals_per_game,
            count(*) filter (where home_score = 0 and away_score = 0) as nil_nils,
            count(*) filter (where home_score = away_score) as draws,
            round(100.0 * count(*) filter (where home_score = away_score) / count(*), 1) as draw_pct,
            sum(home_red_cards + away_red_cards) as red_cards,
            round(sum(home_red_cards + away_red_cards) / count(*), 2) as reds_per_game
        from "premier_league"."main"."fct_matches"
        group by season_label
    ),
    ranked as (
        select
            *,
            rank() over (order by goals_per_game desc) as goals_rank,
            rank() over (order by nil_nils asc) as nil_nils_rank,
            rank() over (order by draw_pct asc) as draw_rank
        from per_season
    )
    select
        season_label,
        matches,
        total_goals,
        goals_per_game,
        nil_nils,
        draws,
        draw_pct,
        red_cards,
        reds_per_game,
        goals_rank,
        nil_nils_rank,
        draw_rank,
        (goals_rank + nil_nils_rank + draw_rank) as excitement_score,
        rank() over (
            order by (goals_rank + nil_nils_rank + draw_rank) asc, goals_per_game desc
        ) as excitement_rank
    from ranked
    order by excitement_rank
)
to 'assets/data/season_scoring.csv' (header, delimiter ',')