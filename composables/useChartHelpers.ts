import { csvParse } from 'd3-dsv'

export interface Stats {
  total_matches: number
  total_unique_teams: number
  total_goals: number
  last_updated: string
}

export interface WinRow {
  team_abbr: string
  team_name: string
  home_wins: number
  away_wins: number
  total_wins: number
}

export interface QualityRow {
  season_label: string
  team_count: number
  matches_played: number
  avg_matches_per_team: number
}

export interface AttendanceRow {
  season_label: string
  team_abbr: string
  team_name: string
  avg_home_attendance: number
}

export interface AllTimeRow {
  team_abbr: string
  team_name: string
  matches_played: number
  wins: number
  draws: number
  losses: number
  points: number
}

export interface FiveGameStreakRow {
  team_name: string
  season_label: string
  streak_start: string
  streak_length: number
  opponents: string
}

export interface BigWinStreakGame {
  streak_id: number
  team_name: string
  season_label: string
  streak_length: number
  match_date: string
  opponent_abbr: string
  opponent_name: string
  score: string
}

export interface LongestWinlessGapRow {
  team_name: string
  team_abbr: string
  start_date: string
  end_date: string
  gap_days: number
  matches_between: number
}

export interface MostChaoticMatchRow {
  match_id: number
  kickoff_date: string
  season_label: string
  home_team_name: string
  home_team_abbr: string
  home_score: number
  home_red_cards: number
  away_team_name: string
  away_team_abbr: string
  away_score: number
  away_red_cards: number
  total_goals: number
  total_red_cards: number
  goals_points: number
  red_points: number
  chaos_score: number
}

export interface OneNilWinRow {
  team_name: string
  team_abbr: string
  total_wins: number
  home_1_0_wins: number
  away_1_0_wins: number
  one_nil_wins: number
  pct_one_nil: number
}

export interface HtLeadNoWinStreakRow {
  team_name: string
  team_abbr: string
  run_length: number
  seasons: string
  start_date: string
  end_date: string
  opponents: string
}

export interface ComebackKingRow {
  team_name: string
  team_abbr: string
  run_length: number
  seasons: string
  start_date: string
  end_date: string
  opponents: string
}

export interface MostComebacksRow {
  team_name: string
  team_abbr: string
  season_label: string
  comeback_count: number
}

export interface ManagerWinsRow {
  rank: number
  manager_name: string
  wins: number
  games: number
  draws: number
  losses: number
  win_pct: number
  points: number
  goals_for: number
  goals_against: number
}

export interface ManagerDebutRow {
  list: string
  rank: number
  manager_name: string
  team_name: string
  opponent_name: string
  home_away: string
  score: string
  goal_diff: number
  kickoff_date: string
}

export interface ManagerMatchRow {
  manager_name: string
  team_id: string
  team_name: string
  kickoff_date: string
  season_label: string
  is_home: number
  opponent_id: string
  opponent_name: string
  goals_for: number
  goals_against: number
  goal_diff: number
  result: string
  match_id: string
}

export interface ManagerClubRecordRow {
  manager_name: string
  team_id: string
  team_name: string
  games: number
  wins: number
  draws: number
  losses: number
  win_pct: number
}

export interface ManagerTimelineRow {
    team_name: string
    manager_name: string
    from_date: string
    until_date: string
    present: number
    role: string
}


export interface TeamMatchRow {
  team_abbr: string
  kickoff_date: string
  season_label: string
  is_home: number
  opponent_abbr: string
  opponent_name: string
  goals_for: number
  goals_against: number
  goal_diff: number
  red_cards: number
  attendance: number | null
}

export interface SeasonTableRow {
  season_label: string
  position: number
  team_abbr: string
  team_name: string
  played: number
  won: number
  drawn: number
  lost: number
  goals_for: number
  goals_against: number
  goal_diff: number
  points: number
}

export interface SeasonPointRow {
  season_label: string
  team_abbr: string
  team_name: string
  matchweek: number
  points: number
}

export interface SeasonBiggestWinRow {
  season_label: string
  rank: number
  team_name: string
  team_abbr: string
  opponent_name: string
  opponent_abbr: string
  home_away: string
  goals_for: number
  goals_against: number
  score: string
  goal_diff: number
  kickoff_date: string
}

export interface SeasonScoringRow {
  season_label: string
  matches: number
  total_goals: number
  goals_per_game: number
  nil_nils: number
  draws: number
  draw_pct: number
  red_cards: number
  reds_per_game: number
  goals_rank: number
  nil_nils_rank: number
  draw_rank: number
  excitement_score: number
  excitement_rank: number
}

export interface GoalMinuteRow {
  team_name: string
  season_label: string
  minute: number
  label: string
  home_goals: number
  away_goals: number
}

export interface PointsLostFromWinningRow {
  team_name: string
  kickoff_date: string
  opponent: string
  venue: string
  score: string
  result: string
  points_lost: number
  led_by: number
}

export interface TeamGoalsByPlayerRow {
  season_label: string
  team_name: string
  player_name: string
  competition: string
  goals: number
}

export interface ScoringRunRow {
  category: string
  rank: number
  team_name: string
  team_abbr: string
  run_length: number
  start_date: string
  end_date: string
  seasons: string
  opponents: string
}

export interface FixtureRedCardsRow {
  home_team_name: string
  away_team_name: string
  home_team_abbr: string
  away_team_abbr: string
  season_label: string
  matches: number
  red_cards: number
  total_red_cards: number
}

export interface RedCardsBySeasonRow {
  season_label: string
  matches: number
  home_red_cards: number
  away_red_cards: number
  red_cards: number
}

export interface SubTimingRow {
  team_name: string
  team_short_name: string
  minute: number
}

export interface CardTimingRow {
  season_label: string
  team_name: string
  team_short_name: string
  minute: number
}

export interface TopScorerRow {
  rank: number
  player_name: string
  team: string
  goals: number
}

export interface PartnershipRow {
  rank: number
  player_1_name: string
  player_2_name: string
  team: string
  goals: number
}

export interface PlayerGoalRow {
  player_name: string
  season_label: string
  match_week: number
  cumulative_goals: number
}

export interface GoldenBootRow {
  player_name: string
  season_label: string
  team: string
  match_week: number
  cumulative_goals: number
}

export interface FirstGoalMinuteRow {
  season_label: string
  minute: number
  label: string
  matches: number
}

export function formatGap(start: string, end: string): { label: string; years: number; days: number } {
  const s = new Date(start + 'T00:00:00Z')
  const e = new Date(end + 'T00:00:00Z')
  let years = e.getUTCFullYear() - s.getUTCFullYear()
  const anniv = new Date(s)
  anniv.setUTCFullYear(s.getUTCFullYear() + years)
  if (anniv > e) {
    years -= 1
    anniv.setUTCFullYear(anniv.getUTCFullYear() - 1)
  }
  const days = Math.round((e.getTime() - anniv.getTime()) / 86400000)
  let label: string
  if (years > 0 && days > 0) {
    label = `${years} ${years === 1 ? 'year' : 'years'} and ${days} ${days === 1 ? 'day' : 'days'}`
  } else if (years > 0) {
    label = `${years} ${years === 1 ? 'year' : 'years'}`
  } else {
    label = `${days} ${days === 1 ? 'day' : 'days'}`
  }
  return { label, years, days }
}

export function toInt(d: Record<string, string>, key: string): number {
  return +(d[key] ?? 0)
}

export function toFloat(d: Record<string, string>, key: string): number {
  return +(d[key] ?? 0)
}

export function parse<T>(csv: string, map: (d: Record<string, string>) => T): T[] {
  return csvParse(csv, map as never) as unknown as T[]
}

export function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? ''
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
}

export function mostAndFewest(
  rows: { team_name: string }[],
  allTeams: string[]
): { most: { names: string[]; n: number }; fewest: { names: string[]; n: number } } {
  const counts = new Map<string, number>(allTeams.map(t => [t, 0]))
  for (const r of rows) {
    counts.set(r.team_name, (counts.get(r.team_name) || 0) + 1)
  }
  const entries = [...counts.entries()]
  const max = Math.max(...entries.map(([, n]) => n))
  const min = Math.min(...entries.map(([, n]) => n))
  const pick = (n: number) => entries.filter(([, v]) => v === n).map(([t]) => t).sort()
  return { most: { names: pick(max), n: max }, fewest: { names: pick(min), n: min } }
}

export function fewestSummary(fewest: { names: string[]; n: number }): string {
  if (fewest.n === 0) {
    if (fewest.names.length === 1) return `${fewest.names[0]} had none at all`
    if (fewest.names.length === 2) return `${fewest.names[0]} and ${fewest.names[1]} had none at all`
    return `${fewest.names.length} clubs had none at all`
  }
  return `${joinNames(fewest.names)} had the fewest (${fewest.n})`
}

export const SITE_URL = 'https://footballstartedin1992.com'

const PL_TEMPORAL_COVERAGE = '1992-08-15/2026-05-25'

export interface DatasetLdOptions {
  name: string
  description: string
  path: string
  csv?: string
  keywords?: string[]
}

export function datasetLd({ name, description, path, csv, keywords }: DatasetLdOptions): Record<string, unknown> {
  const dataset: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name,
    description,
    url: `${SITE_URL}${path.endsWith('/') ? path : `${path}/`}`,
    creator: {
      '@type': 'Organization',
      name: 'Football Started in 1992'
    },
    isAccessibleForFree: true,
    keywords: ['Premier League', 'football statistics', 'match results', ...(keywords ?? [])],
    temporalCoverage: PL_TEMPORAL_COVERAGE
  }
  if (csv) {
    dataset.distribution = {
      '@type': 'DataDownload',
      contentUrl: `${SITE_URL}/data/${csv}`,
      encodingFormat: 'text/csv'
    }
  }
  return dataset
}
