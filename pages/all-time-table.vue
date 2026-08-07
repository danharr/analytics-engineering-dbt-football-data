<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          All-Time Premier League Table
        </v-card-title>
        <v-card-subtitle>All 33 seasons · every team's all-time record, sorted by points</v-card-subtitle>
        <v-card-text>
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
  title: 'All-Time Premier League Table — Premier League Insights',
  meta: [
    {
      name: 'description',
      content: 'The all-time Premier League table — every team ranked by points across all seasons, with matches played, wins, draws, losses and points.'
    }
  ]
})
</script>
