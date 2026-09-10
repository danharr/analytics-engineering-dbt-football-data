import managerWinsCsv from '~/assets/data/manager_wins.csv?raw'
import managerDebutsCsv from '~/assets/data/manager_debuts.csv?raw'
import managerTimelineCsv from '~/assets/data/manager_timeline.csv?raw'
import managerMatchesCsv from '~/assets/data/manager_matches.csv?raw'
import managerClubRecordsCsv from '~/assets/data/manager_club_records.csv?raw'
import {
  parse, toInt, toFloat,
  type ManagerWinsRow, type ManagerDebutRow, type ManagerTimelineRow,
  type ManagerMatchRow, type ManagerClubRecordRow
} from '~/composables/useChartHelpers'

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
