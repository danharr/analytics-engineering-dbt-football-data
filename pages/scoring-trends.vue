<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-fire" class="mr-2"></v-icon>
          Scoring Trends
        </v-card-title>
        <v-card-subtitle>
          Goals, nil-nils and draws in every season — and the most exciting season of all
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            <strong>2023-24 is the most exciting Premier League season on record.</strong>
            It produced 3.28 goals per game and just 11 goalless draws, both league bests,
            and edges 2018-19 (fewest draws, 18.7%) in the excitement ranking below. At the
            other end, 2006-07 was the leanest modern season at 2.45 goals per game. The
            dirtiest season in the era where red cards were recorded is
            <strong>2014-15</strong> (71 red cards, 0.19 per game).
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-line" class="mr-2"></v-icon>
          Goals per Game by Season
        </v-card-title>
        <v-card-subtitle>
          Average goals per match across all 34 seasons · the most exciting season is highlighted
        </v-card-subtitle>
        <v-card-text>
          <ScoringTrendsChart :data="seasonScoring" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Every Season Ranked
        </v-card-title>
        <v-card-subtitle>
          Ranked by an excitement score of goals per game (high), nil-nils (few) and draw share (low)
        </v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Rank</th>
                <th class="text-left">Season</th>
                <th class="text-right">Goals/game</th>
                <th class="text-right">Goals</th>
                <th class="text-right">Nil-nils</th>
                <th class="text-right">Draw %</th>
                <th class="text-right">Red cards</th>
                <th class="text-right">Reds/game</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in ranked"
                :key="row.season_label"
                :class="{ 'exciting-row': row.excitement_rank === 1 }"
              >
                <td><strong>{{ row.excitement_rank }}</strong></td>
                <td><strong>{{ row.season_label }}</strong></td>
                <td class="text-right">{{ fmt2(row.goals_per_game) }}</td>
                <td class="text-right">{{ fmtInt(row.total_goals) }}</td>
                <td class="text-right">{{ row.nil_nils }}</td>
                <td class="text-right">{{ fmt1(row.draw_pct) }}%</td>
                <td class="text-right">{{ row.red_cards || '—' }}</td>
                <td class="text-right">{{ row.red_cards ? fmt2(row.reds_per_game) : '—' }}</td>
              </tr>
            </tbody>
          </v-table>
          <p class="text-body-2 text-grey-darken-1 mt-3 mb-0">
            Red cards are only recorded in the league's data from 2006-07 onwards, so earlier
            seasons show a dash.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { computed } from 'vue'
import { seasonScoring, datasetLd } from '~/composables/useData'
import ScoringTrendsChart from '~/components/ScoringTrendsChart.vue'

useHead({
  title: 'Premier League Scoring Trends & Most Exciting Season',
  meta: [
    {
      name: 'description',
      content: 'Goals per game, nil-nils and draw share in every Premier League season, ranked by an excitement score — with 2023-24 the most exciting season on record.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Season Scoring Trends Dataset',
        description: 'Per-season goals per game, total goals, nil-nils, draw share and red cards, ranked by an excitement score built from goals per game, fewest nil-nils and lowest draw share.',
        path: '/scoring-trends',
        csv: 'season_scoring.csv',
        keywords: ['goals per game', 'nil-nils', 'draws', 'red cards', 'most exciting season']
      }))
    }
  ]
})

const ranked = computed(() => [...seasonScoring].sort((a, b) => a.excitement_rank - b.excitement_rank))

const fmtInt = n => d3.format(',')(n || 0)
const fmt1 = n => d3.format('.1f')(n || 0)
const fmt2 = n => d3.format('.2f')(n || 0)
</script>

<style scoped>
.exciting-row {
  background: rgba(217, 119, 6, 0.12);
}
</style>
