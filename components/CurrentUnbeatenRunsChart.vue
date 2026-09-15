<template>
  <div class="unbeaten-runs">
    <div class="legend">
      <span class="lg"><span class="cell l">L</span> last defeat</span>
      <span class="lg"><span class="cell w">W</span> win</span>
      <span class="lg"><span class="cell d">D</span> draw</span>
      <span class="lg"><span class="swatch"><span class="season-mark-static"></span></span> new season starts</span>
    </div>

    <div class="scroll">
      <div class="rows">
        <div v-for="row in rows" :key="row.team_abbr" class="row">
          <div class="team" :title="row.team_name">{{ row.team_name }}</div>
          <div class="strip">
            <div
              v-for="(cell, i) in row.cells"
              :key="i"
              class="cell"
              :class="cell.kind"
              @mousemove="showTooltip($event, cell)"
              @mouseleave="hideTooltip"
            >
              <span v-if="cell.isNewSeason" class="season-mark" title="New season starts"></span>
              {{ cell.label }}
            </div>
            <span v-if="row.cells.length === 0" class="none">no defeat on record</span>
          </div>
          <div class="count">{{ row.run_length }} unbeaten</div>
        </div>
      </div>
    </div>

    <div ref="tooltip" class="tooltip"></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  data: { type: Array, required: true }
})

const tooltip = ref(null)

function fmtDate(iso) {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00Z')
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

const rows = computed(() =>
  [...props.data]
    .sort((a, b) => {
      if (b.run_length !== a.run_length) return b.run_length - a.run_length
      const ad = a.last_loss_date ?? ''
      const bd = b.last_loss_date ?? ''
      if (ad !== bd) return ad < bd ? 1 : -1
      return a.team_name.localeCompare(b.team_name)
    })
    .map(row => {
      const results = row.results ? row.results.split(',') : []
      const opponents = row.opponents ? row.opponents.split(',') : []
      const scores = row.scores ? row.scores.split(',') : []
      const seasons = row.seasons ? row.seasons.split(',') : []
      const dates = row.dates ? row.dates.split(',') : []

      const cells = []
      if (row.last_loss_date) {
        cells.push({
          kind: 'l',
          label: 'L',
          title: `Last defeat: ${row.last_loss_opponent ?? ''} ${row.last_loss_score ?? ''}`,
          date: fmtDate(row.last_loss_date),
          season: null,
          isNewSeason: false
        })
      }
      results.forEach((r, i) => {
        cells.push({
          kind: r === 'W' ? 'w' : 'd',
          label: r,
          title: `${r === 'W' ? 'Beat' : 'Drew with'} ${opponents[i] ?? ''} ${scores[i] ?? ''}`,
          date: fmtDate(dates[i]),
          season: seasons[i] ?? '',
          isNewSeason: i > 0 && seasons[i] !== seasons[i - 1]
        })
      })

      return { ...row, cells }
    })
)

function showTooltip(event, cell) {
  const el = tooltip.value
  if (!el) return
  const season = cell.season ? ` · ${cell.season}` : ''
  el.innerHTML = `<strong>${cell.title}</strong> · ${cell.date}${season}`
  el.style.opacity = '1'
  const rect = event.currentTarget.getBoundingClientRect()
  const host = event.currentTarget.closest('.unbeaten-runs').getBoundingClientRect()
  el.style.left = `${rect.left - host.left + rect.width / 2}px`
  el.style.top = `${rect.top - host.top - 8}px`
}

function hideTooltip() {
  if (tooltip.value) tooltip.value.style.opacity = '0'
}
</script>

<style scoped>
.unbeaten-runs {
  position: relative;
}

.legend {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  font-size: 12px;
  color: #666;
}

.lg {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.scroll {
  overflow-x: auto;
  padding-bottom: 4px;
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: fit-content;
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.team {
  position: sticky;
  left: 0;
  flex: 0 0 168px;
  text-align: right;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #fff;
  padding-right: 8px;
  z-index: 2;
}

.strip {
  display: flex;
  align-items: center;
  gap: 3px;
}

.cell {
  width: 26px;
  height: 26px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  cursor: default;
  position: relative;
}

.cell.w {
  background: #2e7d32;
}

.cell.d {
  background: #9e9e9e;
}

.cell.l {
  background: #c62828;
}

.none {
  font-size: 12px;
  color: #999;
  font-style: italic;
}

.count {
  flex: 0 0 auto;
  font-size: 12px;
  color: #888;
  white-space: nowrap;
}

.season-mark {
  position: absolute;
  left: -4px;
  top: -3px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #1a237e;
  transform: rotate(45deg);
}

.swatch {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.season-mark-static {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 8px solid #1a237e;
  transform: rotate(45deg);
}

.tooltip {
  position: absolute;
  transform: translate(-50%, -100%);
  background: rgba(0, 0, 0, 0.88);
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.1s;
  white-space: nowrap;
  z-index: 10;
}
</style>
