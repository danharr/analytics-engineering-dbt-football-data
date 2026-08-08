<template>
  <div class="chart-wrap" ref="el">
    <div class="bws-scroll">
      <div v-for="s in streaks" :key="s.streak_id" class="bws-row">
        <div class="bws-team">
          <strong>{{ s.team_name }}</strong>
          <span>{{ s.season_label }} · {{ s.streak_length }} wins</span>
        </div>
        <div class="bws-squares">
          <div
            v-for="(g, i) in s.games"
            :key="i"
            class="bws-square"
            :style="{ width: sq + 'px', height: sq + 'px' }"
            :title="`${s.team_name} ${g.score} ${g.opponent_name} · ${g.match_date}`"
          >
            <span class="bws-date">{{ g.match_date }}</span>
            <span class="bws-opp">{{ g.opponent_abbr }}</span>
            <span class="bws-score">{{ g.score }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  data: { type: Array, required: true }
})

const el = ref(null)
const LABEL_COL = 128
const GAP = 4
const sq = ref(48)

const streaks = computed(() => {
  const map = new Map()
  for (const g of props.data) {
    let s = map.get(g.streak_id)
    if (!s) {
      s = {
        streak_id: g.streak_id,
        team_name: g.team_name,
        season_label: g.season_label,
        streak_length: g.streak_length,
        games: []
      }
      map.set(g.streak_id, s)
    }
    s.games.push(g)
  }
  return [...map.values()]
})

const maxLen = computed(() =>
  props.data.length ? Math.max(...props.data.map(d => d.streak_length)) : 1
)

function computeSize() {
  if (!el.value || !maxLen.value) return
  const w = el.value.clientWidth
  const gaps = (maxLen.value - 1) * GAP
  const target = Math.floor((w - LABEL_COL - gaps) / maxLen.value)
  sq.value = Math.min(60, Math.max(40, target))
}

const onResize = () => computeSize()

onMounted(() => {
  computeSize()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.bws-scroll {
  overflow-x: auto;
  padding-bottom: 4px;
}
.bws-row {
  display: flex;
  align-items: stretch;
  gap: 8px;
  padding: 6px 0;
}
.bws-team {
  width: 128px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.25;
}
.bws-team strong {
  font-size: 13px;
  color: #1f2937;
}
.bws-team span {
  font-size: 11px;
  color: #9ca3af;
}
.bws-squares {
  display: flex;
  gap: 4px;
}
.bws-square {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 6px;
  background: #e8f0fe;
  border: 1px solid #bcd2f5;
  color: #1a56db;
  cursor: help;
  transition: transform 0.1s ease;
}
.bws-square:hover {
  transform: scale(1.06);
  border-color: #1a56db;
}
.bws-date {
  font-size: 7px;
  color: #6b7280;
  line-height: 1;
  white-space: nowrap;
}
.bws-opp {
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}
.bws-score {
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
}
</style>
