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

  const rows = [...props.data].sort((a, b) => a.season_label.localeCompare(b.season_label))
  const champion = rows.find(r => r.excitement_rank === 1)

  const width = target.getBoundingClientRect().width || target.clientWidth || 800
  const margin = { top: 20, right: 24, bottom: 46, left: 52 }
  const innerW = width - margin.left - margin.right
  const innerH = 380

  const x = d3.scalePoint().domain(rows.map(d => d.season_label)).range([0, innerW])
  const yMin = d3.min(rows, d => d.goals_per_game)
  const yMax = d3.max(rows, d => d.goals_per_game)
  const y = d3.scaleLinear().domain([Math.floor((yMin - 0.15) * 10) / 10, yMax + 0.15]).range([innerH, 0])

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const line = d3.line()
    .x(d => x(d.season_label))
    .y(d => y(d.goals_per_game))

  chart.append('path')
    .datum(rows)
    .attr('fill', 'none')
    .attr('stroke', '#1a56db')
    .attr('stroke-width', 2.5)
    .attr('d', line)

  chart.selectAll('circle.dot')
    .data(rows)
    .join('circle')
    .attr('class', 'dot')
    .attr('cx', d => x(d.season_label))
    .attr('cy', d => y(d.goals_per_game))
    .attr('r', d => d.excitement_rank === 1 ? 6 : 3.5)
    .attr('fill', d => d.excitement_rank === 1 ? '#d97706' : '#1a56db')
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)

  if (champion) {
    chart.append('text')
      .attr('x', x(champion.season_label))
      .attr('y', y(champion.goals_per_game) - 14)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', 700)
      .attr('fill', '#d97706')
      .text('Most exciting')
  }

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickValues(rows.map(d => d.season_label).filter((_, i) => i % 4 === 0)).tickSizeOuter(0))
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
    .attr('y', -38)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('fill', '#555')
    .text('Goals per game')

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

  chart.selectAll('circle.dot')
    .on('mousemove', function (event, d) {
      const bounds = target.getBoundingClientRect()
      tooltip
        .style('opacity', 1)
        .html(
          `<strong>${d.season_label}</strong><br>` +
          `${d.goals_per_game} goals per game · ${d.nil_nils} nil-nils · ${d.draw_pct}% draws`
        )
        .style('left', (event.clientX - bounds.left + 12) + 'px')
        .style('top', (event.clientY - bounds.top - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))
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
