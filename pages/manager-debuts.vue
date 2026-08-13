<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-handshake" class="mr-2"></v-icon>
          Manager Debuts
        </v-card-title>
        <v-card-subtitle>
          The first league match for every manager at each club they managed, best and worst
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Sam Allardyce could hardly have asked for a better start at Bolton: a 5-0 win at
            Leicester on the opening day of 2001-02, a debut margin he shares with Michael
            Laudrup's Swansea (5-0 at QPR in 2012). At the other end, Roberto Di Matteo's
            first game in charge of West Brom ended 6-0 at Chelsea. Each row below is the
            first league match a manager took charge of a club for — permanent appointments
            only — split into the five biggest wins and five biggest defeats.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
          Top 5 Biggest Debut Wins
        </v-card-title>
        <v-card-subtitle>Biggest winning margins in a manager's first match in charge</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Manager</th>
                <th class="text-left">Team</th>
                <th class="text-left">Opponent</th>
                <th class="text-left">H/A</th>
                <th class="text-right">Score</th>
                <th class="text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in wins" :key="row.manager_name + row.team_name">
                <td>{{ row.rank }}</td>
                <td><strong>{{ row.manager_name }}</strong></td>
                <td>{{ row.team_name }}</td>
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

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-emoticon-sad-outline" class="mr-2"></v-icon>
          Top 5 Biggest Debut Defeats
        </v-card-title>
        <v-card-subtitle>Biggest losing margins in a manager's first match in charge</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Manager</th>
                <th class="text-left">Team</th>
                <th class="text-left">Opponent</th>
                <th class="text-left">H/A</th>
                <th class="text-right">Score</th>
                <th class="text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in defeats" :key="row.manager_name + row.team_name">
                <td>{{ row.rank }}</td>
                <td><strong>{{ row.manager_name }}</strong></td>
                <td>{{ row.team_name }}</td>
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
</template>

<script setup>
import * as d3 from 'd3'
import { computed } from 'vue'
import { managerDebuts, datasetLd } from '~/composables/useData'

useHead({
  title: 'Best & Worst Manager Debuts in Premier League History',
  meta: [
    {
      name: 'description',
      content: 'The first league match for every manager at each club they managed, split into the five biggest debut wins and five biggest debut defeats.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Manager Debuts Dataset',
        description: 'The first match for every manager at each club they managed (permanent appointments), with the top five biggest debut wins and top five biggest debut defeats by score and margin.',
        path: '/manager-debuts',
        csv: 'manager_debuts.csv',
        keywords: ['manager debuts', 'first match in charge']
      }))
    }
  ]
})

const wins = computed(() => managerDebuts.filter(d => d.list === 'win'))
const defeats = computed(() => managerDebuts.filter(d => d.list === 'defeat'))

const fmtDate = s => d3.timeFormat('%d %b %Y')(new Date(s + 'T00:00:00Z'))
</script>
