<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title tag="h1">
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Ian Wright
        </v-card-title>
        <v-card-subtitle>
          Premier League goals: all-time totals, half-by-half split and season-by-season race
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Ian Wright is one of Arsenal's greatest-ever goalscorers. Across the seasons
            covered by the event feed (1992-93 through 1996-97) he scored 94 Premier League
            goals for Arsenal, 15 from the penalty spot. The chart below tracks his running
            goal total by matchweek across each of those Arsenal seasons. Generated from the
            per-match event feed rather than aggregate results.
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
          <PlayerGoalRaceChart :data="wrightRows" />
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

const wrightRows = computed(() => playerGoals.filter(r => r.player_name === 'Ian Wright'))

const summary = computed(() => playerGoalSummary.find(r => r.player_name === 'Ian Wright')
  ?? { total_goals: 0, penalties: 0, first_half: 0, second_half: 0 })

const opponents = computed(() => playerOpponentGoals.filter(r => r.player_name === 'Ian Wright'))

useHead({
  title: 'Ian Wright Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Ian Wright\'s Premier League goals: all-time totals, first-half vs second-half split and cumulative goals by matchweek across 1992-93 to 1996-97 at Arsenal.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Ian Wright Premier League Goals Dataset',
        description: 'Ian Wright\'s Premier League goals: all-time totals, penalties, first-half vs second-half split, top opposition clubs and cumulative goals by matchweek, from the per-match event feed.',
        path: '/players/ian-wright',
        csv: 'player_goals.csv',
        keywords: ['Ian Wright', 'goals by matchweek', 'Arsenal']
      }))
    }
  ]
})
</script>
