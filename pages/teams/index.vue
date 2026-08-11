<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-shield-outline" class="mr-2"></v-icon>
            All Premier League Teams
          </v-card-title>
          <v-card-subtitle>Every club that has played in the Premier League since 1992 — one page per club</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <v-card>
          <v-card-text>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left">Team</th>
                  <th class="text-right">Played</th>
                  <th class="text-right">Wins</th>
                  <th class="text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in rows" :key="row.abbr">
                  <td>
                    <NuxtLink :to="`/teams/${row.slug}`">{{ row.name }}</NuxtLink>
                  </td>
                  <td class="text-right">{{ row.played }}</td>
                  <td class="text-right">{{ row.wins }}</td>
                  <td class="text-right">{{ row.points }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { allTime } from '~/composables/useData'
import { teamPages } from '~/composables/teamPages'

const rows = teamPages
  .map(t => {
    const at = allTime.find(a => a.team_abbr === t.abbr)
    return { ...t, played: at?.matches_played ?? 0, wins: at?.wins ?? 0, points: at?.points ?? 0 }
  })
  .sort((a, b) => b.points - a.points)

useHead({
  title: 'All Premier League Teams Since 1992 — Team Pages',
  meta: [
    {
      name: 'description',
      content: 'One page per club: every team that has played in the Premier League since 1992, with their all-time record, biggest wins and defeats, attendances and manager history.'
    }
  ]
})
</script>
