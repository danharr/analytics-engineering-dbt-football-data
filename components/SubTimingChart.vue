<template>
  <MinuteHeatmapChart :data="data" />
</template>

<script setup>
defineProps({
  data: { type: Array, required: true }
})
</script>
