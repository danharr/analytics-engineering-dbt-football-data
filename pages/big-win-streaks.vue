<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-format-list-numbered" class="mr-2"></v-icon>
          Big Win Streaks
        </v-card-title>
        <v-card-subtitle>
          The longest winning streaks within a single season (11+ wins in a row)
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Six runs of 13 or more consecutive wins have ever happened in the Premier League,
            and half of them belong to Manchester City. Their 18 in a row in 2017-18 remains
            the record, a feat Liverpool matched during their title-winning 2019-20 campaign.
            Each square in the chart is a single win, with its date, opponent and score, so you can
            trace exactly who these monster runs cut down, from City's 5-0 thrashing of
            Liverpool to Arsenal's 13 straight to close out the 2001-02 title.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>11+ Game Winning Streaks</v-card-title>
        <v-card-subtitle>
          Each square is one win, with date, opponent and score · longest streak at top
        </v-card-subtitle>
        <v-card-text>
          <BigWinStreaksChart :data="bigWinStreaks" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table" class="mr-2"></v-icon>
          Streaks
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Team</th>
                <th class="text-left">Season</th>
                <th class="text-left">Started</th>
                <th class="text-left">Ended</th>
                <th class="text-right">Wins</th>
                <th class="text-left">Opponents</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(s, i) in streaks" :key="s.streak_id">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ s.team_name }}</strong></td>
                <td>{{ s.season_label }}</td>
                <td>{{ firstDate(s) }}</td>
                <td>{{ lastDate(s) }}</td>
                <td class="text-right">{{ s.streak_length }}</td>
                <td>{{ opponents(s) }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.bigWinStreaks" />
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { bigWinStreaks, sqlQueries, datasetLd } from '~/composables/useData'

useHead({
  title: 'Longest Winning Streaks Within a Single Premier League Season',
  meta: [
    {
      name: 'description',
      content: 'The longest winning streaks within a single Premier League season (11 or more wins in a row), with the date, opponent and score of every win.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Big Win Streaks Dataset',
        description: 'The longest winning streaks within a single Premier League season (11 or more wins in a row), with the date, opponent and score of every match in each streak.',
        path: '/big-win-streaks',
        csv: 'big_win_streaks.csv',
        keywords: ['long winning streaks', '11 wins in a row']
      }))
    }
  ]
})

const streaks = computed(() => {
  const map = new Map()
  for (const g of bigWinStreaks) {
    let s = map.get(g.streak_id)
    if (!s) {
      s = {
        streak_id: g.streak_id,
        team_name: g.team_name,
        season_label: g.season_label,
        streak_length: g.streak_length,
        games: []
      }
      map.set(g.streak_id, s)
    }
    s.games.push(g)
  }
  return [...map.values()]
})

const firstDate = s => s.games[0].match_date
const lastDate = s => s.games[s.games.length - 1].match_date
const opponents = s => s.games.map(g => g.opponent_abbr).join(', ')
</script>
