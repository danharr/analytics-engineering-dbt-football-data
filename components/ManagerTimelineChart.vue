<template>
  <div class="chart-wrap" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { teamColour, readableTextOn } from '~/composables/teamColours'

const props = defineProps({
  data: { type: Array, required: true }
})

const el = ref(null)

const PL_START = new Date('1992-08-15T00:00:00Z')
const ROW_H = 26

function assignTracks(spells) {
  const sorted = [...spells].sort((a, b) => a.from - b.from)
  const tracks = []
  for (const s of sorted) {
    let placed = -1
    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i] <= s.from) {
        placed = i
        break
      }
    }
    if (placed === -1) {
      placed = tracks.length
      tracks.push(s.until)
    } else {
      tracks[placed] = s.until
    }
    s.track = placed
  }
  return tracks.length
}

function fmtDuration(from, until) {
  const months = (until.getUTCFullYear() - from.getUTCFullYear()) * 12 + (until.getUTCMonth() - from.getUTCMonth())
  const years = Math.floor(months / 12)
  const rem = months % 12
  if (years > 0 && rem > 0) return `${years}y ${rem}m`
  if (years > 0) return `${years}y`
  return `${rem}m`
}

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const teams = [...new Set(props.data.map(d => d.team_name))].sort()
  const byTeam = new Map(teams.map(t => [t, []]))
  for (const d of props.data) {
    byTeam.get(d.team_name).push({
      manager: d.manager_name,
      role: d.role,
      present: !!d.present,
      from: new Date(d.from_date + 'T00:00:00Z'),
      until: new Date(d.until_date + 'T00:00:00Z')
    })
  }

  const maxUntil = d3.max(props.data, d => new Date(d.until_date + 'T00:00:00Z'))

  const width = target.clientWidth || 900
  const margin = { top: 16, right: 16, bottom: 40, left: 168 }
  const innerW = width - margin.left - margin.right
  const innerH = teams.length * ROW_H

  const x = d3.scaleUtc()
    .domain([PL_START, maxUntil])
    .range([0, innerW])

  const y = d3.scaleBand()
    .domain(teams)
    .range([0, innerH])
    .padding(0.12)

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)
    .style('display', 'block')

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).ticks(d3.utcYear.every(2)).tickFormat(d3.utcFormat('%Y')))

  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).tickSizeOuter(0))

  const tooltip = d3.select(target)
    .append('div')
    .style('position', 'absolute')
    .style('opacity', 0)
    .style('pointer-events', 'none')
    .style('background', 'rgba(0,0,0,0.9)')
    .style('color', '#fff')
    .style('padding', '8px 12px')
    .style('border-radius', '6px')
    .style('font-size', '12px')
    .style('z-index', 10)

  const teamRows = chart.selectAll('g.team')
    .data(teams)
    .join('g')
    .attr('class', 'team')
    .attr('transform', d => `translate(0,${y(d)})`)

  teamRows.each(function (team) {
    const spells = byTeam.get(team).map(s => ({ ...s }))
    const trackCount = assignTracks(spells)
    const rowGroup = d3.select(this)
    const band = y.bandwidth()
    const gap = 1.5
    const barH = (band - gap * (trackCount + 1)) / trackCount

    const rects = rowGroup.selectAll('rect')
      .data(spells, d => d.manager + d.from.getTime())
      .join('rect')
      .attr('x', d => Math.max(0, x(Math.max(d.from, PL_START))))
      .attr('y', d => gap + d.track * (barH + gap))
      .attr('width', d => {
        const x1 = Math.max(0, x(Math.max(d.from, PL_START)))
        const x2 = x(d.until)
        return Math.max(0, x2 - x1)
      })
      .attr('height', barH)
      .attr('rx', 2)
      .attr('fill', teamColour(team))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .attr('opacity', d => d.role === 'caretaker' ? 0.55 : 1)

    const labels = rowGroup.selectAll('text.cell')
      .data(spells, d => d.manager + d.from.getTime())
      .join('text')
      .attr('class', 'cell')
      .attr('x', d => {
        const x1 = Math.max(0, x(Math.max(d.from, PL_START)))
        const x2 = x(d.until)
        return x1 + (x2 - x1) / 2
      })
      .attr('y', d => gap + d.track * (barH + gap) + barH / 2)
      .attr('dy', '0.32em')
      .attr('font-size', '10.5px')
      .attr('font-weight', 600)
      .attr('text-anchor', 'middle')
      .attr('pointer-events', 'none')
      .attr('fill', readableTextOn(teamColour(team)))
      .text(d => d.manager)
      .each(function (d) {
        const x1 = Math.max(0, x(Math.max(d.from, PL_START)))
        const x2 = x(d.until)
        const t = this
        const bw = x2 - x1
        if (t.getComputedTextLength() > bw - 10) {
          t.setAttribute('visibility', 'hidden')
        }
      })

    rects
      .on('mousemove', function (event, d) {
        const endLabel = d.present ? 'present' : d3.utcFormat('%e %b %Y')(d.until).trim()
        const roleLabel = d.role === 'caretaker' ? ' · caretaker' : d.role === 'incumbent' ? ' · incumbent' : ''
        tooltip
          .style('opacity', 1)
          .html(
            `<strong>${d.manager}</strong>${roleLabel}<br>` +
            `<span style="color:${teamColour(team)}">${team}</span><br>` +
            `${d3.utcFormat('%e %b %Y')(d.from).trim()} – ${endLabel}<br>` +
            `${fmtDuration(d.from, d.present ? maxUntil : d.until)} in charge`
          )
          .style('left', (event.offsetX + 12) + 'px')
          .style('top', (event.offsetY - 10) + 'px')
        d3.select(this).attr('stroke', '#333')
      })
      .on('mouseleave', function () {
        tooltip.style('opacity', 0)
        d3.select(this).attr('stroke', '#fff')
      })

    rects.raise()
    labels.raise()
  })
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
