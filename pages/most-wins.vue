<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Total Wins by Team</v-card-title>
        <v-card-subtitle>All 34 seasons · most wins at top</v-card-subtitle>
        <v-card-text>
          <p class="mb-4">
            Manchester United are the only club in Premier League history to pass 700 wins,
            sitting on 775, 447 of them at home, the most any team has managed. Arsenal (719)
            and Liverpool (694) make up the chasing pack, with Chelsea (681) just behind.
            Each bar splits a club's record into home and away, so you can see which sides
            built their success at home and which travelled well.
          </p>
          <MostWinsChart :data="sortedWins" />
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { wins, datasetLd } from '~/composables/useData'

useHead({
  title: 'Premier League Teams With the Most Wins',
  meta: [
    {
      name: 'description',
      content: 'All-time total wins by Premier League team, split by home and away, ranked most to least.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Total Wins by Team Dataset',
        description: 'Total Premier League wins for every club since 1992, split by home and away, ranked most to least.',
        path: '/most-wins',
        csv: 'wins.csv',
        keywords: ['wins', 'home and away']
      }))
    }
  ]
})

const sortedWins = computed(() =>
  [...wins].sort((a, b) => b.total_wins - a.total_wins)
)
</script>
