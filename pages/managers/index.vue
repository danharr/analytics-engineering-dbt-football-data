<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-account-tie-outline" class="mr-2"></v-icon>
            Featured Premier League Managers
          </v-card-title>
          <v-card-subtitle>Every manager with a dedicated page — one page per manager</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <v-card>
          <v-card-text>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left">Manager</th>
                  <th class="text-right">Wins</th>
                  <th class="text-right">Games</th>
                  <th class="text-right">Win %</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in rows" :key="row.slug">
                  <td>
                    <NuxtLink :to="`/managers/${row.slug}`">{{ row.name }}</NuxtLink>
                  </td>
                  <td class="text-right">{{ row.wins }}</td>
                  <td class="text-right">{{ row.games }}</td>
                  <td class="text-right">{{ row.win_pct.toFixed(1) }}</td>
                </tr>
              </tbody>
            </v-table>
            <p class="mt-3 mb-0 text-body-2">
              The dataset covers {{ totalManagers }} Premier League managers; the {{ rows.length }} above have dedicated pages.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { managerWins } from '~/composables/useData'
import { MANAGER_PAGES } from '~/utils/managerPages'

const totalManagers = new Set(managerWins.map(r => r.manager_name)).size

const rows = MANAGER_PAGES
  .map(m => {
    const mw = managerWins.find(r => r.manager_name === m.name)
    return { ...m, wins: mw?.wins ?? 0, games: mw?.games ?? 0, win_pct: mw?.win_pct ?? 0 }
  })
  .sort((a, b) => b.wins - a.wins)

useHead({
  title: 'Premier League Managers — Featured Manager Pages',
  meta: [
    {
      name: 'description',
      content: 'One page per featured manager: Premier League record, biggest wins and losses and club-by-club record for 30 of the league\'s most successful managers.'
    }
  ]
})
</script>
