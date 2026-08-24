<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-cards-outline" class="mr-2"></v-icon>
          Which Premier League fixture has the most red cards?
        </v-card-title>
        <v-card-subtitle>All 34 seasons · home vs away treated as a distinct fixture</v-card-subtitle>
        <v-card-text>
          <p class="mb-4">
            Fixtures between rivals are where tempers run highest. This page sums the red cards
            in every Premier League meeting between each pair of clubs since 1992-93. Home and
            away ties are counted separately, so Arsenal vs Liverpool is a different fixture to
            Liverpool vs Arsenal. The bar chart shows the top five, and the table below breaks
            each fixture's total down by season.
          </p>
          <FixtureRedCardsChart :data="topFixtures" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          Red cards by season
        </v-card-title>
        <v-card-subtitle>Expand a fixture to see the season-by-season breakdown</v-card-subtitle>
        <v-card-text>
          <v-data-table
            :group-by="groupBy"
            :headers="headers"
            :items="tableRows"
            :items-per-page="-1"
            item-value="id"
            hide-default-footer
          >
            <template #group-header="{ item, columns, isGroupOpen, toggleGroup }">
              <tr class="v-data-table-group-header-row" :style="{ '--v-data-table-group-header-row-depth': item.depth }">
                <td class="v-data-table__td v-data-table-group-header-row__column" :colspan="columns.length">
                  <v-btn
                    size="small"
                    variant="text"
                    :icon="isGroupOpen(item) ? 'mdi-chevron-down' : 'mdi-chevron-right'"
                    @click="toggleGroup(item)"
                  ></v-btn>
                  <span>{{ item.value }}</span>
                  <span class="font-weight-bold text-red">{{ ' (' + groupRedCards(item) + ')' }}</span>
                </td>
              </tr>
            </template>
            <template #group-summary="{ item, columns }">
              <tr class="font-weight-bold">
                <td
                  v-for="c in columns"
                  :key="c.key"
                  :class="['v-data-table__td', c.align ? `v-data-table-column--align-${c.align}` : '']"
                >
                  <span v-if="c.key === 'fixture'">Total</span>
                  <span v-else-if="c.key === 'matches'">{{ item.items.reduce((sum, n) => sum + n.raw.matches, 0) }}</span>
                  <span v-else-if="c.key === 'red_cards'">{{ item.items.reduce((sum, n) => sum + n.raw.red_cards, 0) }}</span>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { fixtureRedCards, datasetLd } from '~/composables/useData'
import FixtureRedCardsChart from '~/components/FixtureRedCardsChart.vue'

useHead({
  title: 'Which Premier League Fixture Has the Most Red Cards?',
  meta: [
    {
      name: 'description',
      content: 'The Premier League fixtures with the most red cards since 1992-93, treating home and away as distinct fixtures, with a season-by-season breakdown.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Fixtures with the Most Red Cards',
        description: 'Top five Premier League fixtures by total red cards (home vs away treated as distinct), broken down by season.',
        path: '/fixture-red-cards',
        csv: 'fixture_red_cards.csv',
        keywords: ['red cards', 'fixtures', 'rivalries']
      }))
    }
  ]
})

const groupBy = [{ key: 'fixture', order: false }]

function groupRedCards(group) {
  return group.items.reduce((sum, n) => sum + (n.raw?.red_cards ?? 0), 0)
}

const headers = [
  { title: 'Fixture', key: 'fixture', sortable: false },
  { title: 'Season', key: 'season_label', sortable: false },
  { title: 'Matches', key: 'matches', align: 'end', sortable: false },
  { title: 'Red Cards', key: 'red_cards', align: 'end', sortable: false }
]

const fixtureTotals = computed(() => {
  const map = new Map()
  for (const r of fixtureRedCards) {
    const key = `${r.home_team_name}|${r.away_team_name}`
    if (!map.has(key)) {
      map.set(key, {
        label: `${r.home_team_abbr} vs ${r.away_team_abbr}`,
        name: `${r.home_team_name} vs ${r.away_team_name}`,
        value: r.total_red_cards,
        matches: 0
      })
    }
    map.get(key).matches += r.matches
  }
  return [...map.values()].sort((a, b) => b.value - a.value)
})

const topFixtures = computed(() => fixtureTotals.value.slice(0, 5))

const tableRows = computed(() =>
  [...fixtureRedCards]
    .sort((a, b) =>
      b.total_red_cards - a.total_red_cards ||
      a.home_team_name.localeCompare(b.home_team_name) ||
      a.season_label.localeCompare(b.season_label)
    )
    .map(r => ({
      id: `${r.home_team_abbr}-vs-${r.away_team_abbr}-${r.season_label}`,
      fixture: `${r.home_team_name} vs ${r.away_team_name}`,
      season_label: r.season_label,
      matches: r.matches,
      red_cards: r.red_cards,
      total_red_cards: r.total_red_cards
    }))
)
</script>
