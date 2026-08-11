<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-fire" class="mr-2"></v-icon>
          Most Chaotic Matches
        </v-card-title>
        <v-card-subtitle>
          A chaos score for every match: 3 points per goal + 2 points per red card
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Portsmouth's 7-4 win over Reading in September 2007 remains the most chaotic match
            in Premier League history, with 11 goals and a chaos score of 33. Manchester United's
            8-2 demolition of Arsenal in 2011 and their 9-0 win over Southampton in 2021 round
            out the top three. Every one of the 50 most chaotic games is plotted here, with the
            bars split into goals and the red cards that sent a game over the edge.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Top 50 Chaos Scores</v-card-title>
        <v-card-subtitle>
          Stacked bars · blue = goals, red = red cards · longest bar at top
        </v-card-subtitle>
        <v-card-text>
          <MostChaoticMatchesChart :data="mostChaoticMatches" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Chaos Leaderboard
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Date</th>
                <th class="text-left">Season</th>
                <th class="text-left">Match</th>
                <th class="text-right">Goals</th>
                <th class="text-right">Reds</th>
                <th class="text-right">Goals pts</th>
                <th class="text-right">Red pts</th>
                <th class="text-right">Chaos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(m, i) in rows" :key="m.match_id">
                <td>{{ i + 1 }}</td>
                <td>{{ fmtDate(m.kickoff_date) }}</td>
                <td>{{ m.season_label }}</td>
                <td>{{ match(m) }}</td>
                <td class="text-right">{{ m.total_goals }}</td>
                <td class="text-right">{{ m.total_red_cards }}</td>
                <td class="text-right">{{ m.goals_points }}</td>
                <td class="text-right">{{ m.red_points }}</td>
                <td class="text-right"><strong>{{ m.chaos_score }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.mostChaoticMatches" />
    </v-col>
  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { mostChaoticMatches, sqlQueries, datasetLd } from '~/composables/useData'

useHead({
  title: 'Highest-Scoring & Most Chaotic Premier League Matches',
  meta: [
    {
      name: 'description',
      content: 'The most chaotic Premier League matches ever, ranked by a chaos score of 3 points per goal plus 2 points per red card.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Most Chaotic Matches Dataset',
        description: 'The most chaotic Premier League matches ever, ranked by a chaos score of three points per goal plus two points per red card, from 1992-93 to 2025-26.',
        path: '/most-chaotic-matches',
        csv: 'most_chaotic_matches.csv',
        keywords: ['chaos score', 'high-scoring matches', 'red cards']
      }))
    }
  ]
})

const rows = [...mostChaoticMatches].sort((a, b) =>
  b.chaos_score - a.chaos_score || (a.kickoff_date < b.kickoff_date ? -1 : 1)
)
const fmtDate = s => d3.timeFormat('%d %b %Y')(new Date(s + 'T00:00:00Z'))
const match = m => `${m.home_team_name} ${m.home_score}-${m.away_score} ${m.away_team_name}`
</script>
