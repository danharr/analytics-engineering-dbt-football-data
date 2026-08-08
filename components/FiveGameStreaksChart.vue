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

const fmtDate = d3.timeFormat('%b %d, %Y')

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const data = [...props.data].sort((a, b) => {
    if (a.streak_start !== b.streak_start) return a.streak_start < b.streak_start ? 1 : -1
    return a.team_name.localeCompare(b.team_name)
  })

  const width = target.clientWidth || 900
  const margin = { top: 34, right: 56, bottom: 44, left: 158 }
  const innerW = width - margin.left - margin.right
  const rowH = 30
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
    .padding(0.35)

  const dates = data.map(d => new Date(d.streak_start))
  const x = d3.scaleTime()
    .domain([
      d3.timeDay.offset(d3.min(dates), -20),
      d3.timeDay.offset(d3.max(dates), 30)
    ])
    .range([0, innerW])

  const maxLen = d3.max(data, d => d.streak_length)
  const color = d3.scaleSequential(d3.interpolateOranges).domain([5, maxLen])
  const rOf = d => 4 + Math.sqrt(d.streak_length - 5) * 2

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).ticks(7))

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

  chart.selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(new Date(d.streak_start)))
    .attr('cy', d => y(d.team_name) + y.bandwidth() / 2)
    .attr('r', d => rOf(d))
    .attr('fill', d => color(d.streak_length))
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${d.team_name}</strong> · ${d.season_label}<br>` +
          `Started ${fmtDate(new Date(d.streak_start))} · ${d.streak_length}-game run<br>` +
          `Opponents: ${d.opponents}`
        )
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  chart.selectAll('text.len')
    .data(data)
    .join('text')
    .attr('class', 'len')
    .attr('x', d => x(new Date(d.streak_start)) + rOf(d) + 5)
    .attr('y', d => y(d.team_name) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('font-size', '11px')
    .attr('fill', '#666')
    .text(d => d.streak_length)

  const legend = svg.append('g')
    .attr('transform', `translate(${margin.left},10)`)
  legend.append('text')
    .attr('font-size', '11px')
    .attr('fill', '#555')
    .text('Streak length:')
  const legW = 120
  const legGrad = legend.append('defs').append('linearGradient')
    .attr('id', 'streakLenGrad')
    .attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')
  legGrad.append('stop').attr('offset', '0%').attr('stop-color', color(5))
  legGrad.append('stop').attr('offset', '100%').attr('stop-color', color(maxLen))
  legend.append('rect')
    .attr('x', 86)
    .attr('y', -8)
    .attr('width', legW)
    .attr('height', 8)
    .attr('rx', 4)
    .style('fill', 'url(#streakLenGrad)')
  legend.append('text').attr('x', 86).attr('y', 12).attr('font-size', '10px').attr('fill', '#777').text('5')
  legend.append('text').attr('x', 86 + legW).attr('y', 12).attr('font-size', '10px').attr('fill', '#777').attr('text-anchor', 'end').text(maxLen + '+')
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
