<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-numeric-1-box-outline" class="mr-2"></v-icon>
          One-Nil Wins
        </v-card-title>
        <v-card-subtitle>
          Which club's Premier League wins most often finish 1-0? Clubs with 30+ wins · home and away
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Sheffield United are the most efficient grinders in Premier League history, with
            22 of their 56 wins (39.3%) finishing 1-0. They sit ahead of Wigan (38.8%) and
            West Brom (35%) in a leaderboard dominated by well-organised sides that rarely won
            big. At the other end sit the free-scoring big four: Arsenal, Manchester United,
            City and Liverpool all finish 1-0 in under a fifth of their wins.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Share of Wins That Finish 1-0</v-card-title>
        <v-card-subtitle>
          Bars are to scale · hover for home/away breakdown
        </v-card-subtitle>
        <v-card-text>
          <OneNilWinsChart :data="oneNilWins" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          All Clubs (30+ Wins)
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Club</th>
                <th class="text-right">Total wins</th>
                <th class="text-right">1-0 wins</th>
                <th class="text-right">Home</th>
                <th class="text-right">Away</th>
                <th class="text-right">% of wins</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, i) in rows" :key="c.team_name">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ c.team_name }}</strong></td>
                <td class="text-right">{{ fmt(c.total_wins) }}</td>
                <td class="text-right">{{ fmt(c.one_nil_wins) }}</td>
                <td class="text-right">{{ c.home_1_0_wins }}</td>
                <td class="text-right">{{ c.away_1_0_wins }}</td>
                <td class="text-right"><strong>{{ c.pct_one_nil }}%</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.oneNilWins" />
    </v-col>
  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { oneNilWins, sqlQueries } from '~/composables/useData'

useHead({
  title: 'Premier League Clubs That Win Most Often 1-0',
  meta: [
    {
      name: 'description',
      content: 'Which Premier League club wins most often by a 1-0 scoreline? Share of each club\'s wins that finished 1-0, home or away, for clubs with 30 or more wins.'
    }
  ]
})

const rows = [...oneNilWins].sort((a, b) =>
  b.pct_one_nil - a.pct_one_nil || b.total_wins - a.total_wins
)
const fmt = n => d3.format(',')(n || 0)
</script>
