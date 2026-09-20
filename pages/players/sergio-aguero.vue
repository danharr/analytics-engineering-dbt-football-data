<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Sergio Agüero
        </v-card-title>
        <v-card-subtitle>
          Premier League goals: event-feed totals, half-by-half split and season-by-season race
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Sergio Agüero scored 82 goals across the seasons currently covered by the
            per-match event feed, including 13 penalties. The chart tracks his running goal
            total by matchweek from 2016-17 through 2020-21, including his 21-goal 2017-18
            campaign and 16 goals in 2019-20. Generated from the per-match event feed rather
            than aggregate results.
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
        <v-card-subtitle>First half vs second half · event-feed seasons</v-card-subtitle>
        <v-card-text><PlayerGoalDonut :summary="summary" /></v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          Top Opposition Clubs
        </v-card-title>
        <v-card-subtitle>The five clubs he has scored most against · event-feed seasons</v-card-subtitle>
        <v-card-text><PlayerOpponentTable :data="opponents" /></v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-line" class="mr-2"></v-icon>
          Goals by Matchweek
        </v-card-title>
        <v-card-subtitle>Cumulative league goals · one line per season</v-card-subtitle>
        <v-card-text><PlayerGoalRaceChart :data="agueroRows" /></v-card-text>
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

const playerName = 'Sergio Agüero'
const agueroRows = computed(() => playerGoals.filter(r => r.player_name === playerName))
const summary = computed(() => playerGoalSummary.find(r => r.player_name === playerName)
  ?? { total_goals: 0, penalties: 0, first_half: 0, second_half: 0 })
const opponents = computed(() => playerOpponentGoals.filter(r => r.player_name === playerName))

useHead({
  title: 'Sergio Agüero Goals by Matchweek',
  meta: [{
    name: 'description',
    content: 'Sergio Agüero\'s Premier League goals: event-feed totals, first-half vs second-half split, top opposition clubs and cumulative goals by matchweek from 2016-17 to 2020-21.'
  }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify(datasetLd({
      name: 'Sergio Agüero Premier League Goals Dataset',
      description: 'Sergio Agüero\'s Premier League goals, penalties, half-by-half split, top opposition clubs and cumulative goals by matchweek, from the per-match event feed.',
      path: '/players/sergio-aguero',
      csv: 'player_goals.csv',
      keywords: ['Sergio Agüero', 'goals by matchweek', 'Premier League']
    }))
  }]
})
</script>
