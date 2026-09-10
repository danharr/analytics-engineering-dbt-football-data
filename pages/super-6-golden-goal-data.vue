<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-timer" class="mr-2"></v-icon>
          Super 6 Golden Goal Data
        </v-card-title>
        <v-card-subtitle>
          When is the first goal most likely to be scored, season by season?
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            For every match the minute of the first goal is recorded, then binned into
            a histogram so you can see the most common minute. Each bar counts how many
            matches had their opening goal in that minute — a goal in the 7th minute
            counts toward minute 7, and five such matches give minute 7 a value of 5.
            Own goals count (they are still the match's first goal), goalless draws are
            excluded, and first goals in stoppage time are grouped under "90+". Built
            from the per-match event feed for the 2018-19 to 2025-26 seasons.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col v-for="season in seasons" :key="season" cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>{{ season }}</v-card-title>
        <v-card-subtitle>{{ peakSummary(season) }}</v-card-subtitle>
        <v-card-text>
          <FirstGoalMinuteChart :data="rowsFor(season)" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { firstGoalMinutes, joinNames, datasetLd } from '~/composables/useData'
import FirstGoalMinuteChart from '~/components/FirstGoalMinuteChart.vue'

const seasons = computed(() =>
  [...new Set(firstGoalMinutes.map(r => r.season_label))].sort(
    (a, b) => parseInt(b.split('-')[0]) - parseInt(a.split('-')[0])
  )
)

const rowsFor = season => firstGoalMinutes.filter(r => r.season_label === season)

function peakSummary(season) {
  const rows = rowsFor(season)
  if (!rows.length) return ''
  const max = Math.max(...rows.map(r => r.matches))
  if (max === 0) return 'No first goals recorded'
  const mins = rows.filter(r => r.matches === max).map(r => `minute ${r.label}`)
  return `Most common first goal: ${joinNames(mins)} (${max} matches)`
}

useHead({
  title: 'Super 6 Golden Goal Data',
  meta: [
    {
      name: 'description',
      content: 'The most common minute for the first goal in a Premier League match, as a histogram for each season from 2018-19 to 2025-26, from the per-match event feed.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League First Goal Minute Dataset',
        description: 'The distribution of the minute the first goal is scored in each match, per season from 2018-19 to 2025-26, from the per-match event feed.',
        path: '/super-6-golden-goal-data',
        csv: 'first_goal_minutes.csv',
        keywords: ['first goal', 'golden goal', 'Super 6', 'goal minutes']
      }))
    }
  ]
})
</script>
