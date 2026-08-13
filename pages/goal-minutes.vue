<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-chart-timeline-variant" class="mr-2"></v-icon>
          Goals by Minute
        </v-card-title>
        <v-card-subtitle>
          When Arsenal and West Ham United scored their Premier League goals in 2025-26
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Two population pyramids, one per club, charting every Premier League goal of the
            2025-26 season by the minute it was scored. Goals scored at home stretch to the
            left, goals scored away stretch to the right, and the length of each bar is the
            number of goals in that minute. The central column marks the minute, from the
            first minute at the top down to stoppage time at the bottom.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-shield" class="mr-2"></v-icon>
          Arsenal
        </v-card-title>
        <v-card-subtitle>
          Home goals on the left · away goals on the right
        </v-card-subtitle>
        <v-card-text>
          <GoalMinutesChart :data="arsenalMinutes" />
          <p class="text-center text-body-2 text-grey-darken-1 mt-3 mb-0">
            {{ arsenalTotal }} Premier League goals — {{ arsenalHome }} at home, {{ arsenalAway }} away
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-shield" class="mr-2"></v-icon>
          West Ham United
        </v-card-title>
        <v-card-subtitle>
          Home goals on the left · away goals on the right
        </v-card-subtitle>
        <v-card-text>
          <GoalMinutesChart :data="westHamMinutes" />
          <p class="text-center text-body-2 text-grey-darken-1 mt-3 mb-0">
            {{ westHamTotal }} Premier League goals — {{ westHamHome }} at home, {{ westHamAway }} away
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { goalMinutes, datasetLd } from '~/composables/useData'

useHead({
  title: 'Goals by Minute — Arsenal & West Ham United',
  meta: [
    {
      name: 'description',
      content: 'Every Premier League goal scored by Arsenal and West Ham United in 2025-26, charted by minute as population pyramids with home and away goals split.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Goals by Minute Dataset',
        description: 'Every Premier League goal scored by Arsenal and West Ham United in the 2025-26 season, bucketed by the minute it was scored and split into home and away goals.',
        path: '/goal-minutes',
        csv: 'goal_minutes.csv',
        keywords: ['goals by minute', 'population pyramid', 'Arsenal', 'West Ham United']
      }))
    }
  ]
})

const arsenalMinutes = computed(() =>
  goalMinutes.filter(d => d.team_name === 'Arsenal')
)

const westHamMinutes = computed(() =>
  goalMinutes.filter(d => d.team_name === 'West Ham United')
)

const sum = (rows, key) => rows.reduce((acc, d) => acc + d[key], 0)

const arsenalHome = computed(() => sum(arsenalMinutes.value, 'home_goals'))
const arsenalAway = computed(() => sum(arsenalMinutes.value, 'away_goals'))
const arsenalTotal = computed(() => arsenalHome.value + arsenalAway.value)

const westHamHome = computed(() => sum(westHamMinutes.value, 'home_goals'))
const westHamAway = computed(() => sum(westHamMinutes.value, 'away_goals'))
const westHamTotal = computed(() => westHamHome.value + westHamAway.value)
</script>
