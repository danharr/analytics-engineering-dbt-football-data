import statsCsv from '~/assets/data/stats.csv?raw'
import latestMatchCsv from '~/assets/data/latest_match.csv?raw'
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

export interface LatestMatch {
  home_team_name: string
  away_team_name: string
  home_score: number
  away_score: number
  kickoff_date: string
}

export const latestMatch: LatestMatch | null = (() => {
  const rows = parse<Record<string, string>>(latestMatchCsv, d => d)
  const d = rows[0]
  if (!d) return null
  return {
    home_team_name: d.home_team_name,
    away_team_name: d.away_team_name,
    home_score: +d.home_score,
    away_score: +d.away_score,
    kickoff_date: d.kickoff_date
  }
})()
