import teamMatchesCsv from '~/assets/data/team_matches.csv?raw'
import { parse, toInt, type TeamMatchRow } from '~/composables/useChartHelpers'

export const teamMatches = parse<TeamMatchRow>(teamMatchesCsv, d => ({
  team_abbr: d.team_abbr,
  kickoff_date: d.kickoff_date,
  season_label: d.season_label,
  is_home: toInt(d, 'is_home'),
  opponent_abbr: d.opponent_abbr,
  opponent_name: d.opponent_name,
  goals_for: toInt(d, 'goals_for'),
  goals_against: toInt(d, 'goals_against'),
  goal_diff: toInt(d, 'goal_diff'),
  red_cards: toInt(d, 'red_cards'),
  attendance: d.attendance === '' ? null : toInt(d, 'attendance')
}))
