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

  const data = [...props.data].sort((a, b) => a.minute - b.minute)
  const peak = d3.max(data, d => d.matches) || 0

  const width = target.clientWidth || 900
  const margin = { top: 16, right: 12, bottom: 30, left: 40 }
  const innerW = width - margin.left - margin.right
  const innerH = 200

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const x = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([0, innerW])
    .padding(0.15)

  const y = d3.scaleLinear()
    .domain([0, Math.max(1, peak * 1.1)])
    .nice()
    .range([innerH, 0])

  const tickLabels = data
    .map(d => d.label)
    .filter(l => {
      if (l === '90+') return true
      const m = parseInt(l, 10)
      return m % 5 === 0
    })

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(
      d3.axisBottom(x)
        .tickValues(tickLabels)
        .tickSizeOuter(0)
    )
    .selectAll('text')
    .style('font-size', '10px')
    .style('fill', '#888')

  chart.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).ticks(5).tickSizeOuter(0).tickFormat(d3.format('d')))

  chart.append('line')
    .attr('x1', x('45') + x.bandwidth() / 2)
    .attr('x2', x('45') + x.bandwidth() / 2)
    .attr('y1', 0)
    .attr('y2', innerH)
    .attr('stroke', '#bbb')
    .attr('stroke-dasharray', '3 3')

  const tooltip = d3.select(target)
    .append('div')
    .style('position', 'absolute')
    .style('opacity', 0)
    .style('pointer-events', 'none')
    .style('background', 'rgba(0,0,0,0.88)')
    .style('color', '#fff')
    .style('padding', '6px 10px')
    .style('border-radius', '6px')
    .style('font-size', '12px')
    .style('z-index', 10)

  chart.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', d => x(d.label))
    .attr('y', d => y(d.matches))
    .attr('width', x.bandwidth())
    .attr('height', d => innerH - y(d.matches))
    .attr('fill', d => (d.matches === peak && peak > 0 ? '#e65100' : '#1e88e5'))
    .attr('opacity', 0.9)
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(`<strong>Minute ${d.label}</strong><br>${d.matches} match${d.matches === 1 ? '' : 'es'}`)
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))
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
