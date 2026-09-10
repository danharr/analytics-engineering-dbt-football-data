import goalMinutesCsv from '~/assets/data/goal_minutes.csv?raw'
import pointsLostFromWinningCsv from '~/assets/data/points_lost_from_winning.csv?raw'
import teamGoalsByPlayerCsv from '~/assets/data/team_goals_by_player.csv?raw'
import fixtureRedCardsCsv from '~/assets/data/fixture_red_cards.csv?raw'
import redCardsBySeasonCsv from '~/assets/data/red_cards_by_season.csv?raw'
import {
  parse, toInt,
  type GoalMinuteRow, type PointsLostFromWinningRow, type TeamGoalsByPlayerRow,
  type FixtureRedCardsRow, type RedCardsBySeasonRow
} from '~/composables/useChartHelpers'

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
