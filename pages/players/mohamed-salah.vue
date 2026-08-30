<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Mohamed Salah
        </v-card-title>
        <v-card-subtitle>
          Cumulative Premier League goals by matchweek, season by season
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Mohamed Salah has topped the Premier League scoring charts for an individual
            season. Each line tracks his running goal total as the season unfolds — every
            goal he has scored by each matchweek, from 18 in 2023-24 through the 29 that
            won him the 2024-25 Golden Boot and seven in 2025-26. Salah left the Premier
            League after 2025-26, so there is no 2026-27 line. Generated from the per-match
            event feed rather than aggregate results.
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
          <PlayerGoalRaceChart :data="salahRows" />
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { playerGoals, datasetLd } from '~/composables/useData'
import PlayerGoalRaceChart from '~/components/PlayerGoalRaceChart.vue'

const salahRows = computed(() => playerGoals.filter(r => r.player_name === 'Mohamed Salah'))

useHead({
  title: 'Mohamed Salah Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Mohamed Salah\'s cumulative Premier League goals by matchweek across 2023-24, 2024-25 and 2025-26.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Mohamed Salah Cumulative Premier League Goals Dataset',
        description: 'Mohamed Salah\'s cumulative Premier League goals by matchweek for the 2023-24, 2024-25 and 2025-26 seasons, from the per-match event feed.',
        path: '/players/mohamed-salah',
        csv: 'player_goals.csv',
        keywords: ['Mohamed Salah', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
