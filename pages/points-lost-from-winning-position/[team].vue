<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-trending-down" class="mr-2"></v-icon>
          Points Lost From Winning Positions
        </v-card-title>
        <v-card-subtitle>
          <v-icon icon="mdi-shield" :color="teamColour(team.name)" size="small" class="mr-1"></v-icon>
          {{ team.name }} · 2025-26 Premier League
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Every Premier League game in 2025-26 where {{ team.name }} held a lead at some
            point but failed to win. A draw costs two points and a defeat costs three, so the
            total below is the number of points thrown away from positions of advantage.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Games where points were lost
        </v-card-title>
        <v-card-text>
          <v-table v-if="rows.length" density="compact">
            <thead>
              <tr>
                <th class="text-left">Date</th>
                <th class="text-left">Opponent</th>
                <th class="text-center">Venue</th>
                <th class="text-center">Score</th>
                <th class="text-center">Led by</th>
                <th class="text-center">Result</th>
                <th class="text-right">Points lost</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in rows" :key="r.kickoff_date + r.opponent">
                <td>{{ formatDate(r.kickoff_date) }}</td>
                <td><strong>{{ r.opponent }}</strong></td>
                <td class="text-center">{{ r.venue === 'home' ? 'Home' : 'Away' }}</td>
                <td class="text-center">{{ r.score }}</td>
                <td class="text-center">{{ r.led_by }}</td>
                <td class="text-center">{{ r.result === 'draw' ? 'Draw' : 'Loss' }}</td>
                <td class="text-right">{{ r.points_lost }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="6" class="text-right"><strong>Total points lost</strong></td>
                <td class="text-right"><strong>{{ totalPointsLost }}</strong></td>
              </tr>
            </tfoot>
          </v-table>
          <p v-else class="mb-0">
            {{ team.name }} never dropped points from a winning position in 2025-26 —
            every game they led, they saw out.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pointsLostFromWinning, datasetLd } from '~/composables/useData'
import { seasonTeamBySlug } from '~/utils/seasonTeams'
import { teamColour } from '~/composables/teamColours'

const route = useRoute()
const team = seasonTeamBySlug(route.params.team)

if (!team) {
  throw createError({ statusCode: 404, statusMessage: 'Team not found', fatal: true })
}

useHead({
  title: `${team.name} Points Lost From Winning Positions`,
  meta: [
    {
      name: 'description',
      content: `Every 2025-26 Premier League game where ${team.name} led but failed to win, with the points thrown away from each winning position and the season total.`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: `${team.name} Points Lost From Winning Positions (2025-26)`,
        description: `Every 2025-26 Premier League game where ${team.name} held a lead but failed to win, reconstructed from per-minute goal data. A draw loses two points, a defeat loses three.`,
        path: `/points-lost-from-winning-position/${team.slug}`,
        csv: 'points_lost_from_winning.csv',
        keywords: ['points lost', 'winning positions', team.name, '2025-26']
      }))
    }
  ]
})

const rows = pointsLostFromWinning
  .filter(r => r.team_name === team.name)
  .sort((a, b) => a.kickoff_date.localeCompare(b.kickoff_date))

const totalPointsLost = computed(() => rows.reduce((acc, r) => acc + r.points_lost, 0))

function formatDate(iso) {
  const [y, m, d] = iso.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${Number(d)} ${months[Number(m) - 1]} ${y}`
}
</script>
