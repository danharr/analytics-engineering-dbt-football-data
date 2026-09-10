import qualityCsv from '~/assets/data/season_quality.csv?raw'
import { parse, toInt, toFloat, type QualityRow } from '~/composables/useChartHelpers'

export const quality = parse<QualityRow>(qualityCsv, d => ({
  season_label: d.season_label,
  team_count: toInt(d, 'team_count'),
  matches_played: toInt(d, 'matches_played'),
  avg_matches_per_team: toFloat(d, 'avg_matches_per_team')
}))
