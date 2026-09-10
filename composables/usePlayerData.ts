import playerGoalsCsv from '~/assets/data/player_goals.csv?raw'
import goldenBootsCsv from '~/assets/data/golden_boots.csv?raw'
import firstGoalMinutesCsv from '~/assets/data/first_goal_minutes.csv?raw'
import playerGoalSummaryCsv from '~/assets/data/player_goal_summary.csv?raw'
import playerOpponentGoalsCsv from '~/assets/data/player_opponent_goals.csv?raw'
import {
  parse, toInt,
  type PlayerGoalRow, type GoldenBootRow, type FirstGoalMinuteRow,
  type PlayerGoalSummaryRow, type PlayerOpponentGoalsRow
} from '~/composables/useChartHelpers'

export const playerGoals = parse<PlayerGoalRow>(playerGoalsCsv, d => ({
  player_name: d.player_name,
  season_label: d.season_label,
  match_week: toInt(d, 'match_week'),
  cumulative_goals: toInt(d, 'cumulative_goals')
}))

export const goldenBoots = parse<GoldenBootRow>(goldenBootsCsv, d => ({
  player_name: d.player_name,
  season_label: d.season_label,
  team: d.team,
  match_week: toInt(d, 'match_week'),
  cumulative_goals: toInt(d, 'cumulative_goals')
}))

export const firstGoalMinutes = parse<FirstGoalMinuteRow>(firstGoalMinutesCsv, d => ({
  season_label: d.season_label,
  minute: toInt(d, 'minute'),
  label: d.label,
  matches: toInt(d, 'matches')
}))

export const playerGoalSummary = parse<PlayerGoalSummaryRow>(playerGoalSummaryCsv, d => ({
  player_name: d.player_name,
  total_goals: toInt(d, 'total_goals'),
  penalties: toInt(d, 'penalties'),
  first_half: toInt(d, 'first_half'),
  second_half: toInt(d, 'second_half')
}))

export const playerOpponentGoals = parse<PlayerOpponentGoalsRow>(playerOpponentGoalsCsv, d => ({
  player_name: d.player_name,
  opponent_name: d.opponent_name,
  goals: toInt(d, 'goals')
}))
