<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-swap-horizontal" class="mr-2"></v-icon>
          1992-93 Substitution Timing
        </v-card-title>
        <v-card-subtitle>
          When each club made their substitutions, minute by minute
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Every substitution made by each Premier League club in the 1992-93 season,
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
          <SubTimingChart :data="subTiming" />
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
          1992-93 Golden Boot standings
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
              <tr v-for="row in topScorers" :key="row.rank">
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
  </v-row>
</template>

<script setup>
import { subTiming, topScorers, datasetLd } from '~/composables/useData'

useHead({
  title: '1992-93 Substitution Timing',
  meta: [
    {
      name: 'description',
      content: 'Every substitution made by each Premier League club in the 1992-93 season, charted by the minute it was made from the per-match event feed.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League 1992-93 Substitution Timing Dataset',
        description: 'Every substitution made by each Premier League club in the 1992-93 season, by minute, from the per-match event feed.',
        path: '/season-reviews/1992-93-sample',
        csv: 'sub_timing.csv',
        keywords: ['substitutions', '1992-93', 'Premier League']
      }))
    }
  ]
})

</script>
