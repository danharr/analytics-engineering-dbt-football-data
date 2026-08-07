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
  const margin = { top: 30, right: 24, bottom: 90, left: 50 }
  const innerW = width - margin.left - margin.right
  const innerH = 340

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const yMax = d3.max(data, d => Math.max(d.team_count, d.avg_matches_per_team))
  const y = d3.scaleLinear()
    .domain([0, yMax * 1.15])
    .nice()
    .range([innerH, 0])

  const x = d3.scaleBand()
    .domain(data.map(d => d.season_label))
    .range([0, innerW])
    .padding(0.3)

  const xSub = d3.scaleBand()
    .domain(['teams', 'avg'])
    .range([0, x.bandwidth()])
    .padding(0.1)

  chart.append('line')
    .attr('x1', 0)
    .attr('x2', innerW)
    .attr('y1', y(38))
    .attr('y2', y(38))
    .attr('stroke', '#e11d48')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '5 4')

  chart.append('text')
    .attr('x', innerW)
    .attr('y', y(38) - 6)
    .attr('text-anchor', 'end')
    .attr('font-size', '11px')
    .attr('fill', '#e11d48')
    .text('38 · typical 20-team season')

  const groups = chart.selectAll('g.season')
    .data(data)
    .join('g')
    .attr('class', 'season')
    .attr('transform', d => `translate(${x(d.season_label)},0)`)

  const barData = d => [
    { key: 'teams', value: d.team_count, label: `${d.team_count} teams` },
    { key: 'avg', value: d.avg_matches_per_team, label: `${d.avg_matches_per_team} matches per team` }
  ]

  groups.selectAll('rect')
    .data(barData)
    .join('rect')
    .attr('x', d => xSub(d.key))
    .attr('width', xSub.bandwidth())
    .attr('y', d => y(d.value))
    .attr('height', d => innerH - y(d.value))
    .attr('rx', 3)
    .attr('fill', d => d.key === 'teams' ? '#4f46e5' : '#10b981')

  chart.append('g')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .selectAll('text')
    .attr('transform', 'rotate(-45)')
    .attr('text-anchor', 'end')
    .attr('dx', '-0.6em')
    .attr('dy', '0.3em')

  chart.append('g')
    .call(d3.axisLeft(y).ticks(6))

  const legend = chart.append('g')
    .attr('transform', 'translate(0,-6)')
  legend.append('rect').attr('x', 0).attr('width', 12).attr('height', 12).attr('rx', 2).attr('fill', '#4f46e5')
  legend.append('text').attr('x', 16).attr('y', 10).attr('font-size', '11px').text('Teams')
  legend.append('rect').attr('x', 80).attr('width', 12).attr('height', 12).attr('rx', 2).attr('fill', '#10b981')
  legend.append('text').attr('x', 96).attr('y', 10).attr('font-size', '11px').text('Avg matches / team')

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

  groups.selectAll('rect')
    .on('mousemove', function (event, d) {
      const season = d3.select(this.parentNode).datum()
      const bounds = target.getBoundingClientRect()
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${season.season_label}</strong><br>` +
          `${d.label}<br>` +
          `${season.matches_played} matches played`
        )
        .style('left', (event.clientX - bounds.left + 12) + 'px')
        .style('top', (event.clientY - bounds.top - 10) + 'px')
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
