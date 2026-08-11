<template>
  <v-card>
    <v-card-title>
      <v-icon icon="mdi-domain" class="mr-2"></v-icon>
      Club Record
    </v-card-title>
    <v-card-subtitle>Breakdown by club managed (total games, wins, draws, losses, win %)</v-card-subtitle>
    <v-card-text>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">Club</th>
            <th class="text-right">Games</th>
            <th class="text-right">Wins</th>
            <th class="text-right">Draws</th>
            <th class="text-right">Losses</th>
            <th class="text-right">Win %</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in clubRecords" :key="row.team_id">
            <td>
              <NuxtLink :to="`/teams/${teamSlug(row.team_name)}`">{{ row.team_name }}</NuxtLink>
            </td>
            <td class="text-right">{{ row.games }}</td>
            <td class="text-right">{{ row.wins }}</td>
            <td class="text-right">{{ row.draws }}</td>
            <td class="text-right">{{ row.losses }}</td>
            <td class="text-right">{{ row.win_pct.toFixed(1) }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { teamSlug } from '~/utils/teamSlugs'

const props = defineProps({
  clubRecords: { type: Array, required: true },
})
</script>
