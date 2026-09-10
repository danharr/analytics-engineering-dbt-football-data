import statsCsv from '~/assets/data/stats.csv?raw'
import { parse, type Stats } from '~/composables/useChartHelpers'

export const stats: Stats = (() => {
  const rows = parse<Record<string, string>>(statsCsv, d => d)
  const d = rows[0]
  return {
    total_matches: +d.total_matches,
    total_unique_teams: +d.total_unique_teams,
    total_goals: +d.total_goals,
    last_updated: d.last_updated
  }
})()
