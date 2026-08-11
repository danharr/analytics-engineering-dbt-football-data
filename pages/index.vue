<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="stat-card text-center pa-3">
            <v-card-text>
              <div class="stat-value" style="color: #1a56db;">{{ fmt(stats.total_matches) }}</div>
              <div class="stat-label">Total Matches Analysed</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="stat-card text-center pa-3">
            <v-card-text>
              <div class="stat-value" style="color: #0e9f6e;">{{ fmt(stats.total_unique_teams) }}</div>
              <div class="stat-label">Total Unique Teams</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="stat-card text-center pa-3">
            <v-card-text>
              <div class="stat-value" style="color: #d97706;">{{ fmt(stats.total_goals) }}</div>
              <div class="stat-label">Total Goals Scored</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-folder-open-outline" class="mr-2"></v-icon>
          Index of /charts
        </v-card-title>
        <v-card-text>
          <div class="dir-listing">
            <div class="dir-header">
              Premier League data charts · select a page below
            </div>
            <v-row>
              <v-col cols="12" md="6">
                <div class="dir-header mt-3">By team</div>
                <div class="dir-row" v-for="entry in teamEntries" :key="entry.path">
                  <NuxtLink :to="entry.path">{{ entry.label }}</NuxtLink>
                  <span class="dots"></span>
                  <span class="path">{{ entry.path }}</span>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="dir-header mt-3">By manager</div>
                <div class="dir-row" v-for="entry in managerEntries" :key="entry.path">
                  <NuxtLink :to="entry.path">{{ entry.label }}</NuxtLink>
                  <span class="dots"></span>
                  <span class="path">{{ entry.path }}</span>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="dir-header mt-3">By season</div>
                <div class="dir-row" v-for="entry in seasonEntries" :key="entry.path">
                  <NuxtLink :to="entry.path">{{ entry.label }}</NuxtLink>
                  <span class="dots"></span>
                  <span class="path">{{ entry.path }}</span>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="dir-header mt-3">Other</div>
                <div class="dir-row" v-for="entry in otherEntries" :key="entry.path">
                  <NuxtLink :to="entry.path">{{ entry.label }}</NuxtLink>
                  <span class="dots"></span>
                  <span class="path">{{ entry.path }}</span>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-cog-outline" class="mr-2"></v-icon>
          How this site is built
        </v-card-title>
        <v-card-text>
          <p class="mb-4">
            Every chart on this site is generated from the Premier League's public API by a
            repeatable pipeline, <strong>scrape → DuckDB → dbt → CSV → static site</strong>. When
            data updates, <code>./update_all_charts.sh</code> rebuilds everything from source.
          </p>
          <v-list density="compact">
            <v-list-item>
              <v-list-item-title>
                <v-icon icon="mdi-download" size="small" class="mr-2"></v-icon>Scrape
              </v-list-item-title>
              <v-list-item-subtitle>curl the Pulselive API (competition=8) into matches/&lt;season&gt;/*.json</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon icon="mdi-database" size="small" class="mr-2"></v-icon>Load
              </v-list-item-title>
              <v-list-item-subtitle>duckdb/load_*.sql read the JSON into the DuckDB <code>raw</code> schema</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon icon="mdi-sitemap" size="small" class="mr-2"></v-icon>Model
              </v-list-item-title>
              <v-list-item-subtitle>dbt seed + run builds staging → core (int_matches) → marts (fct_matches)</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon icon="mdi-file-delimited" size="small" class="mr-2"></v-icon>Chart data
              </v-list-item-title>
              <v-list-item-subtitle>dbt analyses (dbt/analyses/chart_*.sql) run against fct_matches to write assets/data/*.csv</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon icon="mdi-chart-line" size="small" class="mr-2"></v-icon>Generate
              </v-list-item-title>
              <v-list-item-subtitle>Nuxt 3 builds a static Vuetify 3 + d3.js site, baking charts into HTML for SEO</v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-divider class="my-4"></v-divider>

          <div>
            <v-icon icon="mdi-clock-outline" size="small" class="mr-2"></v-icon>
            Last data update: <strong>{{ stats.last_updated }}</strong>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import * as d3 from 'd3'
import { stats } from '~/composables/useData'

useHead({
  title: 'Football Started in 1992 | Premier League Stats, Records & History',
  meta: [
    {
      name: 'description',
      content: 'Premier League statistics built from the official API, covering the all-time table, most wins, attendances, streaks and data quality across 34 seasons.'
    }
  ]
})

const otherEntries = [
  { label: 'All-Time Table', path: '/all-time-table' },
  { label: 'Most Wins', path: '/most-wins' },
  { label: 'Data Quality', path: '/data-quality' },
  { label: 'Attendances', path: '/attendances' },
  { label: 'Five-Game Streaks', path: '/five-game-streaks' },
  { label: 'Big Win Streaks', path: '/big-win-streaks' },
  { label: 'Longest Gap Between Wins', path: '/longest-winless-gaps' },
  { label: 'Most Chaotic Matches', path: '/most-chaotic-matches' },
  { label: 'One-Nil Wins', path: '/one-nil-wins' },
  { label: 'Longest No-Win Streaks After HT Lead', path: '/ht-lead-no-win-streaks' },
  { label: 'Comeback Kings', path: '/comeback-kings' },
  { label: 'Most Comebacks in a Season', path: '/most-comebacks' },
  { label: 'Most Manager Wins', path: '/manager-wins' },
  { label: 'Manager Timeline', path: '/manager-timeline' }
]

const managerEntries = [
  { label: 'Arsène Wenger', path: '/wenger' },
  { label: 'Alex Ferguson', path: '/ferguson' },
  { label: 'David Moyes', path: '/moyes' },
  { label: 'Pep Guardiola', path: '/guardiola' },
  { label: 'Harry Redknapp', path: '/redknapp' },
  { label: 'José Mourinho', path: '/mourinho' },
  { label: 'Jürgen Klopp', path: '/klopp' },
  { label: 'Sam Allardyce', path: '/allardyce' },
  { label: 'Rafael Benítez', path: '/benitez' },
  { label: 'Mark Hughes', path: '/hughes' },
  { label: 'Mauricio Pochettino', path: '/pochettino' },
  { label: 'Mikel Arteta', path: '/arteta' },
  { label: 'Eddie Howe', path: '/howe' },
  { label: 'Brendan Rodgers', path: '/rodgers' },
  { label: 'Roy Hodgson', path: '/hodgson' },
  { label: 'Steve Bruce', path: '/bruce' },
  { label: "Martin O'Neill", path: '/o-neill' },
  { label: 'Kevin Keegan', path: '/keegan' },
  { label: 'Kenny Dalglish', path: '/dalglish' },
  { label: "David O'Leary", path: '/o-leary' }
]

const seasonEntries = [
  { label: '1992-93 Season', path: '/epl-1992-93-season-stats' },
  { label: '1993-94 Season', path: '/epl-1993-94-season-stats' },
  { label: '1994-95 Season', path: '/epl-1994-95-season-stats' },
  { label: '1995-96 Season', path: '/epl-1995-96-season-stats' },
  { label: '1996-97 Season', path: '/epl-1996-97-season-stats' },
  { label: '1997-98 Season', path: '/epl-1997-98-season-stats' },
  { label: '1998-99 Season', path: '/epl-1998-99-season-stats' },
  { label: '1999-00 Season', path: '/epl-1999-00-season-stats' },
  { label: '2000-01 Season', path: '/epl-2000-01-season-stats' },
  { label: '2001-02 Season', path: '/epl-2001-02-season-stats' },
  { label: '2002-03 Season', path: '/epl-2002-03-season-stats' },
  { label: '2003-04 Season', path: '/epl-2003-04-season-stats' },
  { label: '2004-05 Season', path: '/epl-2004-05-season-stats' },
  { label: '2005-06 Season', path: '/epl-2005-06-season-stats' },
  { label: '2006-07 Season', path: '/epl-2006-07-season-stats' },
  { label: '2007-08 Season', path: '/epl-2007-08-season-stats' },
  { label: '2008-09 Season', path: '/epl-2008-09-season-stats' },
  { label: '2009-10 Season', path: '/epl-2009-10-season-stats' },
  { label: '2010-11 Season', path: '/epl-2010-11-season-stats' },
  { label: '2011-12 Season', path: '/epl-2011-12-season-stats' },
  { label: '2012-13 Season', path: '/epl-2012-13-season-stats' },
  { label: '2013-14 Season', path: '/epl-2013-14-season-stats' },
  { label: '2014-15 Season', path: '/epl-2014-15-season-stats' },
  { label: '2015-16 Season', path: '/epl-2015-16-season-stats' },
  { label: '2016-17 Season', path: '/epl-2016-17-season-stats' },
  { label: '2017-18 Season', path: '/epl-2017-18-season-stats' },
  { label: '2018-19 Season', path: '/epl-2018-19-season-stats' },
  { label: '2019-20 Season', path: '/epl-2019-20-season-stats' },
  { label: '2020-21 Season', path: '/epl-2020-21-season-stats' },
  { label: '2021-22 Season', path: '/epl-2021-22-season-stats' },
  { label: '2022-23 Season', path: '/epl-2022-23-season-stats' },
  { label: '2023-24 Season', path: '/epl-2023-24-season-stats' },
  { label: '2024-25 Season', path: '/epl-2024-25-season-stats' },
  { label: '2025-26 Season', path: '/epl-2025-26-season-stats' }
]

const teamEntries = [
  { label: 'Arsenal', path: '/arsenal' },
  { label: 'Manchester United', path: '/manchester-united' },
  { label: 'Liverpool', path: '/liverpool' },
  { label: 'Tottenham Hotspur', path: '/tottenham' },
  { label: 'West Ham United', path: '/west-ham' },
  { label: 'Manchester City', path: '/manchester-city' },
  { label: 'Newcastle United', path: '/newcastle' },
  { label: 'Sunderland', path: '/sunderland' },
  { label: 'Leeds United', path: '/leeds' },
  { label: 'Aston Villa', path: '/aston-villa' },
  { label: 'Brentford', path: '/brentford' },
  { label: 'Chelsea', path: '/chelsea' }
]

const fmt = n => d3.format(',')(n || 0)
</script>
