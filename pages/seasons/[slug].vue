<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-trophy-outline" class="mr-2"></v-icon>
            {{ label }} Season
          </v-card-title>
          <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <SeasonTableChart :rows="seasonRows" />
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <v-card>
          <v-card-title>
            <v-icon icon="mdi-chart-line" class="mr-2"></v-icon>
            The Points Race
          </v-card-title>
          <v-card-subtitle>
            Every team's cumulative points after each matchweek · hover a team below to highlight it
          </v-card-subtitle>
          <v-card-text>
            <SeasonPointsChart :data="seasonPointsData" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <v-card>
          <v-card-title>
            <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
            Top 5 Biggest Wins
          </v-card-title>
          <v-card-subtitle>Widest winning margins of the {{ label }} season</v-card-subtitle>
          <v-card-text>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">Team</th>
                  <th class="text-left">Opponent</th>
                  <th class="text-left">H/A</th>
                  <th class="text-right">Score</th>
                  <th class="text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in biggestWins" :key="row.rank">
                  <td>{{ row.rank }}</td>
                  <td><strong>{{ row.team_name }}</strong></td>
                  <td>{{ row.opponent_name }}</td>
                  <td>{{ row.home_away }}</td>
                  <td class="text-right"><strong>{{ row.score }}</strong></td>
                  <td>{{ fmtDate(row.kickoff_date) }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import * as d3 from 'd3'
import { useRoute } from 'vue-router'
import { seasonTable, seasonPoints, seasonBiggestWins } from '~/composables/useData'
import SeasonTableChart from '~/components/SeasonTableChart.vue'
import SeasonPointsChart from '~/components/SeasonPointsChart.vue'

const SEASON_NOTES = {
  '1992-93': 'Final Premier League table · the inaugural season',
  '1993-94': 'Final Premier League table · Manchester United retain the title'
}

const route = useRoute()
const label = String(route.params.slug)

const seasonRows = seasonTable.filter(r => r.season_label === label)
const seasonPointsData = seasonPoints.filter(r => r.season_label === label)
const biggestWins = seasonBiggestWins.filter(r => r.season_label === label)

if (!seasonRows.length) {
  throw createError({ statusCode: 404, statusMessage: 'Season not found', fatal: true })
}

const subtitle = SEASON_NOTES[label] ?? 'Final Premier League table'

const fmtDate = s => d3.timeFormat('%d %b %Y')(new Date(s + 'T00:00:00Z'))

useHead({
  title: `${label} Premier League Final Table & Results`,
  meta: [{
    name: 'description',
    content: `The ${label} Premier League table, the season's biggest wins and the points race chart showing every team's cumulative points across the season.`
  }]
})
</script>
