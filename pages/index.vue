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
          <v-icon icon="mdi-cog-outline" class="mr-2"></v-icon>
          How this site is built
        </v-card-title>
        <v-card-text>
          <p class="mb-4">
            Every chart on this site is generated from the Premier League's public API by a
            repeatable pipeline — <strong>scrape → DuckDB → dbt → CSV → static site</strong>. When
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
              <v-list-item-subtitle>assets/data/*.sql are run against fct_matches to write assets/data/*.csv</v-list-item-subtitle>
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
            <div class="dir-row" v-for="entry in entries" :key="entry.path">
              <NuxtLink :to="entry.path">{{ entry.label }}</NuxtLink>
              <span class="dots"></span>
              <span class="path">{{ entry.path }}</span>
            </div>
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
  title: 'Football started in 1992',
  meta: [
    {
      name: 'description',
      content: 'Premier League statistics built from the official API — all-time table, most wins, attendances, and data quality across 34 seasons.'
    }
  ]
})

const entries = [
  { label: 'All-Time Table', path: '/all-time-table' },
  { label: 'Most Wins', path: '/most-wins' },
  { label: 'Data Quality', path: '/data-quality' },
  { label: 'Attendances', path: '/attendances' },
  { label: 'Five-Game Streaks', path: '/five-game-streaks' }
]

const fmt = n => d3.format(',')(n || 0)
</script>
