import seasonTableCsv from '~/assets/data/season_table.csv?raw'
import seasonPointsCsv from '~/assets/data/season_points.csv?raw'
import seasonBiggestWinsCsv from '~/assets/data/season_biggest_wins.csv?raw'
import seasonScoringCsv from '~/assets/data/season_scoring.csv?raw'
import {
  parse, toInt, toFloat,
  type SeasonTableRow, type SeasonPointRow, type SeasonBiggestWinRow, type SeasonScoringRow
} from '~/composables/useChartHelpers'

export const seasonTable = parse<SeasonTableRow>(seasonTableCsv, d => ({
  season_label: d.season_label,
  position: toInt(d, 'position'),
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  played: toInt(d, 'played'),
  won: toInt(d, 'won'),
  drawn: toInt(d, 'drawn'),
  lost: toInt(d, 'lost'),
  goals_for: toInt(d, 'goals_for'),
  goals_against: toInt(d, 'goals_against'),
  goal_diff: toInt(d, 'goal_diff'),
  points: toInt(d, 'points')
}))

export const seasonPoints = parse<SeasonPointRow>(seasonPointsCsv, d => ({
  season_label: d.season_label,
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  matchweek: toInt(d, 'matchweek'),
  points: toInt(d, 'points')
}))

export const seasonBiggestWins = parse<SeasonBiggestWinRow>(seasonBiggestWinsCsv, d => ({
  season_label: d.season_label,
  rank: toInt(d, 'rank'),
  team_name: d.team_name,
  team_abbr: d.team_abbr,
  opponent_name: d.opponent_name,
  opponent_abbr: d.opponent_abbr,
  home_away: d.home_away,
  goals_for: toInt(d, 'goals_for'),
  goals_against: toInt(d, 'goals_against'),
  score: d.score,
  goal_diff: toInt(d, 'goal_diff'),
  kickoff_date: d.kickoff_date
}))

export const seasonScoring = parse<SeasonScoringRow>(seasonScoringCsv, d => ({
  season_label: d.season_label,
  matches: toInt(d, 'matches'),
  total_goals: toInt(d, 'total_goals'),
  goals_per_game: toFloat(d, 'goals_per_game'),
  nil_nils: toInt(d, 'nil_nils'),
  draws: toInt(d, 'draws'),
  draw_pct: toFloat(d, 'draw_pct'),
  red_cards: toInt(d, 'red_cards'),
  reds_per_game: toFloat(d, 'reds_per_game'),
  goals_rank: toInt(d, 'goals_rank'),
  nil_nils_rank: toInt(d, 'nil_nils_rank'),
  draw_rank: toInt(d, 'draw_rank'),
  excitement_score: toInt(d, 'excitement_score'),
  excitement_rank: toInt(d, 'excitement_rank')
}))
