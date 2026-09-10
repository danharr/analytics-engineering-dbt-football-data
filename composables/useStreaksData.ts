import fiveGameStreaksCsv from '~/assets/data/five_game_streaks.csv?raw'
import bigWinStreaksCsv from '~/assets/data/big_win_streaks.csv?raw'
import longestWinlessGapsCsv from '~/assets/data/longest_winless_gaps.csv?raw'
import mostChaoticMatchesCsv from '~/assets/data/most_chaotic_matches.csv?raw'
import oneNilWinsCsv from '~/assets/data/one_nil_wins.csv?raw'
import htLeadNoWinStreaksCsv from '~/assets/data/ht_lead_no_win_streaks.csv?raw'
import comebackKingsCsv from '~/assets/data/comeback_kings.csv?raw'
import mostComebacksCsv from '~/assets/data/most_comebacks.csv?raw'
import scoringRunsCsv from '~/assets/data/scoring_runs.csv?raw'
import {
  parse, toInt, toFloat,
  type FiveGameStreakRow, type BigWinStreakGame, type LongestWinlessGapRow,
  type MostChaoticMatchRow, type OneNilWinRow, type HtLeadNoWinStreakRow,
  type ComebackKingRow, type MostComebacksRow, type ScoringRunRow
} from '~/composables/useChartHelpers'

export const fiveGameStreaks = parse<FiveGameStreakRow>(fiveGameStreaksCsv, d => ({
  team_name: d.team_name,
  season_label: d.season_label,
  streak_start: d.streak_start,
  streak_length: toInt(d, 'streak_length'),
  opponents: d.opponents
}))

export const bigWinStreaks = parse<BigWinStreakGame>(bigWinStreaksCsv, d => ({
  streak_id: toInt(d, 'streak_id'),
  team_name: d.team_name,
  season_label: d.season_label,
  streak_length: toInt(d, 'streak_length'),
  match_date: d.match_date,
  opponent_abbr: d.opponent_abbr,
  opponent_name: d.opponent_name,
  score: d.score
}))

export const longestWinlessGaps = parse<LongestWinlessGapRow>(longestWinlessGapsCsv, d => ({
  team_name: d.team_name,
  team_abbr: d.team_abbr,
  start_date: d.start_date,
  end_date: d.end_date,
  gap_days: toInt(d, 'gap_days'),
  matches_between: toInt(d, 'matches_between')
}))

export const mostChaoticMatches = parse<MostChaoticMatchRow>(mostChaoticMatchesCsv, d => ({
  match_id: toInt(d, 'match_id'),
  kickoff_date: d.kickoff_date,
  season_label: d.season_label,
  home_team_name: d.home_team_name,
  home_team_abbr: d.home_team_abbr,
  home_score: toInt(d, 'home_score'),
  home_red_cards: toInt(d, 'home_red_cards'),
  away_team_name: d.away_team_name,
  away_team_abbr: d.away_team_abbr,
  away_score: toInt(d, 'away_score'),
  away_red_cards: toInt(d, 'away_red_cards'),
  total_goals: toInt(d, 'total_goals'),
  total_red_cards: toInt(d, 'total_red_cards'),
  goals_points: toInt(d, 'goals_points'),
  red_points: toInt(d, 'red_points'),
  chaos_score: toInt(d, 'chaos_score')
}))

export const oneNilWins = parse<OneNilWinRow>(oneNilWinsCsv, d => ({
  team_name: d.team_name,
  team_abbr: d.team_abbr,
  total_wins: toInt(d, 'total_wins'),
  home_1_0_wins: toInt(d, 'home_1_0_wins'),
  away_1_0_wins: toInt(d, 'away_1_0_wins'),
  one_nil_wins: toInt(d, 'one_nil_wins'),
  pct_one_nil: toFloat(d, 'pct_one_nil')
}))

export const htLeadNoWinStreaks = parse<HtLeadNoWinStreakRow>(htLeadNoWinStreaksCsv, d => ({
  team_name: d.team_name,
  team_abbr: d.team_abbr,
  run_length: toInt(d, 'run_length'),
  seasons: d.seasons,
  start_date: d.start_date,
  end_date: d.end_date,
  opponents: d.opponents
}))

export const comebackKings = parse<ComebackKingRow>(comebackKingsCsv, d => ({
  team_name: d.team_name,
  team_abbr: d.team_abbr,
  run_length: toInt(d, 'run_length'),
  seasons: d.seasons,
  start_date: d.start_date,
  end_date: d.end_date,
  opponents: d.opponents
}))

export const mostComebacks = parse<MostComebacksRow>(mostComebacksCsv, d => ({
  team_name: d.team_name,
  team_abbr: d.team_abbr,
  season_label: d.season_label,
  comeback_count: toInt(d, 'comeback_count')
}))

export const scoringRuns = parse<ScoringRunRow>(scoringRunsCsv, d => ({
  category: d.category,
  rank: toInt(d, 'rank'),
  team_name: d.team_name,
  team_abbr: d.team_abbr,
  run_length: toInt(d, 'run_length'),
  start_date: d.start_date,
  end_date: d.end_date,
  seasons: d.seasons,
  opponents: d.opponents
}))
