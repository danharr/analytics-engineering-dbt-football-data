<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-shield-check" class="mr-2"></v-icon>
          Current Unbeaten Runs
        </v-card-title>
        <v-card-subtitle>
          How long each current Premier League club has gone without losing
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            For every club in the current Premier League season, this shows their most recent
            league defeat and every result since — a win (green) or draw (grey) for each game.
            Runs carry over the summer and can span seasons; the blue marker on a result flags
            the first game of a new season.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Unbeaten Runs by Team</v-card-title>
        <v-card-subtitle>
          Last defeat on the left, then each result since, left to right · longest current run at top
        </v-card-subtitle>
        <v-card-text>
          <CurrentUnbeatenRunsChart :data="currentUnbeatenRuns" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Unbeaten Runs by Team
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-left">Last defeat</th>
                <th class="text-left">Opponent</th>
                <th class="text-right">Games unbeaten</th>
                <th class="text-left">Results since</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in sortedRuns" :key="row.team_abbr">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ row.team_name }}</strong></td>
                <td>{{ row.last_loss_date ?? '—' }}</td>
                <td>
                  {{ row.last_loss_opponent ? `${row.last_loss_opponent} ${row.last_loss_score ?? ''}` : '—' }}
                </td>
                <td class="text-right">{{ row.run_length }}</td>
                <td>{{ (row.results ?? '').split(',').join(' ') }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { currentUnbeatenRuns } from '~/composables/useStreaksData'
import { datasetLd } from '~/composables/useChartHelpers'

useHead({
  title: 'Current Unbeaten Runs',
  meta: [
    {
      name: 'description',
      content: 'Every current Premier League club\u2019s current unbeaten run: their last defeat and each win or draw since, spanning seasons where applicable.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Current Unbeaten Runs Dataset',
        description: 'The current unbeaten run for every club in the current Premier League season: most recent defeat, then each win or draw since, spanning seasons where applicable.',
        path: '/premier-league-current-unbeaten-runs',
        csv: 'current_unbeaten_runs.csv',
        keywords: ['unbeaten run', 'current form', 'winning streaks']
      }))
    }
  ]
})

const sortedRuns = computed(() =>
  [...currentUnbeatenRuns].sort((a, b) => {
    if (b.run_length !== a.run_length) return b.run_length - a.run_length
    const ad = a.last_loss_date ?? ''
    const bd = b.last_loss_date ?? ''
    if (ad !== bd) return ad < bd ? 1 : -1
    return a.team_name.localeCompare(b.team_name)
  })
)
</script>
