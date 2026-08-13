<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-whistle-outline" class="mr-2"></v-icon>
          Most Manager Wins
        </v-card-title>
        <v-card-subtitle>
          Top 25 managers by Premier League wins, from the Wikipedia managers list joined to match results
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Sir Alex Ferguson's 528 wins at Manchester United are 52 clear of second-placed
            Arsène Wenger (476, all at Arsenal) and more than double David Moyes in third.
            The list mixes modern dynasties like Pep Guardiola — the only active manager in the
            top five — with legendary long-serving managers of the 1990s and 2000s. Wenger's
            828 games are the most of anyone on the list; no one else has managed 800.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Premier League Wins by Manager</v-card-title>
        <v-card-subtitle>
          Top 25 by wins · includes permanent and caretaker spells · hover for details
        </v-card-subtitle>
        <v-card-text>
          <ManagerWinsChart :data="rows" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Top 20 Managers
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Manager</th>
                <th class="text-right">Games</th>
                <th class="text-right">Wins</th>
                <th class="text-right">Draws</th>
                <th class="text-right">Losses</th>
                <th class="text-right">Win %</th>
                <th class="text-right">Points</th>
                <th class="text-right">GF</th>
                <th class="text-right">GA</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in top20" :key="r.manager_name">
                <td>{{ r.rank }}</td>
                <td><strong>{{ r.manager_name }}</strong></td>
                <td class="text-right">{{ r.games }}</td>
                <td class="text-right">{{ r.wins }}</td>
                <td class="text-right">{{ r.draws }}</td>
                <td class="text-right">{{ r.losses }}</td>
                <td class="text-right">{{ r.win_pct }}</td>
                <td class="text-right">{{ r.points }}</td>
                <td class="text-right">{{ r.goals_for }}</td>
                <td class="text-right">{{ r.goals_against }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { managerWins, datasetLd } from '~/composables/useData'

useHead({
  title: 'Premier League Managers With the Most Wins',
  meta: [
    {
      name: 'description',
      content: 'The managers with the most Premier League wins, from the Wikipedia managers list joined to 34 seasons of match results.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Manager Wins Dataset',
        description: 'The managers with the most Premier League wins, from the Wikipedia managers list joined to 34 seasons of match results, including games, draws, losses, win percentage, points, goals for and against.',
        path: '/manager-wins',
        csv: 'manager_wins.csv',
        keywords: ['manager wins', 'manager records']
      }))
    }
  ]
})

const rows = [...managerWins].sort((a, b) => b.wins - a.wins)
const top20 = rows.slice(0, 20)
</script>
