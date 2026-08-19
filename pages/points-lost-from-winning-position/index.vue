<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-trending-down" class="mr-2"></v-icon>
          Points Lost From Winning Positions
        </v-card-title>
        <v-card-subtitle>
          All 20 Premier League clubs · 2025-26
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            The number of points each club threw away from positions of advantage in 2025-26.
            A game counts when a team led at some point but failed to win: a draw costs two
            points and a defeat costs three. Click a team to see the individual games.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          League table of points thrown away
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-right">Games</th>
                <th class="text-right">Points lost</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(t, i) in rows" :key="t.slug">
                <td>{{ i + 1 }}</td>
                <td>
                  <NuxtLink :to="`/points-lost-from-winning-position/${t.slug}`">
                    <v-icon icon="mdi-shield" :color="teamColour(t.name)" size="small" class="mr-2"></v-icon>
                    <strong>{{ t.name }}</strong>
                  </NuxtLink>
                </td>
                <td class="text-right">{{ t.games }}</td>
                <td class="text-right"><strong>{{ t.pointsLost }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { pointsLostFromWinning, datasetLd } from '~/composables/useData'
import { SEASON_TEAMS } from '~/utils/seasonTeams'
import { teamColour } from '~/composables/teamColours'

useHead({
  title: 'Points Lost From Winning Positions',
  meta: [
    {
      name: 'description',
      content: 'Every 2025-26 Premier League club ranked by the points they threw away from winning positions, with a page per club listing each game where a lead was lost.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Points Lost From Winning Positions (2025-26)',
        description: 'Every 2025-26 Premier League club ranked by the points thrown away from winning positions, reconstructed from per-minute goal data. A draw loses two points, a defeat loses three.',
        path: '/points-lost-from-winning-position',
        csv: 'points_lost_from_winning.csv',
        keywords: ['points lost', 'winning positions', 'Premier League', '2025-26']
      }))
    }
  ]
})

const rows = SEASON_TEAMS.map(t => {
  const games = pointsLostFromWinning.filter(r => r.team_name === t.name)
  return {
    slug: t.slug,
    name: t.name,
    games: games.length,
    pointsLost: games.reduce((acc, r) => acc + r.points_lost, 0)
  }
}).sort((a, b) =>
  b.pointsLost - a.pointsLost ||
  b.games - a.games ||
  a.name.localeCompare(b.name)
)
</script>
