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

  const data = [...props.data].sort((a, b) =>
    b.chaos_score - a.chaos_score || (a.kickoff_date < b.kickoff_date ? -1 : 1)
  )

  const width = target.clientWidth || 900
  const margin = { top: 34, right: 44, bottom: 40, left: 130 }
  const innerW = width - margin.left - margin.right
  const rowH = 20
  const innerH = data.length * rowH

  const svg = d3.select(target)
    .append('svg')
    .attr('width', width)
    .attr('height', innerH + margin.top + margin.bottom)

  const chart = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const y = d3.scaleBand()
    .domain(data.map(d => matchLabel(d)))
    .range([0, innerH])
    .padding(0.2)

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.chaos_score)])
    .range([0, innerW])

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${innerH})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).ticks(8))

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
    .style('max-width', '340px')

  chart.selectAll('rect.goals')
    .data(data)
    .join('rect')
    .attr('class', 'goals')
    .attr('x', 0)
    .attr('y', d => y(matchLabel(d)))
    .attr('width', d => x(d.goals_points))
    .attr('height', y.bandwidth())
    .attr('fill', '#1a56db')
    .attr('opacity', 0.9)
    .on('mousemove', function (event, d) {
      showTooltip(event, tooltip, d)
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  chart.selectAll('rect.reds')
    .data(data)
    .join('rect')
    .attr('class', 'reds')
    .attr('x', d => x(d.goals_points))
    .attr('y', d => y(matchLabel(d)))
    .attr('width', d => x(d.red_points))
    .attr('height', y.bandwidth())
    .attr('fill', '#e02424')
    .attr('opacity', 0.9)
    .on('mousemove', function (event, d) {
      showTooltip(event, tooltip, d)
    })
    .on('mouseleave', () => tooltip.style('opacity', 0))

  chart.selectAll('text.total')
    .data(data)
    .join('text')
    .attr('class', 'total')
    .attr('y', d => y(matchLabel(d)) + y.bandwidth() / 2)
    .attr('dy', '0.32em')
    .attr('font-size', '10px')
    .attr('font-weight', 700)
    .attr('fill', '#1f2937')
    .text(d => d.chaos_score)
    .each(function (d) {
      const t = this
      const w = t.getComputedTextLength()
      const bw = x(d.chaos_score)
      if (bw > w + 14) {
        t.setAttribute('x', bw - 6)
        t.setAttribute('text-anchor', 'end')
        t.setAttribute('fill', '#fff')
      } else {
        t.setAttribute('x', bw + 6)
        t.setAttribute('text-anchor', 'start')
      }
    })

  const legend = svg.append('g')
    .attr('transform', `translate(${margin.left},12)`)
  legend.append('rect').attr('x', 0).attr('y', -8).attr('width', 12).attr('height', 8).attr('rx', 2).attr('fill', '#1a56db')
  legend.append('text').attr('x', 18).attr('y', 0).attr('font-size', '11px').attr('fill', '#555').text('Goals (3 pts each)')
  legend.append('rect').attr('x', 150).attr('y', -8).attr('width', 12).attr('height', 8).attr('rx', 2).attr('fill', '#e02424')
  legend.append('text').attr('x', 168).attr('y', 0).attr('font-size', '11px').attr('fill', '#555').text('Red cards (2 pts each)')
}

function matchLabel(d) {
  return `${d.home_team_abbr} ${d.home_score}-${d.away_score} ${d.away_team_abbr}`
}

function showTooltip(event, tooltip, d) {
  tooltip
    .style('opacity', 1)
    .html(
      `<strong>${d.home_team_name} ${d.home_score}-${d.away_score} ${d.away_team_name}</strong> · ${fmtDate(new Date(d.kickoff_date + 'T00:00:00Z'))} · ${d.season_label}<br>` +
      `${d.total_goals} goals × 3 = ${d.goals_points} pts<br>` +
      `${d.total_red_cards} ${d.total_red_cards === 1 ? 'red card' : 'red cards'} × 2 = ${d.red_points} pts<br>` +
      `<strong>Chaos score: ${d.chaos_score}</strong>`
    )
    .style('left', (event.offsetX + 12) + 'px')
    .style('top', (event.offsetY - 10) + 'px')
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
