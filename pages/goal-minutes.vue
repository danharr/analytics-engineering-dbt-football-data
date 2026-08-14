<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-chart-timeline-variant" class="mr-2"></v-icon>
          Goals by Minute
        </v-card-title>
        <v-card-subtitle>
          When Arsenal, West Ham United, Chelsea, Liverpool and Manchester United scored their
          Premier League goals in 2025-26
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Five population pyramids, one per club, charting every Premier League goal of the
            2025-26 season by the minute it was scored. Goals scored at home stretch to the
            left, goals scored away stretch to the right, and the length of each bar is the
            number of goals in that interval. All five charts share the same axis scale, so
            bar lengths are directly comparable across clubs. Use the toggle to switch between
            five-minute buckets and individual minutes.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <div class="d-flex justify-end">
        <v-btn-toggle v-model="granularity" mandatory variant="outlined" divided density="comfortable">
          <v-btn value="5min">5-minute buckets</v-btn>
          <v-btn value="individual">Individual minutes</v-btn>
        </v-btn-toggle>
      </div>
    </v-col>

    <v-col
      v-for="t in teamData"
      :key="t.name"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-shield" :color="teamColour(t.name)" class="mr-2"></v-icon>
          {{ t.name }}
        </v-card-title>
        <v-card-subtitle>
          Home goals on the left · away goals on the right
        </v-card-subtitle>
        <v-card-text>
          <GoalMinutesChart :data="t.chartData.value" :max-val="globalMax" />
          <p class="text-center text-body-2 text-grey-darken-1 mt-3 mb-0">
            {{ t.total.value }} Premier League goals — {{ t.home.value }} at home, {{ t.away.value }} away
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed, ref } from 'vue'
import { goalMinutes, datasetLd } from '~/composables/useData'
import { teamColour } from '~/composables/teamColours'

useHead({
  title: 'Goals by Minute',
  meta: [
    {
      name: 'description',
      content: 'Every Premier League goal scored by Arsenal, West Ham United, Chelsea, Liverpool and Manchester United in 2025-26, charted by the exact minute or in five-minute intervals as population pyramids with home and away goals split.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Goals by Minute Dataset',
        description: 'Every Premier League goal scored by Arsenal, West Ham United, Chelsea, Liverpool and Manchester United in the 2025-26 season, by the exact minute it was scored and split into home and away goals.',
        path: '/goal-minutes',
        csv: 'goal_minutes.csv',
        keywords: ['goals by minute', 'population pyramid', 'Arsenal', 'West Ham United', 'Chelsea', 'Liverpool', 'Manchester United']
      }))
    }
  ]
})

const granularity = ref('5min')

const teamNames = ['Arsenal', 'West Ham United', 'Chelsea', 'Liverpool', 'Manchester United']

function toBuckets(rows) {
  const buckets = []
  for (let b = 1; b <= 18; b++) {
    buckets.push({ minute: b * 5, label: `${b * 5 - 4}-${b * 5}`, home_goals: 0, away_goals: 0 })
  }
  for (const r of rows) {
    const b = buckets[Math.ceil(r.minute / 5) - 1]
    b.home_goals += r.home_goals
    b.away_goals += r.away_goals
  }
  return buckets
}

const teamData = teamNames.map(name => {
  const minutes = computed(() =>
    goalMinutes.filter(d => d.team_name === name)
  )
  const chartData = computed(() =>
    granularity.value === 'individual' ? minutes.value : toBuckets(minutes.value)
  )
  const home = computed(() =>
    minutes.value.reduce((acc, d) => acc + d.home_goals, 0)
  )
  const away = computed(() =>
    minutes.value.reduce((acc, d) => acc + d.away_goals, 0)
  )
  const total = computed(() => home.value + away.value)
  return { name, chartData, home, away, total }
})

const globalMax = computed(() => {
  let m = 0
  for (const t of teamData) {
    for (const d of t.chartData.value) {
      m = Math.max(m, d.home_goals, d.away_goals)
    }
  }
  return m
})
</script>
