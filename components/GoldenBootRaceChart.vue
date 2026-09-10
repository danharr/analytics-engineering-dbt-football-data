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
  const maxWeek = d3.max(rows, d => d.match_week) || 1

  const series = [...new Set(rows.map(r => `${r.player_name}|${r.season_label}`))]
    .map(key => {
      const [player_name, season_label] = key.split('|')
      return { key, player_name, season_label }
    })
    .sort((a, b) => {
      const sa = parseInt(a.season_label.split('-')[0])
      const sb = parseInt(b.season_label.split('-')[0])
      return sa - sb || a.player_name.localeCompare(b.player_name)
    })

  const color = d3.scaleOrdinal(d3.schemeTableau10).domain(series.map(s => s.key))

  const width = target.getBoundingClientRect().width || target.clientWidth || 800
  const margin = { top: 20, right: 24, bottom: 42, left: 52 }
  const innerW = width - margin.left - margin.right
  const innerH = 400

  const x = d3.scaleLinear().domain([1, maxWeek]).range([0, innerW])
  const yMax = d3.max(rows, d => d.cumulative_goals) || 1
  const y = d3.scaleLinear().domain([0, Math.max(1, yMax * 1.08)]).nice().range([innerH, 0])

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

  const lineData = series.map(s => {
    const byWeek = new Map(
      rows
        .filter(r => r.player_name === s.player_name && r.season_label === s.season_label)
        .map(r => [r.match_week, r.cumulative_goals])
    )
    const values = Array.from({ length: maxWeek }, (_, i) => byWeek.get(i + 1) ?? null)
    const played = values.filter(v => v != null)
    return {
      ...s,
      label: `${s.player_name} · ${s.season_label}`,
      values,
      final: played.length ? played[played.length - 1] : 0
    }
  })

  chart.selectAll('path.line')
    .data(lineData)
    .join('path')
    .attr('class', 'line')
    .attr('fill', 'none')
    .attr('stroke', d => color(d.key))
    .attr('stroke-width', 2)
    .attr('opacity', 0.9)
    .attr('d', d => lineGen(d.values))

  chart.selectAll('g.dots')
    .data(lineData)
    .join('g')
    .attr('class', 'dots')
    .selectAll('circle')
    .data(d => d.values.map((v, i) => ({ v, i, key: d.key })))
    .join('circle')
    .attr('cx', d => x(d.i + 1))
    .attr('cy', d => y(d.v))
    .attr('r', 3)
    .attr('fill', d => color(d.key))
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).ticks(Math.min(21, maxWeek)).tickSizeOuter(0).tickFormat(d3.format('d')))

  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).ticks(6).tickSizeOuter(0).tickFormat(d3.format('d')))

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
    .text('Cumulative goals')

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

  chart.selectAll('circle')
    .on('mousemove', function (event, d) {
      const s = lineData.find(l => l.key === d.key)
      tooltip
        .style('opacity', 1)
        .html(`<strong>${s ? s.label : d.key}</strong><br>Matchweek ${d.i + 1}: ${d.v} goals`)
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  function highlight(key) {
    chart.selectAll('path.line')
      .attr('opacity', d => (!key || d.key === key ? 0.9 : 0.08))
    chart.selectAll('g.dots circle')
      .attr('opacity', d => (!key || d.key === key ? 1 : 0.08))
  }

  const legend = d3.select(target)
    .append('div')
    .style('display', 'flex')
    .style('flex-wrap', 'wrap')
    .style('gap', '5px')
    .style('margin-top', '12px')

  legend.selectAll('span')
    .data(lineData)
    .join('span')
    .style('color', d => color(d.key))
    .style('cursor', 'pointer')
    .style('font-size', '12px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '4px')
    .style('padding', '2px 7px')
    .text(d => `${d.label} · ${d.final}`)
    .on('mouseenter', (event, d) => highlight(d.key))
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
