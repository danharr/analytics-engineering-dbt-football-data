<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-swap-horizontal" class="mr-2"></v-icon>
          {{ season }} Season Summary In Charts
        </v-card-title>
        <v-card-subtitle>
          Substitutions, yellow &amp; red cards, top scorers and partnerships, chart by chart
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            The {{ season }} season in charts. Substitutions, yellow cards and red cards are
            shown as heat maps: one row per club, 90 one-minute squares running left to
            right, shaded from white (no events) to the deepest colour (the most events in
            that minute), with the half-time mark as a vertical line at 45'. The season's
            top five scorers and most productive assist-scorer partnerships follow.
            Generated from the per-match event feed (goals, cards and substitutions)
            rather than the aggregate match results.
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
          <p class="font-weight-medium mb-3">{{ subSummary }}</p>
          <SubTimingChart :data="subTiming" />
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
          <p class="font-weight-medium mb-3">{{ yellowSummary }}</p>
          <MinuteHeatmapChart :data="yellows" color="#fdd835" item-label="yellow card" />
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
          <p class="font-weight-medium mb-3">{{ redSummary }}</p>
          <MinuteHeatmapChart :data="reds" color="#e53935" item-label="red card" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" offset-md="3">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-soccer" class="mr-2"></v-icon>
          Top 5 Scorers
        </v-card-title>
        <v-card-subtitle>{{ season }} Golden Boot standings</v-card-subtitle>
        <v-card-text>
          <p class="font-weight-medium mb-3">{{ scorerSummary }}</p>
          <v-table density="comfortable">
            <thead><tr><th class="text-left">#</th><th class="text-left">Player</th><th class="text-left">Club</th><th class="text-right">Goals</th></tr></thead>
            <tbody>
              <tr v-for="row in topScorers" :key="row.rank">
                <td>{{ row.rank }}</td><td><strong>{{ row.player_name }}</strong></td><td>{{ row.team }}</td><td class="text-right">{{ row.goals }}</td>
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
        <v-card-subtitle>{{ season }} most productive assist-scorer pairings</v-card-subtitle>
        <v-card-text>
          <p class="font-weight-medium mb-3">{{ partnershipSummary }}</p>
          <v-table density="comfortable">
            <thead><tr><th class="text-left">#</th><th class="text-left">Player</th><th class="text-left">Player</th><th class="text-left">Club</th><th class="text-right">Goals</th></tr></thead>
            <tbody>
              <tr v-for="row in partnerships" :key="row.rank">
                <td>{{ row.rank }}</td><td><strong>{{ row.player_1_name }}</strong></td><td><strong>{{ row.player_2_name }}</strong></td><td>{{ row.team }}</td><td class="text-right">{{ row.goals }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { joinNames, mostAndFewest, fewestSummary, datasetLd } from '~/composables/useChartHelpers'

const props = defineProps({
  season: { type: String, required: true },
  subTiming: { type: Array, required: true },
  topScorers: { type: Array, required: true },
  partnerships: { type: Array, required: true },
  yellowCards: { type: Array, required: true },
  redCards: { type: Array, required: true }
})

const yellows = props.yellowCards.filter(r => r.season_label === props.season)
const reds = props.redCards.filter(r => r.season_label === props.season)
const teams = [...new Set(props.subTiming.map(r => r.team_name))]

const subSummary = (() => {
  const { most } = mostAndFewest(props.subTiming, teams)
  return `${joinNames(most.names)} made the most substitutions (${most.n}).`
})()

const yellowSummary = (() => {
  const { most } = mostAndFewest(yellows, teams)
  return `${joinNames(most.names)} picked up the most yellow cards (${most.n}).`
})()

const redSummary = (() => {
  const { most, fewest } = mostAndFewest(reds, teams)
  return `${joinNames(most.names)} had the most red cards (${most.n}) whilst ${fewestSummary(fewest)}.`
})()

const scorerSummary = `${props.topScorers[0].player_name} won the Golden Boot with ${props.topScorers[0].goals} goals.`
const bestPair = props.partnerships[0]
const partnershipSummary = `The best partnership was ${bestPair.player_1_name} and ${bestPair.player_2_name} of ${bestPair.team} (${bestPair.goals} goals).`

useHead({
  title: `${props.season} Season Summary In Charts`,
  meta: [{
    name: 'description',
    content: `The ${props.season} Premier League season in charts: substitution, yellow card and red card timing heat maps plus the season's top five scorers and assist-scorer partnerships, generated from the per-match event feed.`
  }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify(datasetLd({
      name: `Premier League ${props.season} Season Summary Dataset`,
      description: `The ${props.season} Premier League season in charts: substitutions, yellow and red cards by minute, plus the top five scorers and assist-scorer partnerships, from the per-match event feed.`,
      path: `/season-reviews/${props.season}`,
      csv: `sub_timing_${props.season.replace('-', '_')}.csv`,
      keywords: ['substitutions', props.season, 'Premier League']
    }))
  }]
})
</script>
