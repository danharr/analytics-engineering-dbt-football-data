<template>
  <div class="chart-preview">
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <line
        v-for="(line, i) in model.lines"
        :key="`line-${i}`"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        :stroke="line.stroke"
        :stroke-dasharray="line.dash"
      />
      <rect
        v-for="(rect, i) in model.rects"
        :key="`rect-${i}`"
        :x="rect.x"
        :y="rect.y"
        :width="rect.width"
        :height="rect.height"
        :rx="rect.rx"
        :fill="rect.fill"
        :opacity="rect.opacity"
        :stroke="rect.stroke"
      />
      <polyline
        v-for="(line, i) in model.polylines"
        :key="`poly-${i}`"
        :points="line.points"
        fill="none"
        :stroke="line.stroke"
        stroke-width="1.5"
      />
      <circle
        v-for="(dot, i) in model.circles"
        :key="`dot-${i}`"
        :cx="dot.cx"
        :cy="dot.cy"
        :r="dot.r"
        :fill="dot.fill"
        :opacity="dot.opacity"
      />
      <text
        v-for="(text, i) in model.texts"
        :key="`text-${i}`"
        :x="text.x"
        :y="text.y"
        :text-anchor="text.anchor"
        :font-size="text.size ?? 9"
        :font-weight="text.weight"
        :fill="text.fill ?? '#555'"
        :font-family="text.family"
        :dominant-baseline="text.baseline"
      >{{ text.text }}</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ThumbnailPreview } from '~/utils/thumbnailTypes'

const props = defineProps<{ preview: ThumbnailPreview }>()

const W = 320
const H = 180

const truncate = (value: string, max: number) =>
  value.length > max ? `${value.slice(0, max - 1)}\u2026` : value

const round = (value: number) => Math.round(value * 100) / 100

interface RectModel {
  x: number
  y: number
  width: number
  height: number
  rx?: number
  fill: string
  opacity?: number
  stroke?: string
}

interface LineModel {
  x1: number
  y1: number
  x2: number
  y2: number
  stroke: string
  dash?: string
}

interface PolylineModel {
  points: string
  stroke: string
}

interface CircleModel {
  cx: number
  cy: number
  r: number
  fill: string
  opacity?: number
}

interface TextModel {
  x: number
  y: number
  text: string
  anchor?: 'start' | 'middle' | 'end'
  size?: number
  weight?: number
  fill?: string
  family?: string
  baseline?: string
}

const model = computed(() => {
  const rects: RectModel[] = []
  const lines: LineModel[] = []
  const polylines: PolylineModel[] = []
  const circles: CircleModel[] = []
  const texts: TextModel[] = []
  const preview = props.preview

  if (preview.kind === 'bars') {
    const margin = { top: 8, right: 8, bottom: 8, left: 6 }
    const labelW = 92
    const barW = W - margin.left - margin.right - labelW - 28
    const innerH = H - margin.top - margin.bottom
    const rows = preview.rows
    const count = Math.max(1, rows.length)
    const step = innerH / Math.max(1, count - 0.26 + 0.52)
    const bandwidth = step * 0.74
    const offset = step * 0.26
    const max = Math.max(...rows.map(r => r.value), 1)
    const x = (value: number) => (value / max) * barW

    rows.forEach((row, i) => {
      const y = offset + i * step
      const valueWidth = Math.max(2, x(row.value))
      texts.push({
        x: margin.left + labelW - 6,
        y: margin.top + y + bandwidth / 2 + 3,
        text: truncate(row.label, 17),
        anchor: 'end',
        size: 9,
        fill: '#555'
      })
      rects.push({
        x: margin.left + labelW,
        y: margin.top + y,
        width: valueWidth,
        height: bandwidth,
        rx: 2,
        fill: '#1a56db',
        opacity: 0.9
      })
      texts.push({
        x: margin.left + labelW + valueWidth + 4,
        y: margin.top + y + bandwidth / 2 + 3,
        text: row.display,
        size: 9,
        weight: 600,
        fill: '#333'
      })
    })
  } else if (preview.kind === 'groupedBars') {
    const margin = { top: 8, right: 8, bottom: 16, left: 6 }
    const innerW = W - margin.left - margin.right
    const innerH = H - margin.top - margin.bottom
    const rows = preview.rows
    const count = Math.max(1, rows.length)
    const step = innerW / Math.max(1, count - 0.15 + 0.3)
    const bandwidth = step * 0.85
    const offset = step * 0.15
    const max = Math.max(...rows.flatMap(r => [r.a, r.b]), 1)
    const y = (value: number) => innerH - (value / max) * innerH
    const subStep = bandwidth / Math.max(1, 2 - 0.15 + 0.3)
    const subBandwidth = subStep * 0.85
    const subOffset = subStep * 0.15

    rows.forEach((row, i) => {
      const groupX = margin.left + offset + i * step
      const values = [
        { value: row.a, fill: '#4f46e5' },
        { value: row.b, fill: '#10b981' }
      ]
      values.forEach((entry, j) => {
        const barX = groupX + subOffset + j * subStep
        rects.push({
          x: barX,
          y: margin.top + y(entry.value),
          width: subBandwidth,
          height: innerH - y(entry.value),
          rx: 1,
          fill: entry.fill
        })
      })
      if (i % 5 === 0) {
        texts.push({
          x: groupX + bandwidth / 2,
          y: margin.top + innerH + 12,
          text: row.label,
          anchor: 'middle',
          size: 8,
          fill: '#888'
        })
      }
    })
  } else if (preview.kind === 'lines') {
    const margin = { top: 8, right: 8, bottom: 16, left: 30 }
    const innerW = W - margin.left - margin.right
    const innerH = H - margin.top - margin.bottom
    const labels = preview.xLabels
    const count = Math.max(1, labels.length)
    const step = innerW / count
    const offset = step * 0.5
    const x = (i: number) => offset + i * step
    const values = preview.series.flatMap(s => s.points.filter((v): v is number => v != null))
    const rawMax = Math.max(...values, 1)
    const yMax = rawMax * 1.05
    const y = (value: number) => innerH - (value / yMax) * innerH
    const colors = [
      '#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f',
      '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab'
    ]
    const formatTick = (value: number) => {
      if (value >= 1_000_000) return `${Math.round(value / 1_000_000)}M`
      if (value >= 1_000) return `${Math.round(value / 1_000)}k`
      return `${Math.round(value)}`
    }

    preview.series.forEach((series, seriesIndex) => {
      let run: string[] = []
      const flush = () => {
        if (run.length > 1) {
          polylines.push({ points: run.join(' '), stroke: colors[seriesIndex % colors.length]! })
        }
        run = []
      }
      series.points.forEach((value, i) => {
        if (value == null) {
          flush()
          return
        }
        run.push(`${round(margin.left + x(i))},${round(margin.top + y(value))}`)
      })
      flush()
    })

    ;[0, rawMax / 2, rawMax].forEach((value) => {
      texts.push({
        x: margin.left - 4,
        y: margin.top + y(value) + 3,
        text: formatTick(value),
        anchor: 'end',
        size: 8,
        fill: '#888'
      })
    })

    labels.forEach((label, i) => {
      if (i % 6 === 0) {
        texts.push({
          x: margin.left + x(i),
          y: margin.top + innerH + 12,
          text: label,
          anchor: 'middle',
          size: 8,
          fill: '#888'
        })
      }
    })
  } else if (preview.kind === 'squares') {
    const margin = { top: 8, right: 8, bottom: 8, left: 6 }
    const labelW = 92
    const cellSize = 20
    const gap = 4
    const rowH = 30
    const rows = preview.rows
    const maxCells = Math.min(8, Math.max(...rows.map(r => r.cells.length), 0))
    const visibleRows = rows.slice(0, Math.floor((H - margin.top - margin.bottom) / rowH))

    visibleRows.forEach((row, i) => {
      const y = i * rowH
      texts.push({
        x: margin.left + labelW - 6,
        y: margin.top + y + rowH / 2 + 3,
        text: truncate(row.label, 17),
        anchor: 'end',
        size: 9,
        fill: '#555'
      })
      row.cells.slice(0, maxCells).forEach((cell, j) => {
        const cellX = margin.left + labelW + j * (cellSize + gap)
        rects.push({
          x: cellX,
          y: margin.top + y + (rowH - cellSize) / 2,
          width: cellSize,
          height: cellSize,
          rx: 3,
          fill: '#e8f0fe',
          stroke: '#bcd2f5'
        })
        texts.push({
          x: cellX + cellSize / 2,
          y: margin.top + y + rowH / 2 + 2.5,
          text: cell,
          anchor: 'middle',
          size: 7,
          weight: 700,
          fill: '#1a56db'
        })
      })
    })
  } else if (preview.kind === 'gantt') {
    const margin = { top: 8, right: 8, bottom: 8, left: 6 }
    const labelW = 92
    const innerW = W - margin.left - margin.right - labelW
    const innerH = H - margin.top - margin.bottom
    const rows = preview.rows
    const rowH = innerH / Math.max(1, rows.length)

    rows.forEach((row, i) => {
      const y = i * rowH
      texts.push({
        x: margin.left + labelW - 6,
        y: margin.top + y + rowH / 2 + 3,
        text: truncate(row.label, 17),
        anchor: 'end',
        size: 9,
        fill: '#555'
      })
      row.bars.forEach((bar) => {
        const start = bar.start * innerW
        const end = bar.end * innerW
        rects.push({
          x: margin.left + labelW + start,
          y: margin.top + y + rowH * 0.22,
          width: Math.max(2, end - start),
          height: rowH * 0.56,
          rx: 1.5,
          fill: '#0e9f6e',
          opacity: 0.72
        })
      })
    })
  } else if (preview.kind === 'pyramid') {
    const margin = { top: 10, right: 8, bottom: 8, left: 8 }
    const innerW = W - margin.left - margin.right
    const innerH = H - margin.top - margin.bottom
    const centerX = innerW / 2
    const gutter = 3
    const rows = preview.rows
    const count = Math.max(1, rows.length)
    const step = innerH / Math.max(1, count - 0.18 + 0.36)
    const bandwidth = step * 0.82
    const offset = step * 0.18
    const max = Math.max(...rows.flatMap(r => [r.left, r.right]), 1)
    const leftEdge = centerX - gutter
    const rightEdge = centerX + gutter

    rows.forEach((row, i) => {
      const y = offset + i * step
      const leftWidth = (row.left / max) * leftEdge
      const rightWidth = (row.right / max) * (innerW - rightEdge)
      rects.push({
        x: margin.left + leftEdge - leftWidth,
        y: margin.top + y,
        width: leftWidth,
        height: bandwidth,
        fill: '#c62828',
        opacity: 0.9
      })
      rects.push({
        x: margin.left + rightEdge,
        y: margin.top + y,
        width: rightWidth,
        height: bandwidth,
        fill: '#1e88e5',
        opacity: 0.9
      })
    })

    lines.push({
      x1: margin.left + centerX,
      y1: margin.top,
      x2: margin.left + centerX,
      y2: margin.top + innerH,
      stroke: '#bbb'
    })
    texts.push({ x: margin.left, y: margin.top - 2, text: 'H', size: 7, fill: '#c62828' })
    texts.push({
      x: margin.left + innerW,
      y: margin.top - 2,
      text: 'A',
      anchor: 'end',
      size: 7,
      fill: '#1e88e5'
    })
  } else if (preview.kind === 'dots') {
    const margin = { top: 8, right: 8, bottom: 14, left: 6 }
    const labelW = 92
    const innerW = W - margin.left - margin.right - labelW
    const innerH = H - margin.top - margin.bottom
    const rows = preview.rows
    const rowH = innerH / Math.max(1, rows.length)
    const x = (minute: number) => (minute / 90) * innerW

    lines.push({
      x1: margin.left + labelW + x(45),
      y1: margin.top,
      x2: margin.left + labelW + x(45),
      y2: margin.top + innerH,
      stroke: '#ddd',
      dash: '2 2'
    })

    rows.slice(0, Math.floor(innerH / rowH)).forEach((row, i) => {
      const y = i * rowH
      texts.push({
        x: margin.left + labelW - 6,
        y: margin.top + y + rowH / 2 + 3,
        text: truncate(row.label, 17),
        anchor: 'end',
        size: 9,
        fill: '#555'
      })
      row.minutes.forEach((minute) => {
        circles.push({
          cx: margin.left + labelW + x(minute),
          cy: margin.top + y + rowH / 2,
          r: 3,
          fill: '#1a56db',
          opacity: 0.5
        })
      })
    })

    ;[0, 45, 90].forEach((minute) => {
      texts.push({
        x: margin.left + labelW + x(minute),
        y: margin.top + innerH + 12,
        text: `${minute}`,
        anchor: 'middle',
        size: 8,
        fill: '#888'
      })
    })
  } else {
    texts.push({
      x: W / 2,
      y: H / 2,
      text: preview.label,
      anchor: 'middle',
      size: 52,
      weight: 700,
      fill: '#1a56db',
      family: 'Arial, Helvetica, sans-serif',
      baseline: 'central'
    })
  }

  return { rects, lines, polylines, circles, texts }
})
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
