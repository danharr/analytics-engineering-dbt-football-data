<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-soccer" class="mr-2"></v-icon>
          2025-26 Player Goals
        </v-card-title>
        <v-card-subtitle>
          <v-icon icon="mdi-shield" :color="colour" size="small" class="mr-1"></v-icon>
          {{ team.name }} · 2025-26 season
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Every {{ team.name }} player who scored in 2025-26, ordered by goals. Use the
            checkboxes to focus on a single competition. {{ totalGoals }} goals in total, from
            {{ players.length }} different scorers.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-filter-outline" class="mr-2"></v-icon>
          Competition
        </v-card-title>
        <v-card-text>
          <div class="d-flex flex-wrap">
            <v-checkbox
              v-for="c in competitions"
              :key="c"
              v-model="selected"
              :value="c"
              :label="c"
              density="compact"
              hide-details
              class="mr-4 mb-1"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-bar" class="mr-2"></v-icon>
          Goals by player
        </v-card-title>
        <v-card-subtitle>Horizontal bars to scale · own goals shown as "Own Goal"</v-card-subtitle>
        <v-card-text>
          <TeamGoalsByPlayerChart v-if="players.length" :data="players" :color="colour" />
          <p v-else class="mb-0">Select at least one competition above to see the goals.</p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Top scorers
        </v-card-title>
        <v-card-text>
          <v-table v-if="players.length" density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Player</th>
                <th class="text-right">Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, i) in players" :key="p.player_name">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ p.player_name }}</strong></td>
                <td class="text-right">{{ p.goals }}</td>
              </tr>
            </tbody>
          </v-table>
          <p v-else class="mb-0">Select at least one competition above to see the scorers.</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { teamGoalsByPlayer, datasetLd } from '~/composables/useData'
import { seasonTeamBySlug } from '~/utils/seasonTeams'
import { teamColour } from '~/composables/teamColours'

const route = useRoute()
const team = seasonTeamBySlug(route.params.slug)

if (!team) {
  throw createError({ statusCode: 404, statusMessage: 'No 2025-26 player data for this team', fatal: true })
}

useHead({
  title: `${team.name} 2025-26 Player Goals`,
  meta: [
    {
      name: 'description',
      content: `Every ${team.name} player who scored in the 2025-26 season, ranked by goals in a horizontal bar chart and filterable by competition.`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: `${team.name} 2025-26 Player Goals`,
        description: `Goals scored by each ${team.name} player in the 2025-26 season across all competitions.`,
        path: `/teams/${team.slug}/2025-26`,
        csv: 'team_goals_by_player.csv',
        keywords: ['player goals', 'top scorers', team.name, '2025-26']
      }))
    }
  ]
})

const colour = teamColour(team.name)

const COMPETITION_ORDER = [
  'Premier League',
  'FA Cup',
  'League Cup',
  'Champions League',
  'Europa League',
  'Conference League',
  'Community Shield',
  'Club Friendlies',
  'Other'
]

const teamRows = teamGoalsByPlayer.filter(r => r.team_name === team.name)

const competitions = [...new Set(teamRows.map(r => r.competition))]
  .sort((a, b) => {
    const ia = COMPETITION_ORDER.indexOf(a)
    const ib = COMPETITION_ORDER.indexOf(b)
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib)
  })

const selected = ref([...competitions])

const players = computed(() => {
  const sel = new Set(selected.value)
  const byPlayer = new Map()
  for (const r of teamRows) {
    if (!sel.has(r.competition)) continue
    const cur = byPlayer.get(r.player_name) || { player_name: r.player_name, goals: 0 }
    cur.goals += r.goals
    byPlayer.set(r.player_name, cur)
  }
  return [...byPlayer.values()].sort((a, b) => b.goals - a.goals || a.player_name.localeCompare(b.player_name))
})

const totalGoals = computed(() => players.value.reduce((acc, p) => acc + p.goals, 0))
</script>
