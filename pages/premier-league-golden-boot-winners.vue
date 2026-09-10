<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-shoe-cleat" class="mr-2"></v-icon>
          Premier League Golden Boot Winners
        </v-card-title>
        <v-card-subtitle>
          Every Golden Boot winner since 1992, from the per-match event feed
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            The Golden Boot goes to the season's top scorer. This page works out the
            winner of each season directly from the per-match event feed (every goal,
            card and substitution), rather than a pre-baked list, so it updates as more
            seasons are added. Each line below tracks a winner's cumulative goal total
            as the season unfolds, followed by the winners' table and how many Golden
            Boots each player has won.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-line" class="mr-2"></v-icon>
          Cumulative Goals by Matchweek
        </v-card-title>
        <v-card-subtitle>
          One line per winner-season · shared titles shown separately
        </v-card-subtitle>
        <v-card-text>
          <GoldenBootRaceChart :data="goldenBoots" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          Golden Boot Winners
        </v-card-title>
        <v-card-subtitle>
          Player, club and goals for every winner, newest season first
        </v-card-subtitle>
        <v-card-text>
          <v-table density="comfortable">
            <thead>
              <tr>
                <th class="text-left">Player</th>
                <th class="text-left">Club</th>
                <th class="text-left">Season</th>
                <th class="text-right">Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in winnerRows" :key="row.player_name + row.season_label">
                <td><strong>{{ row.player_name }}</strong></td>
                <td>{{ row.team }}</td>
                <td>{{ row.season_label }}</td>
                <td class="text-right">{{ row.goals }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
          Golden Boots Won
        </v-card-title>
        <v-card-subtitle>
          Number of Golden Boots per player across the seasons in the data
        </v-card-subtitle>
        <v-card-text>
          <GoldenBootCountChart :data="bootCounts" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-information-outline" class="mr-2"></v-icon>
          Data Coverage
        </v-card-title>
        <v-card-subtitle>
          Which seasons feed this analysis
        </v-card-subtitle>
        <v-card-text>
          <p class="mb-0">
            The per-match event feed currently covers
            <strong>{{ coveredSeasons.length }} seasons</strong>:
            {{ joinNames(coveredSeasons) }}. The Golden Boots above are drawn only from
            these seasons. The remaining seasons (1993-94 to 1998-99, and 2000-01 to
            2018-19) have not yet been scraped, so their winners are missing — the list
            will grow as each season's event data is added.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { goldenBoots, joinNames, datasetLd } from '~/composables/useData'
import GoldenBootRaceChart from '~/components/GoldenBootRaceChart.vue'
import GoldenBootCountChart from '~/components/GoldenBootCountChart.vue'

const winnerRows = computed(() => {
  const map = new Map()
  for (const r of goldenBoots) {
    const key = `${r.player_name}|${r.season_label}`
    const cur = map.get(key)
    if (!cur || r.match_week > cur.match_week) {
      map.set(key, {
        player_name: r.player_name,
        season_label: r.season_label,
        team: r.team,
        goals: r.cumulative_goals,
        match_week: r.match_week
      })
    }
  }
  return [...map.values()].sort((a, b) => {
    const sa = parseInt(a.season_label.split('-')[0])
    const sb = parseInt(b.season_label.split('-')[0])
    return sb - sa || a.player_name.localeCompare(b.player_name)
  })
})

const bootCounts = computed(() => {
  const map = new Map()
  for (const r of winnerRows.value) {
    map.set(r.player_name, (map.get(r.player_name) || 0) + 1)
  }
  return [...map.entries()].map(([player_name, boots]) => ({ player_name, boots }))
})

const coveredSeasons = computed(() =>
  [...new Set(goldenBoots.map(r => r.season_label))].sort(
    (a, b) => parseInt(a.split('-')[0]) - parseInt(b.split('-')[0])
  )
)

useHead({
  title: 'Premier League Golden Boot Winners',
  meta: [
    {
      name: 'description',
      content: 'Every Premier League Golden Boot winner since 1992, with cumulative goals by matchweek, computed from the per-match event feed.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Golden Boot Winners Dataset',
        description: 'Golden Boot winners per season (top scorer, ties shared) with cumulative goals by matchweek and club, computed from the per-match event feed.',
        path: '/premier-league-golden-boot-winners',
        csv: 'golden_boots.csv',
        keywords: ['Golden Boot', 'top scorer', 'goals by matchweek']
      }))
    }
  ]
})
</script>
