import winsCsv from '~/assets/data/wins.csv?raw'
import { parse, toInt, type WinRow } from '~/composables/useChartHelpers'

export const wins = parse<WinRow>(winsCsv, d => ({
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  home_wins: toInt(d, 'home_wins'),
  away_wins: toInt(d, 'away_wins'),
  total_wins: toInt(d, 'total_wins')
}))
