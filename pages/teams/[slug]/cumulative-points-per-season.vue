<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-shield" :color="colour" class="mr-2"></v-icon>
          {{ team.name }} · Points Race by Season
        </v-card-title>
        <v-card-subtitle>
          Every {{ team.name }} Premier League season since 1992 — cumulative points after each matchweek
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            One line per season, from the club's first Premier League campaign through to the
            current one. Most seasons run to 38 matchweeks; the 22-team seasons (1992-93 to
            1994-95) run to 42. Title-winning seasons are drawn thicker with a trophy.
            Hover a line (or a season below) to highlight it.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-line" class="mr-2"></v-icon>
          Cumulative Points per Matchweek
        </v-card-title>
        <v-card-subtitle>
          {{ seasons.length }} seasons · hover a line or a season below to highlight it
        </v-card-subtitle>
        <v-card-text>
          <TeamPointsRaceChart :data="rows" :champions="championSeasons" :colour="colour" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Final Points by Season
        </v-card-title>
        <v-card-subtitle>Final position and points for each completed season</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Season</th>
                <th class="text-right">Matchweeks</th>
                <th class="text-right">Final Position</th>
                <th class="text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in summary" :key="row.label">
                <td>
                  <strong>{{ row.label }}</strong>
                  <span v-if="row.position === 1"> 🏆</span>
                </td>
                <td class="text-right">{{ row.matchweek }}</td>
                <td class="text-right">{{ row.position ? ordinal(row.position) : '—' }}</td>
                <td class="text-right"><strong>{{ row.points }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { seasonPoints, seasonTable, datasetLd } from '~/composables/useData'
import { teamBySlug } from '~/composables/teamPages'
import { teamColour } from '~/composables/teamColours'
import TeamPointsRaceChart from '~/components/TeamPointsRaceChart.vue'

const route = useRoute()
const team = teamBySlug(String(route.params.slug))

if (!team) {
  throw createError({ statusCode: 404, statusMessage: 'Team not found', fatal: true })
}

const colour = teamColour(team.name)

const rows = seasonPoints.filter(r => r.team_name === team.name)

if (!rows.length) {
  throw createError({ statusCode: 404, statusMessage: 'No points data for this team', fatal: true })
}

const seasons = computed(() =>
  [...new Set(rows.map(r => r.season_label))]
    .sort((a, b) => parseInt(a.split('-')[0]) - parseInt(b.split('-')[0]))
)

const isCompleteSeason = label => {
  const seasonRows = rows.filter(r => r.season_label === label)
  const maxMw = Math.max(...seasonRows.map(r => r.matchweek))
  return maxMw >= 38
}

const championSeasons = seasonTable
  .filter(r => r.team_abbr === team.abbr && r.position === 1 && isCompleteSeason(r.season_label))
  .map(r => r.season_label)

const summary = computed(() =>
  seasons.value.map(label => {
    const seasonRows = rows.filter(r => r.season_label === label)
    const last = seasonRows.reduce((a, b) => (b.matchweek > a.matchweek ? b : a))
    const complete = isCompleteSeason(label)
    const position = complete
      ? seasonTable.find(r => r.team_abbr === team.abbr && r.season_label === label)?.position ?? null
      : null
    return { label, matchweek: last.matchweek, position, points: last.points }
  })
)

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

useHead({
  title: `${team.name} Cumulative Points by Season`,
  meta: [
    {
      name: 'description',
      content: `${team.name}'s cumulative Premier League points after each matchweek, charted as one line per season since 1992 with title-winning seasons highlighted.`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: `${team.name} Cumulative Points by Season`,
        description: `Cumulative Premier League points after each matchweek for ${team.name}, one line per season since 1992.`,
        path: `/teams/${team.slug}/cumulative-points-per-season`,
        csv: 'season_points.csv',
        keywords: ['cumulative points', 'points race', 'Premier League', team.name]
      }))
    }
  ]
})
</script>
