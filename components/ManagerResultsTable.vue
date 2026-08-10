<template>
  <div>
    <v-card class="mb-4">
      <v-card-title>
        <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
        Top 5 Biggest Wins
      </v-card-title>
      <v-card-subtitle>Widest winning margins, goals scored breaks ties</v-card-subtitle>
      <v-card-text>
        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Date</th>
              <th class="text-left">Season</th>
              <th class="text-left">H/A</th>
              <th class="text-left">Opponent</th>
              <th class="text-right">Score</th>
              <th class="text-right">Club</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in topWins" :key="row.kickoff_date + row.opponent_id + row.match_id">
              <td>{{ i + 1 }}</td>
              <td>{{ row.kickoff_date }}</td>
              <td>{{ row.season_label }}</td>
              <td>{{ row.is_home ? 'H' : 'A' }}</td>
              <td>{{ row.opponent_id }}</td>
              <td class="text-right"><strong>{{ row.goals_for }}–{{ row.goals_against }}</strong></td>
              <td class="text-right">{{ row.team_id }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <v-icon icon="mdi-emoticon-sad-outline" class="mr-2"></v-icon>
        Top 5 Biggest Defeats
      </v-card-title>
      <v-card-subtitle>Heaviest losses, most goals conceded breaks ties</v-card-subtitle>
      <v-card-text>
        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Date</th>
              <th class="text-left">Season</th>
              <th class="text-left">H/A</th>
              <th class="text-left">Opponent</th>
              <th class="text-right">Score</th>
              <th class="text-right">Club</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in topLosses" :key="row.kickoff_date + row.opponent_id + row.match_id">
              <td>{{ i + 1 }}</td>
              <td>{{ row.kickoff_date }}</td>
              <td>{{ row.season_label }}</td>
              <td>{{ row.is_home ? 'H' : 'A' }}</td>
              <td>{{ row.opponent_id }}</td>
              <td class="text-right"><strong>{{ row.goals_for }}–{{ row.goals_against }}</strong></td>
              <td class="text-right">{{ row.team_id }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
  matches: { type: Array, required: true },
})

// Top 5 biggest wins: by goal_diff then goals_for, then most recent
const topWins = [...props.matches]
  .filter(row => row.goal_diff > 0)
  .sort((a, b) => b.goal_diff - a.goal_diff || b.goals_for - a.goals_for || b.kickoff_date.localeCompare(a.kickoff_date))
  .slice(0, 5)

// Top 5 biggest defeats: by lowest goal_diff (most negative), then goals_against, then most recent
const topLosses = [...props.matches]
  .filter(row => row.goal_diff < 0)
  .sort((a, b) => a.goal_diff - b.goal_diff || b.goals_against - a.goals_against || b.kickoff_date.localeCompare(a.kickoff_date))
  .slice(0, 5)
</script>
