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
let resizeObserver = null

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const rows = props.data
  const maxWeek = d3.max(rows, d => d.matchweek) || 1

  const teamAbbrs = [...new Set(rows.map(r => r.team_abbr))]
  const nameOf = abbr => rows.find(r => r.team_abbr === abbr).team_name

  const series = teamAbbrs.map(abbr => {
    const byWeek = new Map(
      rows.filter(r => r.team_abbr === abbr).map(r => [r.matchweek, r.points])
    )
    const values = Array.from({ length: maxWeek }, (_, i) => byWeek.get(i + 1) ?? null)
    return { abbr, name: nameOf(abbr), values, final: values[values.length - 1] ?? 0 }
  })

  series.sort((a, b) => b.final - a.final || a.name.localeCompare(b.name))

  const width = target.getBoundingClientRect().width || target.clientWidth || 800
  const margin = { top: 20, right: 20, bottom: 42, left: 52 }
  const innerW = width - margin.left - margin.right
  const innerH = 420

  const x = d3.scaleLinear().domain([1, maxWeek]).range([0, innerW])
  const yMax = d3.max(rows, d => d.points)
  const y = d3.scaleLinear().domain([0, yMax * 1.05]).nice().range([innerH, 0])

  const color = d3.scaleOrdinal(d3.schemeTableau10)

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const lineGen = d3.line()
    .defined(v => v != null)
    .x((_, i) => x(i + 1))
    .y(v => y(v))

  chart.selectAll('path.line')
    .data(series)
    .join('path')
    .attr('class', 'line')
    .attr('fill', 'none')
    .attr('stroke', d => color(d.abbr))
    .attr('stroke-width', 2)
    .attr('d', d => lineGen(d.values))

  const points = chart.selectAll('g.point')
    .data(series)
    .join('g')
    .attr('class', 'point')
    .selectAll('circle')
    .data(d => d.values.map((v, i) => ({ week: i + 1, value: v, abbr: d.abbr, name: d.name })))
    .join('circle')
    .attr('cx', d => x(d.week))
    .attr('cy', d => y(d.value))
    .attr('r', 3)
    .attr('fill', d => color(d.abbr))
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).ticks(Math.min(20, maxWeek)).tickSizeOuter(0).tickFormat(d3.format('d')))

  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).ticks(6).tickSizeOuter(0))

  chart.append('text')
    .attr('x', innerW / 2)
    .attr('y', innerH + 34)
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('fill', '#555')
    .text('Matchweek')

  chart.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -innerH / 2)
    .attr('y', -38)
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('fill', '#555')
    .text('Points')

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

  function highlight(abbr) {
    chart.selectAll('path.line')
      .attr('opacity', d => !abbr || d.abbr === abbr ? 1 : 0.08)
    chart.selectAll('g.point circle')
      .attr('opacity', d => !abbr || d.abbr === abbr ? 1 : 0.08)
  }

  points
    .on('mousemove', function (event, d) {
      highlight(d.abbr)
      const bounds = target.getBoundingClientRect()
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${d.name}</strong><br>` +
          `Matchweek ${d.week} · ${d.value} points`
        )
        .style('left', (event.clientX - bounds.left + 12) + 'px')
        .style('top', (event.clientY - bounds.top - 10) + 'px')
    })
    .on('mouseleave', () => {
      highlight(null)
      tooltip.style('opacity', 0)
    })

  const legend = d3.select(target)
    .append('div')
    .style('display', 'flex')
    .style('flex-wrap', 'wrap')
    .style('gap', '6px')
    .style('margin-top', '10px')

  legend.selectAll('span')
    .data(series)
    .join('span')
    .style('color', d => color(d.abbr))
    .style('cursor', 'pointer')
    .style('font-size', '12px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '4px')
    .style('padding', '2px 7px')
    .text(d => d.abbr)
    .on('mouseenter', (event, d) => highlight(d.abbr))
    .on('mouseleave', () => highlight(null))
}

const onResize = () => renderChart()

onMounted(() => {
  renderChart()
  if (typeof ResizeObserver !== 'undefined' && el.value) {
    resizeObserver = new ResizeObserver(() => renderChart())
    resizeObserver.observe(el.value)
  } else {
    window.addEventListener('resize', onResize)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  } else {
    window.removeEventListener('resize', onResize)
  }
})
</script>
