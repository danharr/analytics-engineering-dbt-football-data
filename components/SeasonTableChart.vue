<template>
  <v-card>
    <v-card-title>
      <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
      Final League Table
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
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in rows"
            :key="row.team_abbr"
            :class="{ 'champion-row': row.position === 1 }"
          >
            <td><strong>{{ row.position }}</strong></td>
            <td>{{ row.team_name }}</td>
            <td class="text-right">{{ row.played }}</td>
            <td class="text-right">{{ row.won }}</td>
            <td class="text-right">{{ row.drawn }}</td>
            <td class="text-right">{{ row.lost }}</td>
            <td class="text-right">{{ row.goals_for }}</td>
            <td class="text-right">{{ row.goals_against }}</td>
            <td class="text-right">{{ row.goal_diff > 0 ? '+' + row.goal_diff : row.goal_diff }}</td>
            <td class="text-right"><strong>{{ row.points }}</strong></td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  rows: { type: Array, required: true }
})
</script>

<style scoped>
.champion-row {
  background: rgba(255, 193, 7, 0.15);
}
</style>
