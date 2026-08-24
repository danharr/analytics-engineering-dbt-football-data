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

  const data = props.data
  const width = target.clientWidth || 800
  const rowH = 42
  const margin = { top: 10, right: 56, bottom: 24, left: 104 }
  const innerW = width - margin.left - margin.right
  const innerH = data.length * rowH

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([0, innerW])

  const y = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([0, innerH])
    .padding(0.3)

  const color = d3.scaleSequential(d3.interpolateReds)
    .domain([0, d3.max(data, d => d.value)])

  chart.append('g')
    .call(d3.axisBottom(x).ticks(6).tickSizeOuter(0))
    .attr('transform', `translate(0,${innerH})`)

  chart.append('g')
    .call(d3.axisLeft(y).tickSizeOuter(0))

  const bars = chart.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('y', d => y(d.label))
    .attr('height', y.bandwidth())
    .attr('width', d => x(d.value))
    .attr('fill', d => color(d.value))
    .attr('rx', 3)

  chart.selectAll('text.val')
    .data(data)
    .join('text')
    .attr('class', 'val')
    .attr('x', d => x(d.value) + 6)
    .attr('y', d => y(d.label) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('font-size', '12px')
    .attr('font-weight', 600)
    .text(d => d.value)

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
        .html(
          `<strong>${d.name}</strong><br>` +
          `Matches: ${d.matches}<br>` +
          `Red cards: ${d.value}`
        )
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
