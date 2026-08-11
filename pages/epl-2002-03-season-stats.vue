<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-trophy-outline" class="mr-2"></v-icon>
            2002-03 Season
          </v-card-title>
          <v-card-subtitle>Final Premier League table</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <SeasonTableChart :rows="seasonRows" />
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <ChartCode :sql="sqlQueries.seasonTable" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { seasonTable, sqlQueries } from '~/composables/useData'
import SeasonTableChart from '~/components/SeasonTableChart.vue'
import ChartCode from '~/components/ChartCode.vue'
const seasonRows = seasonTable.filter(r => r.season_label === '2002-03')
useHead({
  title: '2002-03 Premier League Final Table & Results',
  meta: [{
    name: 'description',
    content: 'The final 2002-03 Premier League table, with every club\'s record, points and goal difference.'
  }]
})
</script>
