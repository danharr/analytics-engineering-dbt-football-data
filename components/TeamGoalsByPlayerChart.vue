<template>
  <div class="chart-wrap" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  data: { type: Array, required: true },
  color: { type: String, default: '#1a56db' }
})

const el = ref(null)

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const data = [...props.data].sort((a, b) => b.goals - a.goals)
  const width = target.clientWidth || 800
  const rowH = 24
  const margin = { top: 10, right: 40, bottom: 28, left: 150 }
  const innerW = width - margin.left - margin.right
  const innerH = data.length * rowH

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)
    .attr('viewBox', `0 0 ${width} ${innerH + margin.top + margin.bottom}`)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.goals)])
    .nice()
    .range([0, innerW])

  const y = d3.scaleBand()
    .domain(data.map(d => d.player_name))
    .range([0, innerH])
    .padding(0.3)

  chart.append('g')
    .call(d3.axisBottom(x).ticks(Math.min(6, d3.max(data, d => d.goals))).tickSizeOuter(0))
    .attr('transform', `translate(0,${innerH})`)

  chart.append('g')
    .call(d3.axisLeft(y).tickSizeOuter(0))
    .selectAll('text')
    .style('font-size', '12px')

  chart.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('y', d => y(d.player_name))
    .attr('height', y.bandwidth())
    .attr('width', d => x(d.goals))
    .attr('fill', props.color)
    .attr('rx', 3)

  chart.selectAll('text.val')
    .data(data)
    .join('text')
    .attr('class', 'val')
    .attr('x', d => x(d.goals) + 6)
    .attr('y', d => y(d.player_name) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('font-size', '12px')
    .attr('font-weight', 700)
    .attr('fill', '#333')
    .text(d => d.goals)
}

const onResize = () => renderChart()

watch([() => props.data, () => props.color], () => renderChart())

onMounted(() => {
  renderChart()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>
