<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-trophy-outline" class="mr-2"></v-icon>
            {{ label }} Season
          </v-card-title>
          <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <SeasonTableChart :rows="seasonRows" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { seasonTable } from '~/composables/useData'
import SeasonTableChart from '~/components/SeasonTableChart.vue'

const SEASON_NOTES = {
  '1992-93': 'Final Premier League table · the inaugural season',
  '1993-94': 'Final Premier League table · Manchester United retain the title'
}

const route = useRoute()
const label = String(route.params.slug)

const seasonRows = seasonTable.filter(r => r.season_label === label)

if (!seasonRows.length) {
  throw createError({ statusCode: 404, statusMessage: 'Season not found', fatal: true })
}

const subtitle = SEASON_NOTES[label] ?? 'Final Premier League table'

useHead({
  title: `${label} Premier League Final Table & Results`,
  meta: [{
    name: 'description',
    content: `The final ${label} Premier League table, with every club's record, points and goal difference.`
  }]
})
</script>
