<template>
  <v-card>
    <v-card-title>
      <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
      2025-26 Table · If Man City Lost Every Game 3-0
    </v-card-title>
    <v-card-subtitle>Ranked by points, then goal difference, then goals scored</v-card-subtitle>
    <v-card-text>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">Pos</th>
            <th class="text-left">Team</th>
            <th class="text-right">P</th>
            <th class="text-right">W</th>
            <th class="text-right">D</th>
            <th class="text-right">L</th>
            <th class="text-right">GF</th>
            <th class="text-right">GA</th>
            <th class="text-right">GD</th>
            <th class="text-right">Pts</th>
            <th class="text-right">Δ Pts</th>
            <th class="text-right">Pos Δ</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in rows"
            :key="row.team_abbr"
            :class="{ 'champion-row': row.position === 1, 'city-row': row.team_abbr === 'MCI' }"
          >
            <td><strong>{{ row.position }}</strong></td>
            <td>
              <NuxtLink :to="`/teams/${teamSlug(row.team_name)}`">{{ row.team_name }}</NuxtLink>
            </td>
            <td class="text-right">{{ row.played }}</td>
            <td class="text-right">{{ row.won }}</td>
            <td class="text-right">{{ row.drawn }}</td>
            <td class="text-right">{{ row.lost }}</td>
            <td class="text-right">{{ row.goals_for }}</td>
            <td class="text-right">{{ row.goals_against }}</td>
            <td class="text-right">{{ signed(row.goal_diff) }}</td>
            <td class="text-right"><strong>{{ row.points }}</strong></td>
            <td class="text-right">
              <span :class="row.points_change > 0 ? 'text-green' : row.points_change < 0 ? 'text-red' : 'text-medium-emphasis'">
                {{ signed(row.points_change) }}
              </span>
            </td>
            <td class="text-right">
              <span :class="row.position_change > 0 ? 'text-green' : row.position_change < 0 ? 'text-red' : 'text-medium-emphasis'">
                {{ signed(row.position_change) }}
              </span>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { teamSlug } from '~/utils/teamSlugs'

defineProps({
  rows: { type: Array, required: true }
})

const signed = n => (n > 0 ? '+' + n : n)
</script>

<style scoped>
.champion-row {
  background: rgba(255, 193, 7, 0.15);
}
.city-row {
  background: rgba(244, 67, 54, 0.12);
}
</style>
