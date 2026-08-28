<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-swap-horizontal" class="mr-2"></v-icon>
          2025-26 Substitution Timing
        </v-card-title>
        <v-card-subtitle>
          When each club made their substitutions, minute by minute
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Every substitution made by each Premier League club in the 2025-26 season,
            shown as a heat map: one row per club, 90 one-minute squares running left to
            right, shaded from white (no changes) to red (the most changes in that minute).
            The half-time mark is shown as a vertical line at 45'. Generated from the
            per-match event feed (goals, cards and substitutions) rather than the aggregate
            match results.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Substitutions by Team and Minute</v-card-title>
        <v-card-subtitle>
          Each row is a club · each square is one minute, shaded by how many subs were made
        </v-card-subtitle>
        <v-card-text>
          <SubTimingChart :data="subTiming2025_26" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Yellow Cards by Team and Minute</v-card-title>
        <v-card-subtitle>
          Each row is a club · each square is one minute, shaded by how many yellows were shown
        </v-card-subtitle>
        <v-card-text>
          <MinuteHeatmapChart :data="yellows" color="#f9a825" item-label="yellow card" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Red Cards by Team and Minute</v-card-title>
        <v-card-subtitle>
          Straight reds and second yellows, by the minute they were shown
        </v-card-subtitle>
        <v-card-text>
          <MinuteHeatmapChart :data="reds" color="#c62828" item-label="red card" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" offset-md="3">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-soccer" class="mr-2"></v-icon>
          Top 5 Scorers
        </v-card-title>
        <v-card-subtitle>
          2025-26 Golden Boot standings
        </v-card-subtitle>
        <v-card-text>
          <v-table density="comfortable">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Player</th>
                <th class="text-left">Club</th>
                <th class="text-right">Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in topScorers2025_26" :key="row.rank">
                <td>{{ row.rank }}</td>
                <td><strong>{{ row.player_name }}</strong></td>
                <td>{{ row.team }}</td>
                <td class="text-right">{{ row.goals }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" offset-md="3">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-account-multiple" class="mr-2"></v-icon>
          Top 5 Partnerships
        </v-card-title>
        <v-card-subtitle>
          2025-26 most productive assist-scorer pairings
        </v-card-subtitle>
        <v-card-text>
          <v-table density="comfortable">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Player</th>
                <th class="text-left">Player</th>
                <th class="text-left">Club</th>
                <th class="text-right">Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in partnerships2025_26" :key="row.rank">
                <td>{{ row.rank }}</td>
                <td><strong>{{ row.player_1_name }}</strong></td>
                <td><strong>{{ row.player_2_name }}</strong></td>
                <td>{{ row.team }}</td>
                <td class="text-right">{{ row.goals }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { subTiming2025_26, topScorers2025_26, partnerships2025_26, yellowCards, redCards, datasetLd } from '~/composables/useData'

const yellows = yellowCards.filter(r => r.season_label === '2025-26')
const reds = redCards.filter(r => r.season_label === '2025-26')

useHead({
  title: '2025-26 Substitution Timing',
  meta: [
    {
      name: 'description',
      content: 'Every substitution made by each Premier League club in the 2025-26 season, charted by the minute it was made from the per-match event feed.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League 2025-26 Substitution Timing Dataset',
        description: 'Every substitution made by each Premier League club in the 2025-26 season, by minute, from the per-match event feed.',
        path: '/season-reviews/2025-26',
        csv: 'sub_timing_2025_26.csv',
        keywords: ['substitutions', '2025-26', 'Premier League']
      }))
    }
  ]
})

</script>
