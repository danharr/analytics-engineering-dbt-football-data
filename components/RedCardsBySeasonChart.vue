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

const RED_START = '2006-07'

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const rows = [...props.data].sort((a, b) => a.season_label.localeCompare(b.season_label))

  const width = target.getBoundingClientRect().width || target.clientWidth || 800
  const margin = { top: 20, right: 24, bottom: 52, left: 48 }
  const innerW = width - margin.left - margin.right
  const innerH = 360

  const x = d3.scaleBand()
    .domain(rows.map(d => d.season_label))
    .range([0, innerW])
    .padding(0.25)

  const y = d3.scaleLinear()
    .domain([0, d3.max(rows, d => d.red_cards) || 1])
    .nice()
    .range([innerH, 0])

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const isRecorded = d => d.season_label >= RED_START

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickValues(rows.map(d => d.season_label).filter((_, i) => i % 3 === 0)).tickSizeOuter(0))
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('transform', 'rotate(-35)')
    .attr('dx', '-0.5em')
    .attr('dy', '0.4em')

  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).ticks(6).tickSizeOuter(0))

  chart.append('text')
    .attr('x', -innerH / 2)
    .attr('y', -34)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('fill', '#555')
    .text('Red cards')

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

  chart.selectAll('rect')
    .data(rows)
    .join('rect')
    .attr('x', d => x(d.season_label))
    .attr('y', d => y(d.red_cards))
    .attr('width', x.bandwidth())
    .attr('height', d => innerH - y(d.red_cards))
    .attr('rx', 2)
    .attr('fill', d => (isRecorded(d) ? '#c62828' : '#cfd8dc'))
    .on('mousemove', function (event, d) {
      const bounds = target.getBoundingClientRect()
      const label = isRecorded(d)
        ? `${d.red_cards} red cards (${d.home_red_cards} home · ${d.away_red_cards} away)`
        : 'Red cards not recorded in the source data'
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${d.season_label}</strong><br>` +
          `${label}<br>` +
          `${d.matches} matches`
        )
        .style('left', (event.clientX - bounds.left + 12) + 'px')
        .style('top', (event.clientY - bounds.top - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  if (rows.some(r => !isRecorded(r))) {
    chart.append('line')
      .attr('x1', x('2005-06') + x.bandwidth())
      .attr('x2', x('2005-06') + x.bandwidth())
      .attr('y1', 0)
      .attr('y2', innerH)
      .attr('stroke', '#9e9e9e')
      .attr('stroke-dasharray', '4 4')
  }
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
