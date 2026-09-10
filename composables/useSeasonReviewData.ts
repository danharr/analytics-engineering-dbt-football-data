import subTimingCsv from '~/assets/data/sub_timing.csv?raw'
import topScorersCsv from '~/assets/data/top_scorers.csv?raw'
import subTiming202526Csv from '~/assets/data/sub_timing_2025_26.csv?raw'
import topScorers202526Csv from '~/assets/data/top_scorers_2025_26.csv?raw'
import subTiming199900Csv from '~/assets/data/sub_timing_1999_00.csv?raw'
import topScorers199900Csv from '~/assets/data/top_scorers_1999_00.csv?raw'
import partnerships199900Csv from '~/assets/data/partnerships_1999_00.csv?raw'
import partnerships202526Csv from '~/assets/data/partnerships_2025_26.csv?raw'
import subTiming202425Csv from '~/assets/data/sub_timing_2024_25.csv?raw'
import topScorers202425Csv from '~/assets/data/top_scorers_2024_25.csv?raw'
import partnerships202425Csv from '~/assets/data/partnerships_2024_25.csv?raw'
import yellowCardsCsv from '~/assets/data/yellow_cards.csv?raw'
import redCardsCsv from '~/assets/data/red_cards.csv?raw'
import subTiming2023_24Csv from '~/assets/data/sub_timing_2023_24.csv?raw'
import topScorers2023_24Csv from '~/assets/data/top_scorers_2023_24.csv?raw'
import partnerships2023_24Csv from '~/assets/data/partnerships_2023_24.csv?raw'
import subTiming2022_23Csv from '~/assets/data/sub_timing_2022_23.csv?raw'
import topScorers2022_23Csv from '~/assets/data/top_scorers_2022_23.csv?raw'
import partnerships2022_23Csv from '~/assets/data/partnerships_2022_23.csv?raw'
import subTiming2019_20Csv from '~/assets/data/sub_timing_2019_20.csv?raw'
import topScorers2019_20Csv from '~/assets/data/top_scorers_2019_20.csv?raw'
import partnerships2019_20Csv from '~/assets/data/partnerships_2019_20.csv?raw'
import subTiming2020_21Csv from '~/assets/data/sub_timing_2020_21.csv?raw'
import topScorers2020_21Csv from '~/assets/data/top_scorers_2020_21.csv?raw'
import partnerships2020_21Csv from '~/assets/data/partnerships_2020_21.csv?raw'
import subTiming2021_22Csv from '~/assets/data/sub_timing_2021_22.csv?raw'
import topScorers2021_22Csv from '~/assets/data/top_scorers_2021_22.csv?raw'
import partnerships2021_22Csv from '~/assets/data/partnerships_2021_22.csv?raw'
import {
  parse, toInt,
  type SubTimingRow, type CardTimingRow, type TopScorerRow, type PartnershipRow
} from '~/composables/useChartHelpers'

const parseSubTiming = (csv: string) => parse<SubTimingRow>(csv, d => ({
  team_name: d.team_name,
  team_short_name: d.team_short_name,
  minute: toInt(d, 'minute')
}))

const parseTopScorers = (csv: string) => parse<TopScorerRow>(csv, d => ({
  rank: toInt(d, 'rank'),
  player_name: d.player_name,
  team: d.team,
  goals: toInt(d, 'goals')
}))

const parsePartnerships = (csv: string) => parse<PartnershipRow>(csv, d => ({
  rank: toInt(d, 'rank'),
  player_1_name: d.player_1_name,
  player_2_name: d.player_2_name,
  team: d.team,
  goals: toInt(d, 'goals')
}))

export const subTiming = parseSubTiming(subTimingCsv)
export const topScorers = parseTopScorers(topScorersCsv)

export const subTiming2025_26 = parseSubTiming(subTiming202526Csv)
export const topScorers2025_26 = parseTopScorers(topScorers202526Csv)

export const subTiming1999_00 = parseSubTiming(subTiming199900Csv)
export const topScorers1999_00 = parseTopScorers(topScorers199900Csv)
export const partnerships1999_00 = parsePartnerships(partnerships199900Csv)

export const partnerships2025_26 = parsePartnerships(partnerships202526Csv)

export const subTiming2024_25 = parseSubTiming(subTiming202425Csv)
export const topScorers2024_25 = parseTopScorers(topScorers202425Csv)
export const partnerships2024_25 = parsePartnerships(partnerships202425Csv)

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

export const subTiming2023_24 = parseSubTiming(subTiming2023_24Csv)
export const topScorers2023_24 = parseTopScorers(topScorers2023_24Csv)
export const partnerships2023_24 = parsePartnerships(partnerships2023_24Csv)

export const subTiming2022_23 = parseSubTiming(subTiming2022_23Csv)
export const topScorers2022_23 = parseTopScorers(topScorers2022_23Csv)
export const partnerships2022_23 = parsePartnerships(partnerships2022_23Csv)

export const subTiming2019_20 = parseSubTiming(subTiming2019_20Csv)
export const topScorers2019_20 = parseTopScorers(topScorers2019_20Csv)
export const partnerships2019_20 = parsePartnerships(partnerships2019_20Csv)

export const subTiming2020_21 = parseSubTiming(subTiming2020_21Csv)
export const topScorers2020_21 = parseTopScorers(topScorers2020_21Csv)
export const partnerships2020_21 = parsePartnerships(partnerships2020_21Csv)

export const subTiming2021_22 = parseSubTiming(subTiming2021_22Csv)
export const topScorers2021_22 = parseTopScorers(topScorers2021_22Csv)
export const partnerships2021_22 = parsePartnerships(partnerships2021_22Csv)
