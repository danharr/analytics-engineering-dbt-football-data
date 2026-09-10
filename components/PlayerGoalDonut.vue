<template>
  <div class="goal-donut">
    <svg :viewBox="`0 0 ${size} ${size}`" class="goal-donut-svg" role="img" aria-label="First half vs second half goals">
      <g :transform="`translate(${size / 2},${size / 2})`">
        <path v-for="(seg, i) in segments" :key="i" :d="seg.d" :fill="seg.color" :opacity="0.9" />
        <text class="donut-center-num" text-anchor="middle" dominant-baseline="central" :y="-2">{{ total }}</text>
        <text class="donut-center-label" text-anchor="middle" :y="20">goals</text>
      </g>
    </svg>
    <div class="goal-donut-legend">
      <div v-for="(seg, i) in segments" :key="i" class="goal-donut-legend-item">
        <span class="goal-donut-swatch" :style="{ background: seg.color }"></span>
        <span class="goal-donut-legend-label">{{ seg.label }}</span>
        <span class="goal-donut-legend-value">{{ seg.value }} ({{ seg.pct }}%)</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'
import { computed } from 'vue'

const props = defineProps({
  summary: { type: Object, required: true }
})

const size = 240

const segments = computed(() => {
  const first = props.summary.first_half ?? 0
  const second = props.summary.second_half ?? 0
  const total = first + second
  const pct = n => (total ? Math.round((100 * n) / total) : 0)

  const pie = d3.pie().sort(null).value(d => d.value)
  const arc = d3.arc().innerRadius(64).outerRadius(96)

  return pie([
    { label: '1st half', value: first, color: '#1a56db' },
    { label: '2nd half', value: second, color: '#f59e0b' }
  ]).map((a, i) => ({
    d: arc(a),
    color: a.data.color,
    label: a.data.label,
    value: a.data.value,
    pct: pct(a.data.value)
  }))
})

const total = computed(() => (props.summary.first_half ?? 0) + (props.summary.second_half ?? 0))
</script>

<style scoped>
.goal-donut {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.goal-donut-svg {
  width: 240px;
  max-width: 100%;
  height: auto;
}
.donut-center-num {
  font-size: 40px;
  font-weight: 700;
  fill: #111;
}
.donut-center-label {
  font-size: 13px;
  fill: #666;
}
.goal-donut-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
}
.goal-donut-legend-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
}
.goal-donut-swatch {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  display: inline-block;
}
.goal-donut-legend-label {
  color: #444;
}
.goal-donut-legend-value {
  font-weight: 600;
  color: #111;
}
</style>
