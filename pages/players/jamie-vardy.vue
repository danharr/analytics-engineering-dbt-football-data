<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Jamie Vardy
        </v-card-title>
        <v-card-subtitle>
          Premier League goals: all-time totals, half-by-half split and season-by-season race
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Jamie Vardy is a two-time Premier League Golden Boot winner, taking the award in
            2015-16 and 2019-20, and across every season in the data has scored 83 Premier
            League goals, 17 of them penalties. Each line tracks his running goal total as the
            season unfolds — every goal he scored by each matchweek, from the 23 that won him
            the 2019-20 Golden Boot, through 15 in 2020-21, 15 in 2021-22, 3 in 2022-23 and
            the 9 of 2024-25 after Leicester City's promotion back to the top flight (the 18
            he scored in 2018-19 are included in the headline totals but not charted). The
            2023-24 season is omitted as Leicester spent it in the Championship. Generated
            from the per-match event feed rather than aggregate results.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="6" md="3">
              <StatCircle :value="summary.total_goals" label="Total Goals" />
            </v-col>
            <v-col cols="6" md="3">
              <StatCircle :value="summary.penalties" label="Penalties Scored" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-donut" class="mr-2"></v-icon>
          Goals by Half
        </v-card-title>
        <v-card-subtitle>
          First half vs second half · all seasons
        </v-card-subtitle>
        <v-card-text>
          <PlayerGoalDonut :summary="summary" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          Top Opposition Clubs
        </v-card-title>
        <v-card-subtitle>
          The five clubs he has scored most against · all seasons
        </v-card-subtitle>
        <v-card-text>
          <PlayerOpponentTable :data="opponents" />
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
import { playerGoals, playerGoalSummary, playerOpponentGoals } from '~/composables/usePlayerData'
import { datasetLd } from '~/composables/useChartHelpers'
import PlayerGoalRaceChart from '~/components/PlayerGoalRaceChart.vue'
import PlayerGoalDonut from '~/components/PlayerGoalDonut.vue'
import PlayerOpponentTable from '~/components/PlayerOpponentTable.vue'
import StatCircle from '~/components/StatCircle.vue'

const vardyRows = computed(() => playerGoals.filter(r => r.player_name === 'Jamie Vardy'))

const summary = computed(() => playerGoalSummary.find(r => r.player_name === 'Jamie Vardy')
  ?? { total_goals: 0, penalties: 0, first_half: 0, second_half: 0 })

const opponents = computed(() => playerOpponentGoals.filter(r => r.player_name === 'Jamie Vardy'))

useHead({
  title: 'Jamie Vardy Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Jamie Vardy\'s cumulative Premier League goals by matchweek across 2019-20, 2020-21, 2021-22, 2022-23 and 2024-25 at Leicester City.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Jamie Vardy Cumulative Premier League Goals Dataset',
        description: 'Jamie Vardy\'s cumulative Premier League goals by matchweek for the 2019-20, 2020-21, 2021-22, 2022-23 and 2024-25 seasons, from the per-match event feed.',
        path: '/players/jamie-vardy',
        csv: 'player_goals.csv',
        keywords: ['Jamie Vardy', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
