<template>
  <v-card class="thumb-card">
    <NuxtLink :to="entry.path" class="thumb-link" :aria-label="entry.label">
      <div class="thumb-media">
        <ChartPreview :preview="entry.preview" />
      </div>
    </NuxtLink>
    <v-card-title class="thumb-title">{{ entry.label }}</v-card-title>
    <v-card-text class="thumb-caption">{{ entry.caption }}</v-card-text>
    <v-card-actions>
      <v-btn
        :to="entry.path"
        color="primary"
        variant="tonal"
        block
        prepend-icon="mdi-open-in-new"
      >
        View
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import ChartPreview from '~/components/ChartPreview.vue'

defineProps({
  entry: { type: Object, required: true }
})
</script>
