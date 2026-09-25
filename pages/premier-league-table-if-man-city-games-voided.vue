<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title tag="h1">
            <v-icon icon="mdi-flask-outline" class="mr-2"></v-icon>
            If Man City Lost Every Game 3-0
          </v-card-title>
          <v-card-subtitle>The 2025-26 final table re-scored with every Manchester City match as a 3-0 defeat</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <v-card>
          <v-card-text>
            <p class="mb-4">
              Manchester City finished 2025-26 in 2nd with 78 points. This is what the final
              table would look like if they had instead lost every game 3-0 — so every
              opponent is awarded a 3-0 win. Δ Pts is the change in each team's points total
              versus the real season (teams that had already beaten City gain nothing, those
              that drew gain two, those that lost gain three). Pos Δ is how many places a
              team moves up or down.
            </p>
            <ManCityVoidedChart :rows="rows" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { manCityVoided } from '~/composables/useSeasonData'
import ManCityVoidedChart from '~/components/ManCityVoidedChart.vue'

const rows = manCityVoided

useHead({
  title: 'Premier League Table If Man City Lost Every Game 3-0',
  meta: [{
    name: 'description',
    content: 'The 2025-26 Premier League final table re-scored as if Manchester City lost every game 3-0, with each team\'s points and position change versus the real season.'
  }]
})
</script>
