<template>
  <div class="chart-wrap" ref="el"></div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  data: { type: Array, required: true },
  maxVal: { type: Number, default: null }
})

const el = ref(null)

const HOME_COLOR = '#c62828'
const AWAY_COLOR = '#1e88e5'

function renderChart() {
  const target = el.value
  if (!target || !props.data.length) return
  target.innerHTML = ''

  const data = [...props.data].sort((a, b) => b.minute - a.minute)

  const width = target.clientWidth || 900
  const margin = { top: 30, right: 36, bottom: 28, left: 36 }
  const innerW = width - margin.left - margin.right
  const step = 18
  const innerH = data.length * step

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const centerX = innerW / 2
  const gutter = 20

  const y = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([0, innerH])
    .padding(0.15)

  const dataMax = d3.max(data, d => Math.max(d.home_goals, d.away_goals)) || 1
  const maxVal = props.maxVal ?? dataMax

  const xLeft = d3.scaleLinear().domain([0, maxVal]).range([centerX - gutter, 0])
  const xRight = d3.scaleLinear().domain([0, maxVal]).range([centerX + gutter, innerW])

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

  chart.selectAll('rect.home')
    .data(data)
    .join('rect')
    .attr('class', 'home')
    .attr('x', d => xLeft(d.home_goals))
    .attr('y', d => y(d.label))
    .attr('width', d => Math.max(0, (centerX - gutter) - xLeft(d.home_goals)))
    .attr('height', y.bandwidth())
    .attr('fill', HOME_COLOR)
    .attr('opacity', 0.9)
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(`<strong>Minute ${d.label}</strong><br>Home: ${d.home_goals} · Away: ${d.away_goals}`)
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  chart.selectAll('rect.away')
    .data(data)
    .join('rect')
    .attr('class', 'away')
    .attr('x', centerX + gutter)
    .attr('y', d => y(d.label))
    .attr('width', d => Math.max(0, xRight(d.away_goals) - (centerX + gutter)))
    .attr('height', y.bandwidth())
    .attr('fill', AWAY_COLOR)
    .attr('opacity', 0.9)
    .on('mousemove', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(`<strong>Minute ${d.label}</strong><br>Home: ${d.home_goals} · Away: ${d.away_goals}`)
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 10) + 'px')
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  chart.append('line')
    .attr('x1', centerX)
    .attr('x2', centerX)
    .attr('y1', 0)
    .attr('y2', innerH)
    .attr('stroke', '#bbb')

  chart.selectAll('text.minlabel')
    .data(data)
    .join('text')
    .attr('class', 'minlabel')
    .attr('x', centerX)
    .attr('y', d => y(d.label) + y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .attr('text-anchor', 'middle')
    .attr('font-size', '9px')
    .attr('fill', '#777')
    .text(d => d.label)

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(xLeft).tickSizeOuter(0).ticks(Math.min(maxVal, 5)))
    .selectAll('text')
    .attr('font-size', '10px')
    .attr('fill', '#888')

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(xRight).tickSizeOuter(0).ticks(Math.min(maxVal, 5)))
    .selectAll('text')
    .attr('font-size', '10px')
    .attr('fill', '#888')

  chart.append('text')
    .attr('x', 0)
    .attr('y', -14)
    .attr('font-size', '12px')
    .attr('font-weight', 700)
    .attr('fill', HOME_COLOR)
    .text('Home goals')

  chart.append('text')
    .attr('x', innerW)
    .attr('y', -14)
    .attr('font-size', '12px')
    .attr('font-weight', 700)
    .attr('fill', AWAY_COLOR)
    .attr('text-anchor', 'end')
    .text('Away goals')
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
