<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-trophy-variant-outline" class="mr-2"></v-icon>
          Most Comebacks in a Season
        </v-card-title>
        <v-card-subtitle>
          Top 10 team-seasons by half-time comebacks, counting matches where they were losing at half-time but came back to win
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Fulham's 2024-25 campaign stands alone at the top with five half-time comebacks, more
            than any other team in a single Premier League season. Manchester City (2023-24)
            and Manchester United (2020-21) also managed five, while the list stretches all the
            way back to QPR in the very first season of 1992-93 and forward to Aston Villa's
            four in 2025-26.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Comeback Wins per Season</v-card-title>
        <v-card-subtitle>
          Bars are to scale · not required to be consecutive · hover for details
        </v-card-subtitle>
        <v-card-text>
          <MostComebacksChart :data="mostComebacks" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Top 10 Team-Seasons
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-left">Season</th>
                <th class="text-right">Comeback wins</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(r, i) in rows" :key="`${r.team_abbr}-${r.season_label}`">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ r.team_name }}</strong></td>
                <td>{{ r.season_label }}</td>
                <td class="text-right">{{ r.comeback_count }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.mostComebacks" />
    </v-col>
  </v-row>
</template>

<script setup>
import { mostComebacks, sqlQueries, datasetLd } from '~/composables/useData'

useHead({
  title: 'Most Half-Time Comebacks in a Single Premier League Season',
  meta: [
    {
      name: 'description',
      content: 'The top 10 team-seasons by half-time comebacks, counting matches where a Premier League team was losing at half-time but came back to win.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Most Comebacks in a Season Dataset',
        description: 'The top 10 Premier League team-seasons by half-time comebacks, counting matches where a team was losing at half-time but came back to win.',
        path: '/most-comebacks',
        csv: 'most_comebacks.csv',
        keywords: ['comebacks per season', 'most comebacks']
      }))
    }
  ]
})

const rows = [...mostComebacks].sort((a, b) => b.comeback_count - a.comeback_count || b.season_label.localeCompare(a.season_label) || a.team_name.localeCompare(b.team_name))
</script>
