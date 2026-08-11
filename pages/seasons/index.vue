<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-calendar" class="mr-2"></v-icon>
            Premier League Seasons
          </v-card-title>
          <v-card-subtitle>Every season since 1992 — one page per season</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <v-card>
          <v-card-text>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left">Season</th>
                  <th class="text-right">Teams</th>
                  <th class="text-left">Champions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in rows" :key="row.label">
                  <td>
                    <NuxtLink :to="`/seasons/${row.label}`">{{ row.label }} Season</NuxtLink>
                  </td>
                  <td class="text-right">{{ row.teams }}</td>
                  <td>{{ row.champion }}</td>
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
import { seasonTable } from '~/composables/useData'

const rows = [...new Set(seasonTable.map(r => r.season_label))]
  .sort((a, b) => parseInt(a.split('-')[0]) - parseInt(b.split('-')[0]))
  .map(label => {
    const seasonRows = seasonTable.filter(r => r.season_label === label)
    return {
      label,
      teams: new Set(seasonRows.map(r => r.team_abbr)).size,
      champion: seasonRows.find(r => r.position === 1)?.team_name ?? ''
    }
  })

useHead({
  title: 'Premier League Seasons — Every Season Since 1992',
  meta: [
    {
      name: 'description',
      content: 'One page per season: the final Premier League table for every campaign from the inaugural 1992-93 season onwards, with champions and each club\'s record.'
    }
  ]
})
</script>
