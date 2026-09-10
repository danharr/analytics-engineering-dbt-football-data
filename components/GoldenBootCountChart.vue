<template>
  <div class="chart-wrap" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  data: { type: Array, required: true }
})

const el = ref(null)

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const data = [...props.data].sort((a, b) => b.boots - a.boots || a.player_name.localeCompare(b.player_name))
  const width = target.clientWidth || 800
  const rowH = 34
  const margin = { top: 10, right: 40, bottom: 24, left: 130 }
  const innerW = width - margin.left - margin.right
  const innerH = data.length * rowH

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.boots)])
    .nice()
    .range([0, innerW])

  const y = d3.scaleBand()
    .domain(data.map(d => d.player_name))
    .range([0, innerH])
    .padding(0.3)

  const color = d3.scaleSequential(d3.interpolateGreens)
    .domain([0, d3.max(data, d => d.boots)])

  chart.append('g')
    .call(d3.axisBottom(x).ticks(d3.max(data, d => d.boots)).tickSizeOuter(0).tickFormat(d3.format('d')))
    .attr('transform', `translate(0,${innerH})`)

  chart.append('g')
    .call(d3.axisLeft(y).tickSizeOuter(0))

  const bars = chart.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('y', d => y(d.player_name))
    .attr('height', y.bandwidth())
    .attr('width', d => x(d.boots))
    .attr('fill', d => color(d.boots))
    .attr('rx', 3)

  chart.selectAll('text.val')
    .data(data)
    .join('text')
    .attr('class', 'val')
    .attr('x', d => x(d.boots) + 6)
    .attr('y', d => y(d.player_name) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('font-size', '12px')
    .text(d => d.boots)

  const tooltip = d3.select(target)
    .append('div')
    .style('position', 'absolute')
    .style('opacity', 0)
    .style('pointer-events', 'none')
    .style('background', 'rgba(0,0,0,0.88)')
    .style('color', '#fff')
    .style('padding', '8px 12px')
    .style('border-radius', '6px')
    .style('font-size', '12px')
    .style('z-index', 10)

  bars
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(`<strong>${d.player_name}</strong><br>${d.boots} Golden Boot${d.boots === 1 ? '' : 's'}`)
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))
}

const onResize = () => renderChart()

onMounted(() => {
  renderChart()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>
