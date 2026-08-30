<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Erling Haaland
        </v-card-title>
        <v-card-subtitle>
          Cumulative Premier League goals by matchweek, season by season
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Erling Haaland has topped the Premier League scoring charts for an individual
            season. Each line tracks his running goal total as the season unfolds — every
            goal he has scored by each matchweek, from his 27-goal 2023-24 campaign through
            the 27 that won him the 2025-26 Golden Boot. The 2026-27 line is drawn dashed
            and starts from zero, growing as the current season progresses. Generated from
            the per-match event feed rather than aggregate results.
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
import { playerGoals, datasetLd } from '~/composables/useData'
import PlayerGoalRaceChart from '~/components/PlayerGoalRaceChart.vue'

const haalandRows = computed(() => playerGoals.filter(r => r.player_name === 'Erling Haaland'))

useHead({
  title: 'Erling Haaland Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Erling Haaland\'s cumulative Premier League goals by matchweek across 2023-24, 2024-25, 2025-26 and the in-progress 2026-27 season.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Erling Haaland Cumulative Premier League Goals Dataset',
        description: 'Erling Haaland\'s cumulative Premier League goals by matchweek for the 2023-24, 2024-25, 2025-26 and in-progress 2026-27 seasons, from the per-match event feed.',
        path: '/players/erling-haaland',
        csv: 'player_goals.csv',
        keywords: ['Erling Haaland', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
