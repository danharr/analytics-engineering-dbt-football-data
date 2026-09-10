<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Harry Kane
        </v-card-title>
        <v-card-subtitle>
          Cumulative Premier League goals by matchweek, season by season
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Harry Kane is a three-time Premier League Golden Boot winner, most recently in
            2020-21. Each line tracks his running goal total as the season unfolds — every
            goal he scored by each matchweek across his final Tottenham Hotspur seasons, from
            18 in 2019-20 and the 23 that won him the 2020-21 Golden Boot, through 17 in
            2021-22 and 30 in 2022-23. Kane left the Premier League after 2022-23, so there
            are no later lines. Generated from the per-match event feed rather than aggregate
            results.
          </p>
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
          <PlayerGoalRaceChart :data="kaneRows" />
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { playerGoals } from '~/composables/usePlayerData'
import { datasetLd } from '~/composables/useChartHelpers'
import PlayerGoalRaceChart from '~/components/PlayerGoalRaceChart.vue'

const kaneRows = computed(() => playerGoals.filter(r => r.player_name === 'Harry Kane'))

useHead({
  title: 'Harry Kane Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Harry Kane\'s cumulative Premier League goals by matchweek across 2019-20, 2020-21, 2021-22 and 2022-23 at Tottenham Hotspur.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Harry Kane Cumulative Premier League Goals Dataset',
        description: 'Harry Kane\'s cumulative Premier League goals by matchweek for the 2019-20, 2020-21, 2021-22 and 2022-23 seasons, from the per-match event feed.',
        path: '/players/harry-kane',
        csv: 'player_goals.csv',
        keywords: ['Harry Kane', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
