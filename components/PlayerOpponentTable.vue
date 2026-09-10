<template>
  <v-table density="comfortable">
    <thead>
      <tr>
        <th class="text-left">#</th>
        <th class="text-left">Opposition</th>
        <th class="text-right">Goals</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in rows" :key="row.opponent_name">
        <td>{{ i + 1 }}</td>
        <td>{{ row.opponent_name }}</td>
        <td class="text-right"><strong>{{ row.goals }}</strong></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Array, required: true }
})

const rows = computed(() =>
  [...props.data]
    .sort((a, b) => b.goals - a.goals || a.opponent_name.localeCompare(b.opponent_name))
    .slice(0, 5)
)
</script>
