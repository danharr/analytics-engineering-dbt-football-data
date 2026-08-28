import { csvParse } from 'd3-dsv'
import statsCsv from '~/assets/data/stats.csv?raw'
import winsCsv from '~/assets/data/wins.csv?raw'
import qualityCsv from '~/assets/data/season_quality.csv?raw'
import attendanceCsv from '~/assets/data/attendance.csv?raw'
import allTimeCsv from '~/assets/data/all_time_table.csv?raw'
import fiveGameStreaksCsv from '~/assets/data/five_game_streaks.csv?raw'
import bigWinStreaksCsv from '~/assets/data/big_win_streaks.csv?raw'
import longestWinlessGapsCsv from '~/assets/data/longest_winless_gaps.csv?raw'
import mostChaoticMatchesCsv from '~/assets/data/most_chaotic_matches.csv?raw'
import oneNilWinsCsv from '~/assets/data/one_nil_wins.csv?raw'
import htLeadNoWinStreaksCsv from '~/assets/data/ht_lead_no_win_streaks.csv?raw'
import comebackKingsCsv from '~/assets/data/comeback_kings.csv?raw'
import mostComebacksCsv from '~/assets/data/most_comebacks.csv?raw'
import managerWinsCsv from '~/assets/data/manager_wins.csv?raw'
import managerDebutsCsv from '~/assets/data/manager_debuts.csv?raw'
import managerTimelineCsv from '~/assets/data/manager_timeline.csv?raw'
import managerMatchesCsv from '~/assets/data/manager_matches.csv?raw'
import managerClubRecordsCsv from '~/assets/data/manager_club_records.csv?raw'
import teamMatchesCsv from '~/assets/data/team_matches.csv?raw'
import seasonTableCsv from '~/assets/data/season_table.csv?raw'
import seasonPointsCsv from '~/assets/data/season_points.csv?raw'
import seasonBiggestWinsCsv from '~/assets/data/season_biggest_wins.csv?raw'
import seasonScoringCsv from '~/assets/data/season_scoring.csv?raw'
import goalMinutesCsv from '~/assets/data/goal_minutes.csv?raw'
import pointsLostFromWinningCsv from '~/assets/data/points_lost_from_winning.csv?raw'
import teamGoalsByPlayerCsv from '~/assets/data/team_goals_by_player.csv?raw'
import scoringRunsCsv from '~/assets/data/scoring_runs.csv?raw'
import fixtureRedCardsCsv from '~/assets/data/fixture_red_cards.csv?raw'
import redCardsBySeasonCsv from '~/assets/data/red_cards_by_season.csv?raw'
import subTimingCsv from '~/assets/data/sub_timing.csv?raw'
import topScorersCsv from '~/assets/data/top_scorers.csv?raw'
import subTiming202526Csv from '~/assets/data/sub_timing_2025_26.csv?raw'
import topScorers202526Csv from '~/assets/data/top_scorers_2025_26.csv?raw'
import subTiming199900Csv from '~/assets/data/sub_timing_1999_00.csv?raw'
import topScorers199900Csv from '~/assets/data/top_scorers_1999_00.csv?raw'
import partnerships199900Csv from '~/assets/data/partnerships_1999_00.csv?raw'
import partnerships202526Csv from '~/assets/data/partnerships_2025_26.csv?raw'
import yellowCardsCsv from '~/assets/data/yellow_cards.csv?raw'
import redCardsCsv from '~/assets/data/red_cards.csv?raw'

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

export const managerWins = parse<ManagerWinsRow>(managerWinsCsv, d => ({
  rank: toInt(d, 'rank'),
  manager_name: d.manager_name,
  wins: toInt(d, 'wins'),
  games: toInt(d, 'games'),
  draws: toInt(d, 'draws'),
  losses: toInt(d, 'losses'),
  win_pct: toFloat(d, 'win_pct'),
  points: toInt(d, 'points'),
  goals_for: toInt(d, 'goals_for'),
  goals_against: toInt(d, 'goals_against')
}))

export const managerDebuts = parse<ManagerDebutRow>(managerDebutsCsv, d => ({
  list: d.list,
  rank: toInt(d, 'rank'),
  manager_name: d.manager_name,
  team_name: d.team_name,
  opponent_name: d.opponent_name,
  home_away: d.home_away,
  score: d.score,
  goal_diff: toInt(d, 'goal_diff'),
  kickoff_date: d.kickoff_date
}))

export const managerMatches = parse<ManagerMatchRow>(managerMatchesCsv, d => ({
  manager_name: d.manager_name,
  team_id: d.team_id,
  team_name: d.team_name,
  kickoff_date: d.kickoff_date,
  season_label: d.season_label,
  is_home: d.is_home === 'true' ? 1 : 0,
  opponent_id: d.opponent_id,
  opponent_name: d.opponent_name,
  goals_for: toInt(d, 'goals_for'),
  goals_against: toInt(d, 'goals_against'),
  goal_diff: toInt(d, 'goal_diff'),
  result: d.result,
  match_id: d.match_id,
}))

export const managerClubRecords = parse<ManagerClubRecordRow>(managerClubRecordsCsv, d => ({
  manager_name: d.manager_name,
  team_id: d.team_id,
  team_name: d.team_name,
  games: toInt(d, 'games'),
  wins: toInt(d, 'wins'),
  draws: toInt(d, 'draws'),
  losses: toInt(d, 'losses'),
  win_pct: toFloat(d, 'win_pct'),
}))

export const managerTimeline = parse<ManagerTimelineRow>(managerTimelineCsv, d => ({
  team_name: d.team_name,
  manager_name: d.manager_name,
  from_date: d.from_date,
  until_date: d.until_date,
  present: toInt(d, 'present'),
  role: d.role
}))

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

export const goalMinutes = parse<GoalMinuteRow>(goalMinutesCsv, d => ({
  team_name: d.team_name,
  season_label: d.season_label,
  minute: toInt(d, 'minute'),
  label: d.label,
  home_goals: toInt(d, 'home_goals'),
  away_goals: toInt(d, 'away_goals')
}))

export const pointsLostFromWinning = parse<PointsLostFromWinningRow>(pointsLostFromWinningCsv, d => ({
  team_name: d.team_name,
  kickoff_date: d.kickoff_date,
  opponent: d.opponent,
  venue: d.venue,
  score: d.score,
  result: d.result,
  points_lost: toInt(d, 'points_lost'),
  led_by: toInt(d, 'led_by')
}))

export const teamGoalsByPlayer = parse<TeamGoalsByPlayerRow>(teamGoalsByPlayerCsv, d => ({
  season_label: d.season_label,
  team_name: d.team_name,
  player_name: d.player_name,
  competition: d.competition,
  goals: toInt(d, 'goals')
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

export const fixtureRedCards = parse<FixtureRedCardsRow>(fixtureRedCardsCsv, d => ({
  home_team_name: d.home_team_name,
  away_team_name: d.away_team_name,
  home_team_abbr: d.home_team_abbr,
  away_team_abbr: d.away_team_abbr,
  season_label: d.season_label,
  matches: toInt(d, 'matches'),
  red_cards: toInt(d, 'red_cards'),
  total_red_cards: toInt(d, 'total_red_cards')
}))

export const redCardsBySeason = parse<RedCardsBySeasonRow>(redCardsBySeasonCsv, d => ({
  season_label: d.season_label,
  matches: toInt(d, 'matches'),
  home_red_cards: toInt(d, 'home_red_cards'),
  away_red_cards: toInt(d, 'away_red_cards'),
  red_cards: toInt(d, 'red_cards')
}))

export const subTiming = parse<SubTimingRow>(subTimingCsv, d => ({
  team_name: d.team_name,
  team_short_name: d.team_short_name,
  minute: toInt(d, 'minute')
}))

export const topScorers = parse<TopScorerRow>(topScorersCsv, d => ({
  rank: toInt(d, 'rank'),
  player_name: d.player_name,
  team: d.team,
  goals: toInt(d, 'goals')
}))

export const subTiming2025_26 = parse<SubTimingRow>(subTiming202526Csv, d => ({
  team_name: d.team_name,
  team_short_name: d.team_short_name,
  minute: toInt(d, 'minute')
}))

export const topScorers2025_26 = parse<TopScorerRow>(topScorers202526Csv, d => ({
  rank: toInt(d, 'rank'),
  player_name: d.player_name,
  team: d.team,
  goals: toInt(d, 'goals')
}))

export const subTiming1999_00 = parse<SubTimingRow>(subTiming199900Csv, d => ({
  team_name: d.team_name,
  team_short_name: d.team_short_name,
  minute: toInt(d, 'minute')
}))

export const topScorers1999_00 = parse<TopScorerRow>(topScorers199900Csv, d => ({
  rank: toInt(d, 'rank'),
  player_name: d.player_name,
  team: d.team,
  goals: toInt(d, 'goals')
}))

export const partnerships1999_00 = parse<PartnershipRow>(partnerships199900Csv, d => ({
  rank: toInt(d, 'rank'),
  player_1_name: d.player_1_name,
  player_2_name: d.player_2_name,
  team: d.team,
  goals: toInt(d, 'goals')
}))

export const partnerships2025_26 = parse<PartnershipRow>(partnerships202526Csv, d => ({
  rank: toInt(d, 'rank'),
  player_1_name: d.player_1_name,
  player_2_name: d.player_2_name,
  team: d.team,
  goals: toInt(d, 'goals')
}))

export const yellowCards = parse<CardTimingRow>(yellowCardsCsv, d => ({
  season_label: d.season_label,
  team_name: d.team_name,
  team_short_name: d.team_short_name,
  minute: toInt(d, 'minute')
}))

export const redCards = parse<CardTimingRow>(redCardsCsv, d => ({
  season_label: d.season_label,
  team_name: d.team_name,
  team_short_name: d.team_short_name,
  minute: toInt(d, 'minute')
}))

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
    url: `${SITE_URL}${path}`,
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
