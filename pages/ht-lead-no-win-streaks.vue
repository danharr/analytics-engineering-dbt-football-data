<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-flag-checkered" class="mr-2"></v-icon>
          Longest No-Win Streaks After HT Lead
        </v-card-title>
        <v-card-subtitle>
          For each team, the longest consecutive run of league matches where they led at half-time but still failed to win
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Leading at half-time is normally worth three points, so it says something that only
            six teams in 34 seasons have managed to go three consecutive matches without
            converting a half-time lead into a win. Crystal Palace hold the current record,
            letting three straight half-time leads slip across January 2019. Every team that
            has ever gone at least two in a row is listed here, with the opponents who punished
            them.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Consecutive Matches</v-card-title>
        <v-card-subtitle>
          Bars are to scale · longest streak at top · hover for dates and opponents
        </v-card-subtitle>
        <v-card-text>
          <HtLeadNoWinStreaksChart :data="htLeadNoWinStreaks" />
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

  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { htLeadNoWinStreaks, datasetLd } from '~/composables/useData'

useHead({
  title: 'Premier League Teams That Failed to Win After Leading at Half-Time',
  meta: [
    {
      name: 'description',
      content: 'For every Premier League team, the longest consecutive run of matches where they led at half-time but failed to win.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League No-Win Streaks After Half-Time Lead Dataset',
        description: 'For every Premier League team, the longest consecutive run of matches where they led at half-time but failed to win, with the seasons and opponents involved.',
        path: '/ht-lead-no-win-streaks',
        csv: 'ht_lead_no_win_streaks.csv',
        keywords: ['half-time leads', 'no-win streaks']
      }))
    }
  ]
})

const rows = [...htLeadNoWinStreaks].sort((a, b) => b.run_length - a.run_length || a.team_name.localeCompare(b.team_name))
const fmtDate = s => d3.timeFormat('%d %b %Y')(new Date(s + 'T00:00:00Z'))
</script>
