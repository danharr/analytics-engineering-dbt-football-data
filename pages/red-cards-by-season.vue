<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-trending-up" class="mr-2"></v-icon>
          Red Cards by Season
        </v-card-title>
        <v-card-subtitle>
          Total red cards across all teams in every season since 1992-93
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            <strong>2014-15 was the dirtiest season on record</strong>, with 71 red cards
            shown across the campaign. But the story is as much about the data as the
            football: red cards are only recorded in the league's source data from
            <strong>2006-07 onwards</strong>. Every earlier season shows zero (a couple of
            stray cards excepted), so the pre-2006-07 bars below are a data gap, not a
            sign that referees kept their cards in their pockets.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-bar" class="mr-2"></v-icon>
          Total Red Cards by Season
        </v-card-title>
        <v-card-subtitle>
          Red bars are recorded red cards · grey bars are seasons before red cards were tracked
        </v-card-subtitle>
        <v-card-text>
          <RedCardsBySeasonChart :data="redCardsBySeason" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Every Season
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Season</th>
                <th class="text-right">Matches</th>
                <th class="text-right">Home reds</th>
                <th class="text-right">Away reds</th>
                <th class="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in rows"
                :key="row.season_label"
                :class="{ 'gap-row': !row.recorded }"
              >
                <td><strong>{{ row.season_label }}</strong></td>
                <td class="text-right">{{ fmt(row.matches) }}</td>
                <td class="text-right">{{ row.recorded ? fmt(row.home_red_cards) : '—' }}</td>
                <td class="text-right">{{ row.recorded ? fmt(row.away_red_cards) : '—' }}</td>
                <td class="text-right">{{ row.recorded ? fmt(row.red_cards) : '—' }}</td>
              </tr>
            </tbody>
          </v-table>
          <p class="text-body-2 text-grey-darken-1 mt-3 mb-0">
            Red cards are only recorded in the league's data from 2006-07 onwards, so earlier
            seasons show a dash. The 2026-27 season is in progress.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { computed } from 'vue'
import { redCardsBySeason, datasetLd } from '~/composables/useData'
import RedCardsBySeasonChart from '~/components/RedCardsBySeasonChart.vue'

useHead({
  title: 'Red Cards by Season',
  meta: [
    {
      name: 'description',
      content: 'Total red cards in every Premier League season since 1992-93, across all teams, with a note on the seasons before red cards were recorded in the source data.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Red Cards by Season Dataset',
        description: 'Total red cards (home and away combined) in every Premier League season since 1992-93. Red cards are only recorded from 2006-07 onwards.',
        path: '/red-cards-by-season',
        csv: 'red_cards_by_season.csv',
        keywords: ['red cards', 'discipline', 'by season']
      }))
    }
  ]
})

const RED_START = '2006-07'

const rows = computed(() =>
  [...redCardsBySeason]
    .sort((a, b) => a.season_label.localeCompare(b.season_label))
    .map(r => ({ ...r, recorded: r.season_label >= RED_START }))
)

const fmt = n => d3.format(',')(n || 0)
</script>

<style scoped>
.gap-row {
  color: #9e9e9e;
}
</style>
