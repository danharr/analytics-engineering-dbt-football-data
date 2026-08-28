import {
  allTime,
  wins,
  quality,
  attendance,
  seasonScoring,
  fiveGameStreaks,
  bigWinStreaks,
  longestWinlessGaps,
  mostChaoticMatches,
  oneNilWins,
  htLeadNoWinStreaks,
  comebackKings,
  mostComebacks,
  managerWins,
  managerDebuts,
  managerTimeline,
  goalMinutes,
  pointsLostFromWinning,
  scoringRuns,
  fixtureRedCards,
  redCardsBySeason,
  subTiming,
  subTiming1999_00,
  subTiming2025_26
} from '~/composables/useData'
import { SEASON_TEAMS } from '~/utils/seasonTeams'

interface BarRow {
  label: string
  value: number
  display: string
}

export type ThumbnailPreview =
  | { kind: 'bars'; rows: BarRow[] }
  | { kind: 'groupedBars'; rows: { label: string; a: number; b: number }[] }
  | { kind: 'lines'; series: { name: string; points: (number | null)[] }[]; xLabels: string[] }
  | { kind: 'squares'; rows: { label: string; cells: string[] }[] }
  | { kind: 'gantt'; rows: { label: string; bars: { start: number; end: number }[] }[] }
  | { kind: 'pyramid'; rows: { label: string; left: number; right: number }[] }
  | { kind: 'dots'; rows: { label: string; minutes: number[] }[] }

export interface Thumbnail {
  label: string
  path: string
  caption: string
  preview: ThumbnailPreview
}

const fmtInt = (n: number) => n.toLocaleString('en-US')

function toBars<T>(
  rows: T[],
  label: (d: T) => string,
  value: (d: T) => number,
  display: (d: T) => string,
  max = 8
): { kind: 'bars'; rows: BarRow[] } {
  return {
    kind: 'bars',
    rows: [...rows]
      .sort((a, b) => value(b) - value(a))
      .slice(0, max)
      .map(d => ({ label: label(d), value: value(d), display: display(d) }))
  }
}

const attSeasons = [...new Set(attendance.map(r => r.season_label))].sort(
  (a, b) => Number(a.slice(0, 4)) - Number(b.slice(0, 4))
)

const teamMax = new Map<string, { name: string; max: number }>()
for (const r of attendance) {
  const cur = teamMax.get(r.team_abbr)
  if (!cur || r.avg_home_attendance > cur.max) {
    teamMax.set(r.team_abbr, { name: r.team_name, max: r.avg_home_attendance })
  }
}
const topAbbrs = [...teamMax.entries()]
  .sort((a, b) => b[1].max - a[1].max)
  .slice(0, 6)
  .map(([abbr]) => abbr)

const linesPreview: ThumbnailPreview = {
  kind: 'lines',
  series: topAbbrs.map(abbr => ({
    name: teamMax.get(abbr)!.name,
    points: attSeasons.map(s => {
      const r = attendance.find(x => x.team_abbr === abbr && x.season_label === s)
      return r ? r.avg_home_attendance : null
    })
  })),
  xLabels: attSeasons
}

const streakMap = new Map<number, { team: string; cells: string[] }>()
for (const g of bigWinStreaks) {
  if (!streakMap.has(g.streak_id)) streakMap.set(g.streak_id, { team: g.team_name, cells: [] })
  streakMap.get(g.streak_id)!.cells.push(g.score)
}

const squaresPreview: ThumbnailPreview = {
  kind: 'squares',
  rows: [...streakMap.values()]
    .sort((a, b) => b.cells.length - a.cells.length)
    .slice(0, 4)
    .map(s => ({ label: s.team, cells: s.cells }))
}

const MT_MIN = 1992
const MT_MAX = 2026
const mtYear = (s: string | null | undefined, fallback: number) => {
  if (!s) return fallback
  const y = Number(s.slice(0, 4))
  return Number.isFinite(y) ? y : fallback
}
const mtT = (y: number) => Math.min(1, Math.max(0, (y - MT_MIN) / (MT_MAX - MT_MIN)))

const mtTeams = [...new Set(managerTimeline.map(r => r.team_name))].sort()
const mtStep = Math.max(1, Math.floor(mtTeams.length / 6))
const mtChosen = mtTeams.filter((_, i) => i % mtStep === 0).slice(0, 6)

const ganttPreview: ThumbnailPreview = {
  kind: 'gantt',
  rows: mtChosen.map(team => ({
    label: team,
    bars: managerTimeline
      .filter(r => r.team_name === team)
      .map(r => {
        const s = mtT(mtYear(r.from_date, MT_MIN))
        const e = r.present ? 1 : mtT(mtYear(r.until_date, MT_MAX))
        return { start: Math.min(s, e), end: Math.max(s, e) }
      })
  }))
}

const goalBinMap = new Map<number, { label: string; left: number; right: number }>()
for (const r of goalMinutes) {
  if (!goalBinMap.has(r.minute)) {
    goalBinMap.set(r.minute, { label: r.label, left: 0, right: 0 })
  }
  const b = goalBinMap.get(r.minute)!
  b.left += r.home_goals
  b.right += r.away_goals
}

const pyramidPreview: ThumbnailPreview = {
  kind: 'pyramid',
  rows: [...goalBinMap.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([, v]) => v)
}

const pointsLostTotals = SEASON_TEAMS
  .map(t => ({
    name: t.name,
    pointsLost: pointsLostFromWinning
      .filter(r => r.team_name === t.name)
      .reduce((acc, r) => acc + r.points_lost, 0)
  }))
  .filter(t => t.pointsLost > 0)

const fixtureRedCardTotals = (() => {
  const map = new Map<string, { label: string; value: number }>()
  for (const r of fixtureRedCards) {
    const key = `${r.home_team_name}|${r.away_team_name}`
    if (!map.has(key)) {
      map.set(key, {
        label: `${r.home_team_abbr} vs ${r.away_team_abbr}`,
        value: r.total_red_cards
      })
    }
  }
  return [...map.values()]
})()

const subTimingDots: { kind: 'dots'; rows: { label: string; minutes: number[] }[] } = {
  kind: 'dots',
  rows: [...new Set(subTiming.map(r => r.team_name))]
    .map(name => {
      const rows = subTiming.filter(r => r.team_name === name)
      return {
        label: rows[0].team_short_name,
        minutes: rows.map(r => r.minute).sort((a, b) => a - b)
      }
    })
}

const subTiming202526Dots: { kind: 'dots'; rows: { label: string; minutes: number[] }[] } = {
  kind: 'dots',
  rows: [...new Set(subTiming2025_26.map(r => r.team_name))]
    .map(name => {
      const rows = subTiming2025_26.filter(r => r.team_name === name)
      return {
        label: rows[0].team_short_name,
        minutes: rows.map(r => r.minute).sort((a, b) => a - b)
      }
    })
}

const subTiming199900Dots: { kind: 'dots'; rows: { label: string; minutes: number[] }[] } = {
  kind: 'dots',
  rows: [...new Set(subTiming1999_00.map(r => r.team_name))]
    .map(name => {
      const rows = subTiming1999_00.filter(r => r.team_name === name)
      return {
        label: rows[0].team_short_name,
        minutes: rows.map(r => r.minute).sort((a, b) => a - b)
      }
    })
}

export const thumbnails: Thumbnail[] = [
  {
    label: 'All-Time Table',
    path: '/all-time-table',
    caption: 'Every club ranked by points since 1992-93.',
    preview: toBars(allTime, d => d.team_name, d => d.points, d => fmtInt(d.points))
  },
  {
    label: 'Most Wins',
    path: '/most-wins',
    caption: 'Who has won the most games across 35 seasons?',
    preview: toBars(wins, d => d.team_name, d => d.total_wins, d => fmtInt(d.total_wins))
  },
  {
    label: 'Data Quality',
    path: '/data-quality',
    caption: 'How complete is the match data, season by season?',
    preview: {
      kind: 'groupedBars',
      rows: quality.map(q => ({
        label: q.season_label,
        a: q.team_count,
        b: q.avg_matches_per_team
      }))
    }
  },
  {
    label: 'Attendances',
    path: '/attendances',
    caption: 'Average home crowds, season by season.',
    preview: linesPreview
  },
  {
    label: 'Scoring Trends',
    path: '/scoring-trends',
    caption: 'Goals, nil-nils and draws — the most exciting season.',
    preview: toBars(
      seasonScoring,
      d => d.season_label,
      d => d.goals_per_game,
      d => d.goals_per_game.toFixed(2)
    )
  },
  {
    label: 'Goals by Minute',
    path: '/goal-minutes',
    caption: 'When Arsenal and West Ham score, minute by minute.',
    preview: pyramidPreview
  },
  {
    label: 'Points Lost From Winning Positions',
    path: '/points-lost-from-winning-position',
    caption: 'The points every club threw away after leading in 2025-26.',
    preview: toBars(
      pointsLostTotals,
      d => d.name,
      d => d.pointsLost,
      d => `${d.pointsLost}`
    )
  },
  {
    label: 'Scoring Runs',
    path: '/scoring-runs',
    caption: 'The longest scoreless droughts and scoring streaks.',
    preview: toBars(
      scoringRuns.filter(r => r.category === 'scoring'),
      d => d.team_name,
      d => d.run_length,
      d => `${d.run_length}`
    )
  },
  {
    label: 'Five-Game Streaks',
    path: '/five-game-streaks',
    caption: 'The last time each team won 5+ games in a row.',
    preview: toBars(fiveGameStreaks, d => d.team_name, d => d.streak_length, d => `${d.streak_length}`)
  },
  {
    label: 'Big Win Streaks',
    path: '/big-win-streaks',
    caption: 'The longest in-season winning runs (11+ wins).',
    preview: squaresPreview
  },
  {
    label: 'Longest Gap Between Wins',
    path: '/longest-winless-gaps',
    caption: 'The longest wait between wins, in days.',
    preview: toBars(longestWinlessGaps, d => d.team_name, d => d.gap_days, d => fmtInt(d.gap_days))
  },
  {
    label: 'Most Chaotic Matches',
    path: '/most-chaotic-matches',
    caption: 'Goals plus red cards: every match\u2019s chaos score.',
    preview: toBars(
      mostChaoticMatches,
      d => `${d.home_team_abbr} ${d.home_score}\u2013${d.away_score} ${d.away_team_abbr}`,
      d => d.chaos_score,
      d => fmtInt(d.chaos_score)
    )
  },
  {
    label: 'Fixture Red Cards',
    path: '/fixture-red-cards',
    caption: 'The rivalries with the most red cards since 1992.',
    preview: toBars(
      fixtureRedCardTotals,
      d => d.label,
      d => d.value,
      d => fmtInt(d.value)
    )
  },
  {
    label: 'Red Cards by Season',
    path: '/red-cards-by-season',
    caption: 'Total red cards in every season, from 2006-07 on.',
    preview: toBars(
      redCardsBySeason.filter(r => r.red_cards > 0),
      d => d.season_label,
      d => d.red_cards,
      d => fmtInt(d.red_cards)
    )
  },
  {
    label: 'One-Nil Wins',
    path: '/one-nil-wins',
    caption: 'Whose wins most often finish 1-0?',
    preview: toBars(oneNilWins, d => d.team_name, d => d.pct_one_nil, d => `${d.pct_one_nil}%`)
  },
  {
    label: 'Longest No-Win Streaks After HT Lead',
    path: '/ht-lead-no-win-streaks',
    caption: 'Led at half-time, but still failed to win.',
    preview: toBars(htLeadNoWinStreaks, d => d.team_name, d => d.run_length, d => `${d.run_length}`)
  },
  {
    label: 'Comeback Kings',
    path: '/comeback-kings',
    caption: 'The longest runs of half-time comebacks.',
    preview: toBars(comebackKings, d => d.team_name, d => d.run_length, d => `${d.run_length}`)
  },
  {
    label: 'Most Comebacks in a Season',
    path: '/most-comebacks',
    caption: 'The most half-time comebacks in one season.',
    preview: toBars(
      mostComebacks,
      d => `${d.team_name} ${d.season_label}`,
      d => d.comeback_count,
      d => `${d.comeback_count}`
    )
  },
  {
    label: 'Most Manager Wins',
    path: '/manager-wins',
    caption: 'Top managers by Premier League wins.',
    preview: toBars(managerWins, d => d.manager_name, d => d.wins, d => fmtInt(d.wins))
  },
  {
    label: 'Manager Debuts',
    path: '/manager-debuts',
    caption: 'The best and worst first matches in charge.',
    preview: toBars(
      managerDebuts.filter(d => d.list === 'win'),
      d => d.manager_name,
      d => d.goal_diff,
      d => `+${d.goal_diff}`
    )
  },
  {
    label: 'Manager Timeline',
    path: '/manager-timeline',
    caption: 'Every managerial spell since 1992.',
    preview: ganttPreview
  },
  {
    label: '1992-93',
    path: '/season-reviews/1992-93',
    caption: 'Substitution and card timing, plus the season\u2019s top scorers.',
    preview: subTimingDots
  },
  {
    label: '1999-00',
    path: '/season-reviews/1999-00',
    caption: 'Substitution and card timing, plus the season\u2019s top scorers.',
    preview: subTiming199900Dots
  },
  {
    label: '2025-26',
    path: '/season-reviews/2025-26',
    caption: 'Substitution and card timing, plus the season\u2019s top scorers.',
    preview: subTiming202526Dots
  }
]
