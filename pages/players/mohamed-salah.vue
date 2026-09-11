<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Mohamed Salah
        </v-card-title>
        <v-card-subtitle>
          Premier League goals: all-time totals, half-by-half split and season-by-season race
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Mohamed Salah has topped the Premier League scoring charts for an individual
            season and, across every season in the data, has scored 159 Premier League
            goals, 34 of them penalties. Each line tracks his running goal total as the
            season unfolds — every goal he has scored by each matchweek, from 19 in 2019-20,
            22 in 2020-21 and the 23 that shared the 2021-22 Golden Boot with Son Heung-min,
            through 19 in 2022-23, 18 in 2023-24, the 29 that won him the 2024-25 Golden Boot
            and seven in 2025-26 (the 22 he scored in 2018-19 are included in the headline
            totals but not charted). Salah left the Premier League after 2025-26, so there is
            no 2026-27 line. Generated from the per-match event feed rather than aggregate
            results.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="6" md="3">
              <StatCircle :value="summary.total_goals" label="Total Goals" />
            </v-col>
            <v-col cols="6" md="3">
              <StatCircle :value="summary.penalties" label="Penalties Scored" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-donut" class="mr-2"></v-icon>
          Goals by Half
        </v-card-title>
        <v-card-subtitle>
          First half vs second half · all seasons
        </v-card-subtitle>
        <v-card-text>
          <PlayerGoalDonut :summary="summary" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          Top Opposition Clubs
        </v-card-title>
        <v-card-subtitle>
          The five clubs he has scored most against · all seasons
        </v-card-subtitle>
        <v-card-text>
          <PlayerOpponentTable :data="opponents" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-line" class="mr-2"></v-icon>
          Goals by Matchweek
        </v-card-title>
        <v-card-subtitle>
          Cumulative league goals · one line per season
        </v-card-subtitle>
        <v-card-text>
          <PlayerGoalRaceChart :data="salahRows" />
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { playerGoals, playerGoalSummary, playerOpponentGoals } from '~/composables/usePlayerData'
import { datasetLd } from '~/composables/useChartHelpers'
import PlayerGoalRaceChart from '~/components/PlayerGoalRaceChart.vue'
import PlayerGoalDonut from '~/components/PlayerGoalDonut.vue'
import PlayerOpponentTable from '~/components/PlayerOpponentTable.vue'
import StatCircle from '~/components/StatCircle.vue'

const salahRows = computed(() => playerGoals.filter(r => r.player_name === 'Mohamed Salah'))

const summary = computed(() => playerGoalSummary.find(r => r.player_name === 'Mohamed Salah')
  ?? { total_goals: 0, penalties: 0, first_half: 0, second_half: 0 })

const opponents = computed(() => playerOpponentGoals.filter(r => r.player_name === 'Mohamed Salah'))

useHead({
  title: 'Mohamed Salah Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Mohamed Salah\'s cumulative Premier League goals by matchweek across 2019-20 through 2025-26.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Mohamed Salah Cumulative Premier League Goals Dataset',
        description: 'Mohamed Salah\'s cumulative Premier League goals by matchweek for the 2019-20 through 2025-26 seasons, from the per-match event feed.',
        path: '/players/mohamed-salah',
        csv: 'player_goals.csv',
        keywords: ['Mohamed Salah', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
