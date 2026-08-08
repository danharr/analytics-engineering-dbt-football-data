<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-run-fast" class="mr-2"></v-icon>
          Five-Game Win Streaks
        </v-card-title>
        <v-card-subtitle>
          The last time each team won 5+ games in a row within a single season
        </v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Last 5+ Game Winning Streak by Team</v-card-title>
        <v-card-subtitle>
          Each dot is the most recent run of 5+ consecutive wins that stayed inside
          one season · most recent at top
        </v-card-subtitle>
        <v-card-text>
          <FiveGameStreaksChart :data="fiveGameStreaks" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Streaks by Team
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-left">Started</th>
                <th class="text-left">Season</th>
                <th class="text-right">Games</th>
                <th class="text-left">Opponents</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in sortedStreaks" :key="row.team_name">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ row.team_name }}</strong></td>
                <td>{{ row.streak_start }}</td>
                <td>{{ row.season_label }}</td>
                <td class="text-right">{{ row.streak_length }}</td>
                <td>{{ row.opponents }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.fiveGameStreaks" />
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { fiveGameStreaks, sqlQueries } from '~/composables/useData'

useHead({
  title: 'Five-Game Win Streaks — Premier League Insights',
  meta: [
    {
      name: 'description',
      content: 'The most recent run of five or more consecutive wins within a single season for every Premier League team, with the opponents beaten along the way.'
    }
  ]
})

const sortedStreaks = computed(() =>
  [...fiveGameStreaks].sort((a, b) => {
    if (a.streak_start !== b.streak_start) return a.streak_start < b.streak_start ? 1 : -1
    return a.team_name.localeCompare(b.team_name)
  })
)
</script>
