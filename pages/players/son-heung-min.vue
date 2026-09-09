<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Son Heung-min
        </v-card-title>
        <v-card-subtitle>
          Cumulative Premier League goals by matchweek, season by season
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Son Heung-min shared the 2021-22 Golden Boot with Mohamed Salah. Each line
            tracks his running goal total as the season unfolds — every goal he scored by
            each matchweek at Tottenham Hotspur, from 11 in 2019-20 and 17 in 2020-21
            through the 23 that won him the 2021-22 Golden Boot, then 10 in 2022-23, 17 in
            2023-24 and 7 in 2024-25. Generated from the per-match event feed rather than
            aggregate results.
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
          <PlayerGoalRaceChart :data="sonRows" />
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { playerGoals, datasetLd } from '~/composables/useData'
import PlayerGoalRaceChart from '~/components/PlayerGoalRaceChart.vue'

const sonRows = computed(() => playerGoals.filter(r => r.player_name === 'Son Heung-min'))

useHead({
  title: 'Son Heung-min Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Son Heung-min\'s cumulative Premier League goals by matchweek across 2019-20 through 2024-25 at Tottenham Hotspur.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Son Heung-min Cumulative Premier League Goals Dataset',
        description: 'Son Heung-min\'s cumulative Premier League goals by matchweek for the 2019-20 through 2024-25 seasons, from the per-match event feed.',
        path: '/players/son-heung-min',
        csv: 'player_goals.csv',
        keywords: ['Son Heung-min', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
