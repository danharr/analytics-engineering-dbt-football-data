<template>
  <div class="stat-circle">
    <svg viewBox="0 0 160 160" class="stat-circle-svg">
      <circle cx="80" cy="80" r="72" class="stat-ring" />
      <text ref="num" class="stat-num" x="80" y="80" text-anchor="middle" dominant-baseline="central">
        {{ fmt(value) }}
      </text>
    </svg>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  label: { type: String, required: true }
})

const num = ref(null)
const fmt = n => d3.format(',')(n || 0)

onMounted(() => {
  const node = num.value
  if (!node) return
  const end = props.value
  const text = d3.select(node)

  text.transition()
    .duration(2000)
    .ease(d3.easeCubicOut)
    .tween('count', () => {
      const i = d3.interpolateNumber(0, end)
      return t => text.text(fmt(Math.round(i(t))))
    })
})
</script>
