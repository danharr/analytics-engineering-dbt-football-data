<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-shield-check" class="mr-2"></v-icon>
          Data Quality
        </v-card-title>
        <v-card-subtitle>{{ quality.length }} seasons processed in the database</v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Seasons · Teams · Matches per Team</v-card-title>
        <v-card-text>
          <QualityChart :data="quality" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Season Summary
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Season</th>
                <th class="text-right">Matches</th>
                <th class="text-right">Avg Matches/Team</th>
                <th class="text-right">Teams</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in quality" :key="row.season_label">
                <td>{{ row.season_label }}</td>
                <td class="text-right">{{ row.matches_played }}</td>
                <td class="text-right">{{ row.avg_matches_per_team.toFixed(1) }}</td>
                <td class="text-right">{{ row.team_count }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.quality" />
    </v-col>
  </v-row>
</template>

<script setup>
import { quality, sqlQueries } from '~/composables/useData'

useHead({
  title: 'Data Quality by Season',
  meta: [
    {
      name: 'description',
      content: 'Season-by-season team counts and matches per team for the Premier League dataset, showing coverage across every season.'
    }
  ]
})
</script>
