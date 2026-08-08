<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-trophy-outline" class="mr-2"></v-icon>
          Comeback Kings
        </v-card-title>
        <v-card-subtitle>
          For each team, the longest consecutive run of league matches where they were losing at half-time but came back to win
        </v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Consecutive Comebacks</v-card-title>
        <v-card-subtitle>
          Bars are to scale · longest streak at top · hover for dates and opponents
        </v-card-subtitle>
        <v-card-text>
          <ComebackKingsChart :data="comebackKings" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Every Team's Longest Streak
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-right">Matches</th>
                <th class="text-left">Season(s)</th>
                <th class="text-left">First match</th>
                <th class="text-left">Last match</th>
                <th class="text-left">Opponents</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(s, i) in rows" :key="s.team_name">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ s.team_name }}</strong></td>
                <td class="text-right">{{ s.run_length }}</td>
                <td>{{ s.seasons }}</td>
                <td>{{ fmtDate(s.start_date) }}</td>
                <td>{{ fmtDate(s.end_date) }}</td>
                <td>{{ s.opponents }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.comebackKings" />
    </v-col>
  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { comebackKings, sqlQueries } from '~/composables/useData'

useHead({
  title: 'Comeback Kings',
  meta: [
    {
      name: 'description',
      content: 'For every Premier League team, the longest consecutive run of matches where they were losing at half-time but came back to win.'
    }
  ]
})

const rows = [...comebackKings].sort((a, b) => b.run_length - a.run_length || a.team_name.localeCompare(b.team_name))
const fmtDate = s => d3.timeFormat('%d %b %Y')(new Date(s + 'T00:00:00Z'))
</script>
