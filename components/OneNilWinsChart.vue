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

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const data = [...props.data].sort((a, b) =>
    b.pct_one_nil - a.pct_one_nil || b.total_wins - a.total_wins
  )

  const width = target.clientWidth || 900
  const margin = { top: 24, right: 60, bottom: 40, left: 190 }
  const innerW = width - margin.left - margin.right
  const rowH = 26
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
    .padding(0.3)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.pct_one_nil)])
    .range([0, innerW])

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).ticks(8).tickFormat(d => d + '%'))

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
    .attr('width', d => x(d.pct_one_nil))
    .attr('height', y.bandwidth())
    .attr('rx', 3)
    .attr('fill', '#0e9f6e')
    .attr('opacity', 0.9)
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${d.team_name}</strong><br>` +
          `${d.one_nil_wins} of ${d.total_wins} wins finished 1-0 (${d.pct_one_nil}%)<br>` +
          `${d.home_1_0_wins} home · ${d.away_1_0_wins} away`
        )
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  chart.selectAll('text.pct')
    .data(data)
    .join('text')
    .attr('class', 'pct')
    .attr('y', d => y(d.team_name) + y.bandwidth() / 2)
    .attr('dy', '0.32em')
    .attr('font-size', '11px')
    .attr('font-weight', 700)
    .attr('fill', '#0e9f6e')
    .text(d => `${d.pct_one_nil}%`)
    .attr('x', d => x(d.pct_one_nil) + 6)
    .attr('text-anchor', 'start')
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
