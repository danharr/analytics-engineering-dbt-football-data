import { csvParse } from 'd3-dsv'
import statsCsv from '~/assets/data/stats.csv?raw'
import winsCsv from '~/assets/data/wins.csv?raw'
import qualityCsv from '~/assets/data/season_quality.csv?raw'
import attendanceCsv from '~/assets/data/attendance.csv?raw'
import allTimeCsv from '~/assets/data/all_time_table.csv?raw'
import fiveGameStreaksCsv from '~/assets/data/five_game_streaks.csv?raw'
import bigWinStreaksCsv from '~/assets/data/big_win_streaks.csv?raw'
import longestWinlessGapsCsv from '~/assets/data/longest_winless_gaps.csv?raw'
import winsSql from '~/assets/data/wins.sql?raw'
import qualitySql from '~/assets/data/season_quality.sql?raw'
import attendanceSql from '~/assets/data/attendance.sql?raw'
import allTimeSql from '~/assets/data/all_time_table.sql?raw'
import fiveGameStreaksSql from '~/assets/data/five_game_streaks.sql?raw'
import bigWinStreaksSql from '~/assets/data/big_win_streaks.sql?raw'
import longestWinlessGapsSql from '~/assets/data/longest_winless_gaps.sql?raw'

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

function toInt(d: Record<string, string>, key: string): number {
  return +(d[key] ?? 0)
}

function toFloat(d: Record<string, string>, key: string): number {
  return +(d[key] ?? 0)
}

function parse<T>(csv: string, map: (d: Record<string, string>) => T): T[] {
  return csvParse(csv, map as never) as unknown as T[]
}

export const stats: Stats = (() => {
  const rows = csvParse(statsCsv)
  const d = rows[0] as unknown as Record<string, string>
  return {
    total_matches: +d.total_matches,
    total_unique_teams: +d.total_unique_teams,
    total_goals: +d.total_goals,
    last_updated: d.last_updated
  }
})()

export const wins = parse<WinRow>(winsCsv, d => ({
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  home_wins: toInt(d, 'home_wins'),
  away_wins: toInt(d, 'away_wins'),
  total_wins: toInt(d, 'total_wins')
}))

export const quality = parse<QualityRow>(qualityCsv, d => ({
  season_label: d.season_label,
  team_count: toInt(d, 'team_count'),
  matches_played: toInt(d, 'matches_played'),
  avg_matches_per_team: toFloat(d, 'avg_matches_per_team')
}))

export const attendance = parse<AttendanceRow>(attendanceCsv, d => ({
  season_label: d.season_label,
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  avg_home_attendance: toFloat(d, 'avg_home_attendance')
}))

export const allTime = parse<AllTimeRow>(allTimeCsv, d => ({
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  matches_played: toInt(d, 'matches_played'),
  wins: toInt(d, 'wins'),
  draws: toInt(d, 'draws'),
  losses: toInt(d, 'losses'),
  points: toInt(d, 'points')
}))

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

export const sqlQueries = {
  wins: winsSql,
  quality: qualitySql,
  attendance: attendanceSql,
  allTimeTable: allTimeSql,
  fiveGameStreaks: fiveGameStreaksSql,
  bigWinStreaks: bigWinStreaksSql,
  longestWinlessGaps: longestWinlessGapsSql
}
