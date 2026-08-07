<template>
  <v-card>
    <v-card-title>
      <v-icon icon="mdi-database-search" class="mr-2"></v-icon>
      SQL Query Used
    </v-card-title>
    <v-card-text>
      <pre class="code"><code>{{ sql }}</code></pre>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  sql: { type: String, required: true }
})
</script>
