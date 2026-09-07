<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Jamie Vardy
        </v-card-title>
        <v-card-subtitle>
          Cumulative Premier League goals by matchweek, season by season
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Jamie Vardy is a two-time Premier League Golden Boot winner, taking the award
            in 2015-16 and 2019-20. Each line tracks his running goal total as the season
            unfolds — every goal he scored by each matchweek, from 3 in 2022-23 through the
            9 of 2024-25 after Leicester City's promotion back to the top flight. The
            2023-24 season is omitted as Leicester spent it in the Championship. Generated
            from the per-match event feed rather than aggregate results.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-line" class="mr-2"></v-icon>
          Goals by Matchweek
        </v-card-title>
        <v-card-subtitle>
          Cumulative league goals · one line per season
        </v-card-subtitle>
        <v-card-text>
          <PlayerGoalRaceChart :data="vardyRows" />
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { playerGoals, datasetLd } from '~/composables/useData'
import PlayerGoalRaceChart from '~/components/PlayerGoalRaceChart.vue'

const vardyRows = computed(() => playerGoals.filter(r => r.player_name === 'Jamie Vardy'))

useHead({
  title: 'Jamie Vardy Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Jamie Vardy\'s cumulative Premier League goals by matchweek across 2022-23 and 2024-25 at Leicester City.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Jamie Vardy Cumulative Premier League Goals Dataset',
        description: 'Jamie Vardy\'s cumulative Premier League goals by matchweek for the 2022-23 and 2024-25 seasons, from the per-match event feed.',
        path: '/players/jamie-vardy',
        csv: 'player_goals.csv',
        keywords: ['Jamie Vardy', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
