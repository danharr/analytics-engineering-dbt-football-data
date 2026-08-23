<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-row>
        <v-col cols="12" sm="4">
          <StatCircle :value="stats.total_matches" label="Total Matches Analysed" />
        </v-col>
        <v-col cols="12" sm="4">
          <StatCircle :value="stats.total_unique_teams" label="Total Unique Teams" />
        </v-col>
        <v-col cols="12" sm="4">
          <StatCircle :value="stats.total_goals" label="Total Goals Scored" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <div class="section-head">
        <h2 class="text-h5 font-weight-bold mb-1">Explore the charts</h2>
        <p class="text-body-2 text-grey-darken-1 mb-0">
          Fourteen analyses, each generated from the same match-level data.
        </p>
      </div>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-row dense>
        <v-col v-for="t in thumbnails" :key="t.path" cols="12" sm="6" md="4" lg="3">
          <ChartThumb :entry="t" />
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
            Every chart on this site is generated from match level data, <strong>json → DuckDB → dbt → CSV → static site</strong>. When
            data updates, <code>./update_all_charts.sh</code> rebuilds everything from source.
          </p>
          <v-list density="compact">
            <v-list-item>
              <v-list-item-title>
                <v-icon icon="mdi-download" size="small" class="mr-2"></v-icon>Scrape
              </v-list-item-title>
              <v-list-item-subtitle>grab data into matches/&lt;season&gt;/*.json</v-list-item-subtitle>
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
import { stats, datasetLd } from '~/composables/useData'
import { thumbnails } from '~/composables/thumbnails'
import ChartThumb from '~/components/ChartThumb.vue'
import StatCircle from '~/components/StatCircle.vue'

useHead({
  title: 'Football Started in 1992 | Premier League Stats, Records & History',
  meta: [
    {
      name: 'description',
      content: 'Premier League statistics covering the all-time table, most wins, attendances, streaks and data quality across 35 seasons.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Football Started in 1992 — Premier League Statistics Dataset',
        description: 'Complete Premier League statistics from the 1992-93 season to 2026-27. Includes the all-time table, every match result, total wins, attendances, winning streaks, comebacks, one-nil wins, manager records and per-season standings across 13,167 matches and 51 teams.',
        path: '/',
        csv: 'stats.csv',
        keywords: ['all-time table', 'match results', 'records', 'attendances', 'winning streaks']
      }))
    }
  ]
})

const otherEntries = thumbnails.map(t => ({ label: t.label, path: t.path }))

const managerEntries = [
  { label: 'All Managers', path: '/managers' }
]

const seasonEntries = [
  { label: 'All Seasons', path: '/seasons' }
]

const teamEntries = [
  { label: 'All Teams', path: '/teams' }
]
</script>
