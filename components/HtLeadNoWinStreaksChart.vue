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

const fmtDate = d3.timeFormat('%d %b %Y')

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const data = [...props.data].sort((a, b) => b.run_length - a.run_length || a.team_name.localeCompare(b.team_name))

  const width = target.clientWidth || 900
  const margin = { top: 24, right: 24, bottom: 40, left: 178 }
  const innerW = width - margin.left - margin.right
  const rowH = 22
  const innerH = data.length * rowH

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const y = d3.scaleBand()
    .domain(data.map(d => d.team_name))
    .range([0, innerH])
    .padding(0.28)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.run_length)])
    .range([0, innerW])

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).ticks(Math.max(1, d3.max(data, d => d.run_length))))

  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).tickSizeOuter(0))

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
    .style('max-width', '320px')

  chart.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', 0)
    .attr('y', d => y(d.team_name))
    .attr('width', d => x(d.run_length))
    .attr('height', y.bandwidth())
    .attr('rx', 3)
    .attr('fill', '#d97706')
    .attr('opacity', 0.85)
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${d.team_name}</strong> · ${d.run_length} ${d.run_length === 1 ? 'match' : 'matches'}<br>` +
          `${fmtDate(new Date(d.start_date + 'T00:00:00Z'))} → ${fmtDate(new Date(d.end_date + 'T00:00:00Z'))}<br>` +
          `vs ${d.opponents}`
        )
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  chart.selectAll('text.len')
    .data(data)
    .join('text')
    .attr('class', 'len')
    .attr('y', d => y(d.team_name) + y.bandwidth() / 2)
    .attr('dy', '0.32em')
    .attr('font-size', '10px')
    .attr('font-weight', 600)
    .text(d => d.run_length)
    .each(function (d) {
      const t = this
      const w = t.getComputedTextLength()
      const bw = x(d.run_length)
      if (bw > w + 16) {
        t.setAttribute('x', bw - 6)
        t.setAttribute('text-anchor', 'end')
        t.setAttribute('fill', '#fff')
      } else {
        t.setAttribute('x', bw + 6)
        t.setAttribute('text-anchor', 'start')
        t.setAttribute('fill', '#d97706')
      }
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
