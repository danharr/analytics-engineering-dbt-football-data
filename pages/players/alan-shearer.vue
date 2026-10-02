<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title tag="h1">
          <v-icon icon="mdi-account-star" class="mr-2"></v-icon>
          Alan Shearer
        </v-card-title>
        <v-card-subtitle>
          Premier League goals: all-time totals, half-by-half split and season-by-season race
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Alan Shearer is the Premier League's all-time record goalscorer (260 goals) and a
            three-time Golden Boot winner, in 1994-95, 1995-96 and 1996-97. Across the seasons
            covered by the event feed he scored 160 Premier League goals for Blackburn Rovers
            and Newcastle United, 27 from the penalty spot. The chart below tracks his running
            goal total by matchweek across those seasons. Generated from the per-match event
            feed rather than aggregate results.
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
          <PlayerGoalRaceChart :data="shearerRows" />
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

const shearerRows = computed(() => playerGoals.filter(r => r.player_name === 'Alan Shearer'))

const summary = computed(() => playerGoalSummary.find(r => r.player_name === 'Alan Shearer')
  ?? { total_goals: 0, penalties: 0, first_half: 0, second_half: 0 })

const opponents = computed(() => playerOpponentGoals.filter(r => r.player_name === 'Alan Shearer'))

useHead({
  title: 'Alan Shearer Goals by Matchweek',
  meta: [
    {
      name: 'description',
      content: 'Alan Shearer\'s Premier League goals: all-time totals, first-half vs second-half split and cumulative goals by matchweek across 1992-93 to 1996-97 and 1999-00 at Blackburn Rovers and Newcastle United.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Alan Shearer Premier League Goals Dataset',
        description: 'Alan Shearer\'s Premier League goals: all-time totals, penalties, first-half vs second-half split, top opposition clubs and cumulative goals by matchweek, from the per-match event feed.',
        path: '/players/alan-shearer',
        csv: 'player_goals.csv',
        keywords: ['Alan Shearer', 'goals by matchweek', 'Golden Boot']
      }))
    }
  ]
})
</script>
