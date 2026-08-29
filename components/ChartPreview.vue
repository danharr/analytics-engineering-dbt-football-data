<template>
  <div class="chart-preview" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted } from 'vue'

const props = defineProps({
  preview: { type: Object, required: true }
})

const el = ref(null)
const W = 320
const H = 180

const truncate = (s, n) => (s.length > n ? s.slice(0, n - 1) + '\u2026' : s)

function renderBars(svg, rows) {
  const margin = { top: 8, right: 8, bottom: 8, left: 6 }
  const labelW = 92
  const barW = W - margin.left - margin.right - labelW - 28
  const innerH = H - margin.top - margin.bottom
  const rowH = innerH / rows.length
  const max = d3.max(rows, d => d.value) || 1

  const x = d3.scaleLinear().domain([0, max]).range([0, barW])
  const y = d3.scaleBand().domain(rows.map(d => d.label)).range([0, innerH]).padding(0.26)

  const g = svg.append('g').attr('transform', `translate(${margin.left + labelW},${margin.top})`)

  g.selectAll('rect')
    .data(rows)
    .join('rect')
    .attr('x', 0)
    .attr('y', d => y(d.label))
    .attr('width', d => Math.max(2, x(d.value)))
    .attr('height', y.bandwidth())
    .attr('rx', 2)
    .attr('fill', '#1a56db')
    .attr('opacity', 0.9)

  g.selectAll('text.val')
    .data(rows)
    .join('text')
    .attr('x', d => Math.max(2, x(d.value)) + 4)
    .attr('y', d => y(d.label) + y.bandwidth() / 2)
    .attr('dy', '0.32em')
    .attr('font-size', '9px')
    .attr('font-weight', 600)
    .attr('fill', '#333')
    .text(d => d.display)

  svg.append('g')
    .selectAll('text.lbl')
    .data(rows)
    .join('text')
    .attr('x', margin.left + labelW - 6)
    .attr('y', d => margin.top + y(d.label) + y.bandwidth() / 2)
    .attr('dy', '0.32em')
    .attr('text-anchor', 'end')
    .attr('font-size', '9px')
    .attr('fill', '#555')
    .text(d => truncate(d.label, 17))
}

function renderGroupedBars(svg, rows) {
  const margin = { top: 8, right: 8, bottom: 16, left: 6 }
  const innerW = W - margin.left - margin.right
  const innerH = H - margin.top - margin.bottom
  const x = d3.scaleBand().domain(rows.map(d => d.label)).range([0, innerW]).padding(0.15)
  const max = d3.max(rows, d => Math.max(d.a, d.b)) || 1
  const y = d3.scaleLinear().domain([0, max]).range([innerH, 0])
  const sub = d3.scaleBand().domain(['a', 'b']).range([0, x.bandwidth()]).padding(0.15)

  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

  g.selectAll('g.group')
    .data(rows)
    .join('g')
    .attr('transform', d => `translate(${x(d.label)},0)`)
    .selectAll('rect')
    .data(d => [
      { k: 'a', v: d.a },
      { k: 'b', v: d.b }
    ])
    .join('rect')
    .attr('x', d => sub(d.k))
    .attr('width', sub.bandwidth())
    .attr('y', d => y(d.v))
    .attr('height', d => innerH - y(d.v))
    .attr('rx', 1)
    .attr('fill', d => (d.k === 'a' ? '#4f46e5' : '#10b981'))

  g.append('g')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickValues(rows.map(d => d.label).filter((_, i) => i % 5 === 0)).tickSize(0))
    .selectAll('text')
    .attr('font-size', '8px')
    .attr('fill', '#888')
}

function renderLines(svg, { series, xLabels }) {
  const margin = { top: 8, right: 8, bottom: 16, left: 30 }
  const innerW = W - margin.left - margin.right
  const innerH = H - margin.top - margin.bottom
  const x = d3.scalePoint().domain(xLabels).range([0, innerW]).padding(0.5)
  const max = d3.max(series.flatMap(s => s.points.filter(v => v != null))) || 1
  const y = d3.scaleLinear().domain([0, max * 1.05]).range([innerH, 0])
  const color = d3.scaleOrdinal(d3.schemeTableau10)

  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

  const line = d3.line()
    .defined(v => v != null)
    .x((_, i) => x(xLabels[i]))
    .y(v => y(v))

  g.selectAll('path')
    .data(series)
    .join('path')
    .attr('fill', 'none')
    .attr('stroke', (_, i) => color(i))
    .attr('stroke-width', 1.5)
    .attr('d', s => line(s.points))

  g.append('g')
    .call(d3.axisLeft(y).ticks(3).tickFormat(d3.format('~s')).tickSize(0))
    .selectAll('text')
    .attr('font-size', '8px')
    .attr('fill', '#888')

  g.append('g')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickValues(xLabels.filter((_, i) => i % 6 === 0)).tickSize(0))
    .selectAll('text')
    .attr('font-size', '8px')
    .attr('fill', '#888')
}

function renderSquares(svg, rows) {
  const margin = { top: 8, right: 8, bottom: 8, left: 6 }
  const labelW = 92
  const cellSize = 20
  const gap = 4
  const maxCells = Math.min(8, Math.max(...rows.map(r => r.cells.length)))
  const rowH = 30

  const g = svg.append('g').attr('transform', `translate(${margin.left + labelW},${margin.top})`)

  rows.slice(0, Math.floor((H - margin.top - margin.bottom) / rowH)).forEach((row, i) => {
    const y = i * rowH
    svg.append('text')
      .attr('x', margin.left + labelW - 6)
      .attr('y', y + rowH / 2 + margin.top)
      .attr('dy', '0.32em')
      .attr('text-anchor', 'end')
      .attr('font-size', '9px')
      .attr('fill', '#555')
      .text(truncate(row.label, 17))

    row.cells.slice(0, maxCells).forEach((cell, j) => {
      g.append('rect')
        .attr('x', j * (cellSize + gap))
        .attr('y', y + (rowH - cellSize) / 2)
        .attr('width', cellSize)
        .attr('height', cellSize)
        .attr('rx', 3)
        .attr('fill', '#e8f0fe')
        .attr('stroke', '#bcd2f5')

      g.append('text')
        .attr('x', j * (cellSize + gap) + cellSize / 2)
        .attr('y', y + rowH / 2)
        .attr('dy', '0.32em')
        .attr('text-anchor', 'middle')
        .attr('font-size', '7px')
        .attr('font-weight', 700)
        .attr('fill', '#1a56db')
        .text(cell)
    })
  })
}

function renderPyramid(svg, rows) {
  const margin = { top: 10, right: 8, bottom: 8, left: 8 }
  const innerW = W - margin.left - margin.right
  const innerH = H - margin.top - margin.bottom
  const centerX = innerW / 2
  const gutter = 3
  const max = Math.max(d3.max(rows, d => d.left) || 1, d3.max(rows, d => d.right) || 1)
  const xLeft = d3.scaleLinear().domain([0, max]).range([centerX - gutter, 0])
  const xRight = d3.scaleLinear().domain([0, max]).range([centerX + gutter, innerW])
  const y = d3.scaleBand().domain(rows.map(d => d.label)).range([0, innerH]).padding(0.18)

  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

  g.selectAll('rect.left')
    .data(rows)
    .join('rect')
    .attr('x', d => xLeft(d.left))
    .attr('y', d => y(d.label))
    .attr('width', d => Math.max(0, (centerX - gutter) - xLeft(d.left)))
    .attr('height', y.bandwidth())
    .attr('fill', '#c62828')
    .attr('opacity', 0.9)

  g.selectAll('rect.right')
    .data(rows)
    .join('rect')
    .attr('x', centerX + gutter)
    .attr('y', d => y(d.label))
    .attr('width', d => Math.max(0, xRight(d.right) - (centerX + gutter)))
    .attr('height', y.bandwidth())
    .attr('fill', '#1e88e5')
    .attr('opacity', 0.9)

  g.append('line')
    .attr('x1', centerX)
    .attr('x2', centerX)
    .attr('y1', 0)
    .attr('y2', innerH)
    .attr('stroke', '#bbb')

  g.append('text')
    .attr('x', 0)
    .attr('y', -2)
    .attr('font-size', '7px')
    .attr('fill', '#c62828')
    .text('H')

  g.append('text')
    .attr('x', innerW)
    .attr('y', -2)
    .attr('font-size', '7px')
    .attr('fill', '#1e88e5')
    .attr('text-anchor', 'end')
    .text('A')
}

function renderGantt(svg, rows) {
  const margin = { top: 8, right: 8, bottom: 8, left: 6 }
  const labelW = 92
  const innerW = W - margin.left - margin.right - labelW
  const innerH = H - margin.top - margin.bottom
  const rowH = innerH / rows.length
  const x = d3.scaleLinear().domain([0, 1]).range([0, innerW])

  const g = svg.append('g').attr('transform', `translate(${margin.left + labelW},${margin.top})`)

  rows.forEach((row, i) => {
    const y = i * rowH
    svg.append('text')
      .attr('x', margin.left + labelW - 6)
      .attr('y', y + rowH / 2 + margin.top)
      .attr('dy', '0.32em')
      .attr('text-anchor', 'end')
      .attr('font-size', '9px')
      .attr('fill', '#555')
      .text(truncate(row.label, 17))

    row.bars.forEach(b => {
      g.append('rect')
        .attr('x', x(b.start))
        .attr('y', y + rowH * 0.22)
        .attr('width', Math.max(2, x(b.end) - x(b.start)))
        .attr('height', rowH * 0.56)
        .attr('rx', 1.5)
        .attr('fill', '#0e9f6e')
        .attr('opacity', 0.72)
    })
  })
}

function renderDots(svg, rows) {
  const margin = { top: 8, right: 8, bottom: 14, left: 6 }
  const labelW = 92
  const innerW = W - margin.left - margin.right - labelW
  const innerH = H - margin.top - margin.bottom
  const rowH = innerH / rows.length
  const x = d3.scaleLinear().domain([0, 90]).range([0, innerW])

  const g = svg.append('g').attr('transform', `translate(${margin.left + labelW},${margin.top})`)

  g.append('line')
    .attr('x1', x(45))
    .attr('x2', x(45))
    .attr('y1', 0)
    .attr('y2', innerH)
    .attr('stroke', '#ddd')
    .attr('stroke-dasharray', '2 2')

  rows.slice(0, Math.floor(innerH / rowH)).forEach((row, i) => {
    const y = i * rowH
    svg.append('text')
      .attr('x', margin.left + labelW - 6)
      .attr('y', y + rowH / 2 + margin.top)
      .attr('dy', '0.32em')
      .attr('text-anchor', 'end')
      .attr('font-size', '9px')
      .attr('fill', '#555')
      .text(truncate(row.label, 17))

    g.selectAll('circle')
      .data(row.minutes)
      .join('circle')
      .attr('cx', m => x(m))
      .attr('cy', y + rowH / 2)
      .attr('r', 3)
      .attr('fill', '#1a56db')
      .attr('opacity', 0.5)
  })

  g.append('g')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickValues([0, 45, 90]).tickSize(0))
    .selectAll('text')
    .attr('font-size', '8px')
    .attr('fill', '#888')
}

function renderSeason(svg, label) {
  svg.append('text')
    .attr('x', W / 2)
    .attr('y', H / 2)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')
    .attr('font-family', "'Tourney', sans-serif")
    .attr('font-size', '52px')
    .attr('font-weight', 700)
    .attr('fill', '#1a56db')
    .text(label)
}

function render() {
  const target = el.value
  if (!target || !props.preview) return
  target.innerHTML = ''

  const svg = d3.select(target)
    .append('svg')
    .attr('viewBox', `0 0 ${W} ${H}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('width', '100%')
    .attr('height', '100%')

  const p = props.preview
  if (p.kind === 'bars') renderBars(svg, p.rows)
  else if (p.kind === 'groupedBars') renderGroupedBars(svg, p.rows)
  else if (p.kind === 'lines') renderLines(svg, p)
  else if (p.kind === 'squares') renderSquares(svg, p.rows)
  else if (p.kind === 'gantt') renderGantt(svg, p.rows)
  else if (p.kind === 'pyramid') renderPyramid(svg, p.rows)
  else if (p.kind === 'dots') renderDots(svg, p.rows)
  else if (p.kind === 'season') renderSeason(svg, p.label)
}

onMounted(render)
</script>

<style scoped>
.chart-preview {
  width: 100%;
  height: 100%;
}
.chart-preview svg {
  display: block;
}
</style>
