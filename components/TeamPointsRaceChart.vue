<template>
  <div class="chart-wrap" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  data: { type: Array, required: true },
  champions: { type: Array, default: () => [] },
  colour: { type: String, default: '#1976d2' }
})

const el = ref(null)
let resizeObserver = null

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const rows = props.data
  const maxWeek = d3.max(rows, d => d.matchweek) || 1

  const seasons = [...new Set(rows.map(r => r.season_label))]
    .sort((a, b) => parseInt(a.split('-')[0]) - parseInt(b.split('-')[0]))

  const series = seasons.map((label, idx) => {
    const byWeek = new Map(
      rows.filter(r => r.season_label === label).map(r => [r.matchweek, r.points])
    )
    const values = Array.from({ length: maxWeek }, (_, i) => byWeek.get(i + 1) ?? null)
    const played = values.filter(v => v != null)
    return {
      label,
      idx,
      values,
      final: played.length ? played[played.length - 1] : 0,
      champion: props.champions.includes(label)
    }
  })

  const light = d3.interpolateRgb(props.colour, '#ffffff')(0.6)
  const dark = d3.interpolateRgb(props.colour, '#000000')(0.3)
  const color = d3.scaleSequential(d3.interpolateRgb(light, dark))
    .domain([0, Math.max(1, series.length - 1)])

  const width = target.getBoundingClientRect().width || target.clientWidth || 800
  const margin = { top: 20, right: 24, bottom: 42, left: 52 }
  const innerW = width - margin.left - margin.right
  const innerH = 440

  const x = d3.scaleLinear().domain([1, maxWeek]).range([0, innerW])
  const yMax = d3.max(rows, d => d.points)
  const y = d3.scaleLinear().domain([0, yMax * 1.05]).nice().range([innerH, 0])

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
    .attr('stroke', d => color(d.idx))
    .attr('stroke-width', 1.5)
    .attr('opacity', 0.85)
    .attr('d', d => lineGen(d.values))

  chart.selectAll('g.trophy')
    .data(series.filter(d => d.champion))
    .join('g')
    .attr('class', 'trophy')
    .attr('transform', d => {
      const lastIdx = d.values.map((v, i) => (v != null ? i : -1)).reduce((a, b) => Math.max(a, b), -1)
      return `translate(${x(lastIdx + 1)},${y(d.values[lastIdx])})`
    })
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('font-size', '12px')
    .text('🏆')

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).ticks(Math.min(21, maxWeek)).tickSizeOuter(0).tickFormat(d3.format('d')))

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

  function highlight(label) {
    chart.selectAll('path.line')
      .attr('opacity', d => (!label || d.label === label ? 0.9 : 0.06))
    chart.selectAll('g.trophy')
      .attr('opacity', d => (!label || d.label === label ? 1 : 0.06))
  }

  const legend = d3.select(target)
    .append('div')
    .style('display', 'flex')
    .style('flex-wrap', 'wrap')
    .style('gap', '5px')
    .style('margin-top', '12px')

  legend.selectAll('span')
    .data(series)
    .join('span')
    .style('color', d => color(d.idx))
    .style('cursor', 'pointer')
    .style('font-size', '12px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '4px')
    .style('padding', '2px 7px')
    .style('font-weight', d => (d.champion ? 700 : 400))
    .text(d => `${d.label} · ${d.final}${d.champion ? ' 🏆' : ''}`)
    .on('mouseenter', (event, d) => highlight(d.label))
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
