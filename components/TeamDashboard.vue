<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-shield-outline" class="mr-2"></v-icon>
          {{ team.name }}
        </v-card-title>
        <v-card-subtitle>
          One page per club: biggest wins, heaviest defeats, most red cards, biggest home attendances, all-time standing and manager history
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            {{ team.name }} sit {{ ordinal(tablePosition) }} in the all-time Premier League table with {{ fmt(points) }} points from {{ fmt(played) }} matches. Their biggest win is a {{ topWins[0].goals_for }}–{{ topWins[0].goals_against }} win over {{ topWins[0].opponent_name }} in {{ topWins[0].season_label }}. Every number below comes from the league's own data, covering all 34 seasons from 1992-93.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-calendar" class="mr-2"></v-icon>
          Seasons in the Premier League
        </v-card-title>
        <v-card-subtitle>Every {{ team.name }} season with their final position — one page per season</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Season</th>
                <th class="text-right">Final Position</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in teamSeasons" :key="row.label">
                <td>
                  <NuxtLink :to="`/seasons/${row.label}`">{{ row.label }} Season</NuxtLink>
                </td>
                <td class="text-right">{{ row.position ? ordinal(row.position) : '—' }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
          Top 5 Biggest Wins
        </v-card-title>
        <v-card-subtitle>Widest winning margins, most goals first on ties</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Date</th>
                <th class="text-left">Season</th>
                <th class="text-left">H/A</th>
                <th class="text-left">Opponent</th>
                <th class="text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in topWins" :key="row.kickoff_date + row.opponent_abbr">
                <td>{{ i + 1 }}</td>
                <td>{{ row.kickoff_date }}</td>
                <td>{{ row.season_label }}</td>
                <td>{{ row.is_home ? 'H' : 'A' }}</td>
                <td>{{ row.opponent_name }}</td>
                <td class="text-right"><strong>{{ row.goals_for }}–{{ row.goals_against }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-emoticon-sad-outline" class="mr-2"></v-icon>
          Top 5 Biggest Defeats
        </v-card-title>
        <v-card-subtitle>Heaviest losses, most goals conceded first on ties</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Date</th>
                <th class="text-left">Season</th>
                <th class="text-left">H/A</th>
                <th class="text-left">Opponent</th>
                <th class="text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in topDefeats" :key="row.kickoff_date + row.opponent_abbr">
                <td>{{ i + 1 }}</td>
                <td>{{ row.kickoff_date }}</td>
                <td>{{ row.season_label }}</td>
                <td>{{ row.is_home ? 'H' : 'A' }}</td>
                <td>{{ row.opponent_name }}</td>
                <td class="text-right"><strong>{{ row.goals_for }}–{{ row.goals_against }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-cards-club-outline" class="mr-2"></v-icon>
          Top 5 Most Red Cards
        </v-card-title>
        <v-card-subtitle>Most sendings-off for {{ team.name }} in a single match</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Date</th>
                <th class="text-left">Season</th>
                <th class="text-left">H/A</th>
                <th class="text-left">Opponent</th>
                <th class="text-right">Score</th>
                <th class="text-right">Red Cards</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in topReds" :key="row.kickoff_date + row.opponent_abbr">
                <td>{{ i + 1 }}</td>
                <td>{{ row.kickoff_date }}</td>
                <td>{{ row.season_label }}</td>
                <td>{{ row.is_home ? 'H' : 'A' }}</td>
                <td>{{ row.opponent_name }}</td>
                <td class="text-right">{{ row.goals_for }}–{{ row.goals_against }}</td>
                <td class="text-right"><strong>{{ row.red_cards }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-stadium" class="mr-2"></v-icon>
          Top 5 Home Attendances
        </v-card-title>
        <v-card-subtitle>Biggest crowds for a {{ team.name }} home game (attendance not recorded behind closed doors in 2020-21)</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Date</th>
                <th class="text-left">Season</th>
                <th class="text-left">Opponent</th>
                <th class="text-right">Score</th>
                <th class="text-right">Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in topAttendance" :key="row.kickoff_date + row.opponent_abbr">
                <td>{{ i + 1 }}</td>
                <td>{{ row.kickoff_date }}</td>
                <td>{{ row.season_label }}</td>
                <td>{{ row.opponent_name }}</td>
                <td class="text-right">{{ row.goals_for }}–{{ row.goals_against }}</td>
                <td class="text-right"><strong>{{ fmt(row.attendance) }}</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.teamMatches" />
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-table-large" class="mr-2"></v-icon>
          All-Time Premier League Table
        </v-card-title>
        <v-card-subtitle>{{ team.name }} highlighted in their colours</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Pos</th>
                <th class="text-left">Team</th>
                <th class="text-right">Played</th>
                <th class="text-right">W</th>
                <th class="text-right">D</th>
                <th class="text-right">L</th>
                <th class="text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in allTime"
                :key="row.team_abbr"
                :style="row.team_abbr === team.abbr ? 'background-color: ' + colour + '; color: #fff; font-weight: 700;' : ''"
              >
                <td>{{ i + 1 }}</td>
                <td>{{ row.team_name }}</td>
                <td class="text-right">{{ row.matches_played }}</td>
                <td class="text-right">{{ row.wins }}</td>
                <td class="text-right">{{ row.draws }}</td>
                <td class="text-right">{{ row.losses }}</td>
                <td class="text-right">{{ row.points }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.allTimeTable" />
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-chart-gantt" class="mr-2"></v-icon>
          {{ team.name }} Manager Timeline
        </v-card-title>
        <v-card-subtitle>
          Every {{ team.name }} manager since 1992 · faded = caretaker · hover for dates
        </v-card-subtitle>
        <v-card-text>
          <ManagerTimelineChart :data="teamTimeline" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-account-tie-outline" class="mr-2"></v-icon>
          Manager History
        </v-card-title>
        <v-card-subtitle>Every {{ team.name }} manager since 1992, linked to their page where one exists</v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Manager</th>
                <th class="text-left">From</th>
                <th class="text-left">Until</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in managerHistory" :key="m.manager_name">
                <td>
                  <NuxtLink
                    v-if="managerSlug(m.manager_name)"
                    :to="`/managers/${managerSlug(m.manager_name)}`"
                  >{{ m.manager_name }}</NuxtLink>
                  <span v-else>{{ m.manager_name }}</span>
                </td>
                <td>{{ m.from_date }}</td>
                <td>{{ m.present ? 'Present' : m.until_date }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.managerTimeline" />
    </v-col>
  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { computed } from 'vue'
import { teamMatches, allTime, seasonTable, managerTimeline, sqlQueries } from '~/composables/useData'
import { teamColour } from '~/composables/teamColours'
import { managerSlug } from '~/utils/managerPages'

const props = defineProps({
  team: { type: Object, required: true }
})

const team = props.team
const colour = teamColour(team.name)

const matches = computed(() => teamMatches.filter(m => m.team_abbr === team.abbr))

const topWins = computed(() =>
  [...matches.value]
    .sort((a, b) => b.goal_diff - a.goal_diff || b.goals_for - a.goals_for || (a.kickoff_date < b.kickoff_date ? 1 : -1))
    .slice(0, 5)
)

const topDefeats = computed(() =>
  [...matches.value]
    .sort((a, b) => a.goal_diff - b.goal_diff || a.goals_for - b.goals_for || (a.kickoff_date < b.kickoff_date ? 1 : -1))
    .slice(0, 5)
)

const topReds = computed(() =>
  [...matches.value]
    .filter(m => m.red_cards > 0)
    .sort((a, b) => b.red_cards - a.red_cards || (a.kickoff_date < b.kickoff_date ? 1 : -1))
    .slice(0, 5)
)

const topAttendance = computed(() =>
  [...matches.value]
    .filter(m => m.is_home === 1 && m.attendance !== null)
    .sort((a, b) => b.attendance - a.attendance || (a.kickoff_date < b.kickoff_date ? 1 : -1))
    .slice(0, 5)
)

const tablePosition = computed(() => allTime.findIndex(r => r.team_abbr === team.abbr) + 1)
const points = computed(() => allTime.find(r => r.team_abbr === team.abbr)?.points ?? 0)
const played = computed(() => allTime.find(r => r.team_abbr === team.abbr)?.matches_played ?? 0)

const teamTimeline = computed(() => managerTimeline.filter(m => m.team_name === team.name))

const teamSeasons = computed(() => {
  const labels = [...new Set(matches.value.map(m => m.season_label))]
    .sort((a, b) => parseInt(a.split('-')[0]) - parseInt(b.split('-')[0]))
  return labels.map(label => ({
    label,
    position: seasonTable.find(r => r.team_abbr === team.abbr && r.season_label === label)?.position ?? null
  }))
})

const managerHistory = computed(() => {
  const byManager = new Map()
  for (const row of teamTimeline.value) {
    const existing = byManager.get(row.manager_name)
    if (!existing) {
      byManager.set(row.manager_name, { ...row })
    } else {
      if (row.from_date < existing.from_date) existing.from_date = row.from_date
      if (row.present) existing.present = 1
      if (row.until_date > existing.until_date) existing.until_date = row.until_date
    }
  }
  return [...byManager.values()].sort((a, b) => a.from_date.localeCompare(b.from_date))
})

const fmt = d3.format(',')

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}
</script>
