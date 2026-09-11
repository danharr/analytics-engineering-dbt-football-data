<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Erling Haaland
        </v-card-title>
        <v-card-subtitle>
          Premier League goals: all-time totals, half-by-half split and season-by-season race
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Erling Haaland has topped the Premier League scoring charts for an individual
            season and, across every season in the data, has scored 115 Premier League
            goals, 20 of them penalties. Each line tracks his running goal total as the
            season unfolds — every goal he has scored by each matchweek, from the 36 that
            broke the single-season record in 2022-23, through his 27-goal 2023-24 campaign
            and the 27 that won him the 2025-26 Golden Boot. The 2026-27 line is drawn
            dashed and starts from zero, growing as the current season progresses. Generated
            from the per-match event feed rather than aggregate results.
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
          Cumulative league goals · one line per season · in-progress seasons dashed
        </v-card-subtitle>
        <v-card-text>
          <PlayerGoalRaceChart :data="haalandRows" />
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

const haalandRows = computed(() => playerGoals.filter(r => r.player_name === 'Erling Haaland'))

const summary = computed(() => playerGoalSummary.find(r => r.player_name === 'Erling Haaland')
  ?? { total_goals: 0, penalties: 0, first_half: 0, second_half: 0 })

const opponents = computed(() => playerOpponentGoals.filter(r => r.player_name === 'Erling Haaland'))

useHead({
  title: 'Erling Haaland Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Erling Haaland\'s cumulative Premier League goals by matchweek across 2022-23, 2023-24, 2024-25, 2025-26 and the in-progress 2026-27 season.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Erling Haaland Cumulative Premier League Goals Dataset',
        description: 'Erling Haaland\'s cumulative Premier League goals by matchweek for the 2022-23, 2023-24, 2024-25, 2025-26 and in-progress 2026-27 seasons, from the per-match event feed.',
        path: '/players/erling-haaland',
        csv: 'player_goals.csv',
        keywords: ['Erling Haaland', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
