<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-soccer" class="mr-2"></v-icon>
          Scoring Runs
        </v-card-title>
        <v-card-subtitle>
          The longest scoreless droughts and scoring streaks across the Premier League era
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Every team's longest run of consecutive games without scoring a goal, and their
            longest run of scoring in every game. The top five teams in each category are shown
            below, drawn from 35 seasons of Premier League data (1992-93 to 2026-27).
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-water-off-outline" class="mr-2"></v-icon>
          Longest runs without scoring
        </v-card-title>
        <v-card-subtitle>The top 5 goal droughts — consecutive games where a team failed to score</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-right">Games</th>
                <th class="text-left">From</th>
                <th class="text-left">To</th>
                <th class="text-left">Opponents</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in scoreless" :key="r.team_abbr">
                <td>{{ r.rank }}</td>
                <td>
                  <v-icon icon="mdi-shield" :color="teamColour(r.team_name)" size="small" class="mr-2"></v-icon>
                  <strong>{{ r.team_name }}</strong>
                </td>
                <td class="text-right"><strong>{{ r.run_length }}</strong></td>
                <td>{{ formatDate(r.start_date) }}</td>
                <td>{{ formatDate(r.end_date) }}</td>
                <td class="text-body-2 text-grey-darken-1">{{ r.opponents }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-soccer" class="mr-2"></v-icon>
          Longest runs with scoring
        </v-card-title>
        <v-card-subtitle>The top 5 scoring streaks — consecutive games where a team scored at least once</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-right">Games</th>
                <th class="text-left">From</th>
                <th class="text-left">To</th>
                <th class="text-left">Opponents</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in scoring" :key="r.team_abbr">
                <td>{{ r.rank }}</td>
                <td>
                  <v-icon icon="mdi-shield" :color="teamColour(r.team_name)" size="small" class="mr-2"></v-icon>
                  <strong>{{ r.team_name }}</strong>
                </td>
                <td class="text-right"><strong>{{ r.run_length }}</strong></td>
                <td>{{ formatDate(r.start_date) }}</td>
                <td>{{ formatDate(r.end_date) }}</td>
                <td class="text-body-2 text-grey-darken-1">{{ r.opponents }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { scoringRuns, datasetLd } from '~/composables/useData'
import { teamColour } from '~/composables/teamColours'

useHead({
  title: 'Scoring Runs',
  meta: [
    {
      name: 'description',
      content: 'The longest runs of consecutive games without scoring and the longest scoring streaks in Premier League history, top 5 teams in each.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Scoring Runs Dataset',
        description: 'The longest scoreless droughts and scoring streaks per team across the Premier League era (1992-93 to 2026-27), top 5 teams in each category.',
        path: '/scoring-runs',
        csv: 'scoring_runs.csv',
        keywords: ['scoring runs', 'goal droughts', 'scoring streaks', 'Premier League']
      }))
    }
  ]
})

const scoreless = scoringRuns.filter(r => r.category === 'scoreless')
const scoring = scoringRuns.filter(r => r.category === 'scoring')

function formatDate(iso) {
  const [y, m, d] = iso.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${Number(d)} ${months[Number(m) - 1]} ${y}`
}
</script>
