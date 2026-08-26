<template>
  <div class="chart-wrap" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  data: { type: Array, required: true }
})

const el = ref(null)

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const teams = [...new Set(props.data.map(d => d.team_name))].sort((a, b) =>
    a.localeCompare(b)
  )

  // One 90-bin row per team: counts[minute-1] = number of subs at that minute.
  const rows = teams.map(name => {
    const short = props.data.find(d => d.team_name === name).team_short_name
    const counts = new Array(90).fill(0)
    for (const d of props.data) {
      if (d.team_name === name && d.minute >= 1 && d.minute <= 90) {
        counts[d.minute - 1] += 1
      }
    }
    return { name, short, counts }
  })

  const maxCount = Math.max(1, ...rows.flatMap(r => r.counts))

  const width = target.clientWidth || 900
  const margin = { top: 24, right: 24, bottom: 44, left: 118 }
  const innerW = width - margin.left - margin.right
  const rowH = 22
  const innerH = teams.length * rowH

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)
    .attr('viewBox', `0 0 ${width} ${innerH + margin.top + margin.bottom}`)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const cellW = innerW / 90
  const y = d3.scaleBand().domain(teams).range([0, innerH]).padding(0.25)
  const color = d3.scaleSequential()
    .domain([0, maxCount])
    .interpolator(t => d3.interpolateRgb('#ffffff', '#b71c1c')(t))

  // cells
  chart.selectAll('g.team-row')
    .data(rows)
    .join('g')
    .attr('class', 'team-row')
    .selectAll('rect.cell')
    .data(d => d.counts.map((n, i) => ({ team: d.name, minute: i + 1, n })))
    .join('rect')
    .attr('class', 'cell')
    .attr('x', d => (d.minute - 1) * cellW)
    .attr('y', d => y(d.team))
    .attr('width', cellW + 0.5)
    .attr('height', y.bandwidth())
    .attr('fill', d => (d.n === 0 ? '#ffffff' : color(d.n)))
    .attr('stroke', '#f0f0f0')
    .attr('stroke-width', 0.5)

  // half-time marker
  chart.append('line')
    .attr('x1', 45 * cellW)
    .attr('x2', 45 * cellW)
    .attr('y1', 0)
    .attr('y2', innerH)
    .attr('stroke', '#888')
    .attr('stroke-width', 1.5)

  // axes
  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).tickSizeOuter(0).tickSize(0).tickFormat(d => rows.find(r => r.name === d)?.short ?? d))
    .selectAll('text')
    .style('font-size', '11px')
    .style('fill', '#555')

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(d3.scaleLinear().domain([1, 90]).range([0, innerW])).tickValues([1, 15, 30, 45, 60, 75, 90]).tickSizeOuter(0))
    .selectAll('text')
    .style('font-size', '10px')
    .style('fill', '#888')

  chart.append('text')
    .attr('x', innerW)
    .attr('y', innerH + 34)
    .attr('text-anchor', 'end')
    .attr('font-size', '11px')
    .attr('fill', '#777')
    .text('Minute')

  chart.append('text')
    .attr('x', 0)
    .attr('y', -10)
    .attr('font-size', '11px')
    .attr('fill', '#999')
    .text('Half time at 45\u2032')

  // legend
  const legend = svg.append('g')
    .attr('transform', `translate(${margin.left},${innerH + margin.top + 14})`)
  const legW = 140
  const legGrad = legend.append('defs').append('linearGradient')
    .attr('id', 'subHeatGrad')
    .attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')
  legGrad.append('stop').attr('offset', '0%').attr('stop-color', '#ffffff')
  legGrad.append('stop').attr('offset', '100%').attr('stop-color', '#b71c1c')
  legend.append('rect')
    .attr('x', 0).attr('y', 0).attr('width', legW).attr('height', 10)
    .style('fill', 'url(#subHeatGrad)')
    .attr('stroke', '#ddd')
  legend.append('text').attr('x', 0).attr('y', 24).attr('font-size', '10px').attr('fill', '#777').text('0')
  legend.append('text').attr('x', legW).attr('y', 24).attr('font-size', '10px').attr('fill', '#777').attr('text-anchor', 'end').text(`${maxCount}+`)
  legend.append('text').attr('x', legW + 8).attr('y', 6).attr('font-size', '10px').attr('fill', '#666').text('subs')

  const tooltip = d3.select(target)
    .append('div')
    .style('position', 'absolute')
    .style('opacity', 0)
    .style('pointer-events', 'none')
    .style('background', 'rgba(0,0,0,0.88)')
    .style('color', '#fff')
    .style('padding', '6px 10px')
    .style('border-radius', '6px')
    .style('font-size', '12px')
    .style('z-index', 10)

  chart.selectAll('rect.cell')
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(`<strong>${d.team}</strong><br>Minute ${d.minute}: ${d.n} substitution${d.n === 1 ? '' : 's'}`)
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))
}

const onResize = () => renderChart()

watch(() => props.data, () => renderChart())

onMounted(() => {
  renderChart()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>
