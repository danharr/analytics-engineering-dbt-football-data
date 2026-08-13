<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-timer-sand" class="mr-2"></v-icon>
          Longest Gap Between Wins
        </v-card-title>
        <v-card-subtitle>
          For each team, the longest time between two consecutive wins, spanning seasons rather than games
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Nottingham Forest hold the longest wait of all: 8,491 days, over 23 years, between
            a win at Southampton in May 1999 and their next Premier League victory in August
            2022. Forest spent almost all of that time outside the division, and that story
            repeats down the list. Ipswich (8,236 days) and Leeds (6,006) fill the top spots
            after long stretches in the Football League. The chart ranks every team by the
            calendar time between consecutive wins, so even clubs that never left the top
            flight put in a far more modest appearance at the bottom.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Time Between Wins</v-card-title>
        <v-card-subtitle>
          Bars are to scale · longest gap at top · hover for dates
        </v-card-subtitle>
        <v-card-text>
          <LongestWinlessGapsChart :data="longestWinlessGaps" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Every Team's Longest Gap
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-left">Gap</th>
                <th class="text-left">Last win</th>
                <th class="text-left">Next win</th>
                <th class="text-right">Days</th>
                <th class="text-right">League matches between</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(g, i) in rows" :key="g.team_name">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ g.team_name }}</strong></td>
                <td>{{ formatGap(g.start_date, g.end_date).label }}</td>
                <td>{{ fmtDate(g.start_date) }}</td>
                <td>{{ fmtDate(g.end_date) }}</td>
                <td class="text-right">{{ fmt(g.gap_days) }}</td>
                <td class="text-right">{{ g.matches_between }}</td>
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
import { longestWinlessGaps, formatGap, datasetLd } from '~/composables/useData'

useHead({
  title: 'Longest Time Between Wins in Premier League History',
  meta: [
    {
      name: 'description',
      content: 'For every Premier League team, the longest time between two consecutive wins, spanning seasons and shown in years and days rather than matches.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Longest Time Between Wins Dataset',
        description: 'For every Premier League team, the longest time between two consecutive wins across all seasons, given in years and days with the last and next win dates.',
        path: '/longest-winless-gaps',
        csv: 'longest_winless_gaps.csv',
        keywords: ['gap between wins', 'winless spells']
      }))
    }
  ]
})

const rows = [...longestWinlessGaps].sort((a, b) => b.gap_days - a.gap_days)
const fmt = n => d3.format(',')(n || 0)
const fmtDate = s => d3.timeFormat('%d %b %Y')(new Date(s + 'T00:00:00Z'))
</script>
