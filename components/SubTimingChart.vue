<template>
  <MinuteHeatmapChart :data="data" color="#1e88e5" item-label="substitution" />
</template>

<script setup>
defineProps({
  data: { type: Array, required: true }
})
</script>
