import allTimeCsv from '~/assets/data/all_time_table.csv?raw'
import { parse, toInt, type AllTimeRow } from '~/composables/useChartHelpers'

export const allTime = parse<AllTimeRow>(allTimeCsv, d => ({
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  matches_played: toInt(d, 'matches_played'),
  wins: toInt(d, 'wins'),
  draws: toInt(d, 'draws'),
  losses: toInt(d, 'losses'),
  points: toInt(d, 'points')
}))
