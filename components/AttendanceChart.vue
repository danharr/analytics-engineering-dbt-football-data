<template>
  <div class="chart-wrap" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { shortSeason } from '~/utils/seasonLabel'

const props = defineProps({
  data: { type: Array, required: true }
})

const el = ref(null)
let resizeObserver = null

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const rows = [...props.data]
    .sort((a, b) => +a.season_label.slice(0, 4) - +b.season_label.slice(0, 4))
  const seasons = [...new Set(rows.map(r => r.season_label))]
  const teamAbbrs = [...new Set(rows.map(r => r.team_abbr))].sort()
  const nameOf = abbr => rows.find(r => r.team_abbr === abbr).team_name
  const valOf = (abbr, season) => {
    const r = rows.find(x => x.team_abbr === abbr && x.season_label === season)
    return r ? r.avg_home_attendance : null
  }

  const teams = teamAbbrs.map(abbr => ({
    team_abbr: abbr,
    team_name: nameOf(abbr),
    points: seasons.map(s => {
      const v = valOf(abbr, s)
      return v === null ? null : { season: s, value: v }
    })
  }))

  const width = target.getBoundingClientRect().width || target.clientWidth || 800
  const margin = { top: 30, right: 20, bottom: 52, left: 64 }
  const innerW = width - margin.left - margin.right
  const innerH = 380

  const x = d3.scalePoint()
    .domain(seasons)
    .range([0, innerW])
    .padding(0.5)

  const yMax = d3.max(rows, r => r.avg_home_attendance)
  const y = d3.scaleLinear()
    .domain([0, yMax * 1.05])
    .nice()
    .range([innerH, 0])

  const color = d3.scaleOrdinal(d3.schemeTableau10)

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const lineGen = d3.line()
    .defined(p => p !== null)
    .x(d => x(d.season))
    .y(d => y(d.value))

  chart.selectAll('path.line')
    .data(teams)
    .join('path')
    .attr('class', 'line')
    .attr('fill', 'none')
    .attr('stroke', d => color(d.team_abbr))
    .attr('stroke-width', 2)
    .attr('opacity', 1)
    .attr('d', d => lineGen(d.points))

  const points = chart.selectAll('g.point')
    .data(teams)
    .join('g')
    .attr('class', 'point')
    .selectAll('circle')
    .data(d => d.points.map(p => ({ ...p, team_abbr: d.team_abbr, team_name: d.team_name })))
    .join('circle')
    .attr('cx', d => x(d.season))
    .attr('cy', d => y(d.value))
    .attr('r', 3)
    .attr('fill', d => color(d.team_abbr))
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).tickValues(seasons.filter((_, i) => i % 2 === 0)).tickFormat(shortSeason))

  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).ticks(5).tickFormat(d => (d / 1000) + 'k'))

  chart.append('text')
    .attr('x', innerW / 2)
    .attr('y', innerH + 36)
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('fill', '#555')
    .text('Season')

  chart.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -innerH / 2)
    .attr('y', -40)
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('fill', '#555')
    .text('Avg Home Attendance')

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
      .attr('opacity', d => !abbr || d.team_abbr === abbr ? 1 : 0.1)
    chart.selectAll('g.point circle')
      .attr('opacity', d => !abbr || d.team_abbr === abbr ? 1 : 0.1)
  }

  points
    .on('mousemove', function (event, d) {
      highlight(d.team_abbr)
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${d.team_name} (${d.team_abbr})</strong><br>` +
          `${d.season} · avg ${d3.format(',')(d.value)}`
        )
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
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
    .data(teams)
    .join('span')
    .style('color', d => color(d.team_abbr))
    .style('cursor', 'pointer')
    .style('font-size', '12px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '4px')
    .style('padding', '2px 7px')
    .text(d => d.team_abbr)
    .on('mouseenter', (event, d) => highlight(d.team_abbr))
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
