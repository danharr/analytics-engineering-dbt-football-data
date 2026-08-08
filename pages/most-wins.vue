<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Total Wins by Team</v-card-title>
        <v-card-subtitle>All 33 seasons · most wins at top</v-card-subtitle>
        <v-card-text>
          <MostWinsChart :data="sortedWins" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.wins" />
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { wins, sqlQueries } from '~/composables/useData'

useHead({
  title: 'Most Wins by Team',
  meta: [
    {
      name: 'description',
      content: 'All-time total wins by Premier League team, split by home and away, ranked most to least.'
    }
  ]
})

const sortedWins = computed(() =>
  [...wins].sort((a, b) => b.total_wins - a.total_wins)
)
</script>
