<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          All-Time Premier League Table
        </v-card-title>
        <v-card-subtitle>All 34 seasons · every team's all-time record, sorted by points</v-card-subtitle>
        <v-card-text>
          <p class="mb-4">
            Manchester United sit top of the all-time Premier League table with 2,614 points
            from 1,304 matches, a clear 141 ahead of Arsenal (2,473) and Liverpool (2,402).
            Every team that has ever played in the division is here, 51 in total, ranked by
            points across all 34 seasons from 1992-93 to 2025-26. United's 775 wins are a
            record nobody else has come close to.
          </p>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Pos</th>
                <th class="text-left">Team</th>
                <th class="text-right">Played</th>
                <th class="text-right">W</th>
                <th class="text-right">D</th>
                <th class="text-right">L</th>
                <th class="text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in allTime" :key="row.team_abbr">
                <td>{{ i + 1 }}</td>
                <td>{{ row.team_name }}</td>
                <td class="text-right">{{ row.matches_played }}</td>
                <td class="text-right">{{ row.wins }}</td>
                <td class="text-right">{{ row.draws }}</td>
                <td class="text-right">{{ row.losses }}</td>
                <td class="text-right"><strong>{{ row.points }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.allTimeTable" />
    </v-col>
  </v-row>
</template>

<script setup>
import { allTime, sqlQueries } from '~/composables/useData'

useHead({
  title: 'Premier League All-Time Table & Standings',
  meta: [
    {
      name: 'description',
      content: 'The all-time Premier League table, with every team ranked by points across all seasons and matches played, wins, draws, losses and points.'
    }
  ]
})
</script>
