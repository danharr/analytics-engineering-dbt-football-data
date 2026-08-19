import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'
import type { Nitro } from 'nitropack'
import { copyFileSync, mkdirSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { teamSlugsFromCsv } from './utils/teamSlugs'
import { MANAGER_SLUGS } from './utils/managerPages'
import { SEASON_TEAMS } from './utils/seasonTeams'

const lastUpdatedFromStats = (): string => {
  const lines = readFileSync('assets/data/stats.csv', 'utf-8').trim().split('\n')
  const cols = lines[lines.length - 1].split(',')
  return cols[cols.length - 1].trim()
}

const teamRoutes = (): string[] => {
  const csv = readFileSync('assets/data/all_time_table.csv', 'utf-8')
  return ['/teams', ...teamSlugsFromCsv(csv).map(t => `/teams/${t.slug}`)]
}

const managerRoutes = (): string[] => [
  '/managers',
  ...Object.values(MANAGER_SLUGS).map(slug => `/managers/${slug}`)
]

const seasonRoutes = (): string[] => {
  const csv = readFileSync('assets/data/season_table.csv', 'utf-8')
  const labels = [...new Set(csv.trim().split('\n').slice(1).map(line => line.split(',')[0]))]
  return ['/seasons', ...labels.map(label => `/seasons/${label}`)]
}

const pointsLostRoutes = (): string[] => [
  '/points-lost-from-winning-position',
  ...SEASON_TEAMS.map(t => `/points-lost-from-winning-position/${t.slug}`)
]

const teamSeasonRoutes = (): string[] =>
  SEASON_TEAMS.map(t => `/teams/${t.slug}/2025-26`)

let outputPublicDir = ''

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,

  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://footballstartedin1992.com',
    name: 'Football Started in 1992',
    description: 'Premier League statistics built from match data, covering the all-time table, most wins, attendances, streaks and data quality across 34 seasons.'
  },

  sitemap: {
    exclude: ['/_nuxt/**', '/_payload.json'],
    defaults: {
      lastmod: lastUpdatedFromStats()
    }
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Tourney:wght@500;600;700&display=swap'
        }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-HRJ1G6XTG1',
          async: true
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HRJ1G6XTG1');`
        }
      ]
    }
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.css'
  ],

  ignore: [
    'dbt/**',
    'matches/**',
    'duckdb/**',
    'logs/**',
    'airflow/**',
    'orchestration/**',
    'dist/**'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    plugins: [vuetify({ autoImport: true })]
  },

  hooks: {
    'nitro:build:before'(nitro: Nitro) {
      outputPublicDir = nitro.options.output.publicDir
    },
    'close'() {
      const srcDir = join(process.cwd(), 'assets/data')
      const dstDir = join(outputPublicDir, 'data')
      mkdirSync(dstDir, { recursive: true })
      for (const file of readdirSync(srcDir)) {
        if (file.endsWith('.csv')) {
          copyFileSync(join(srcDir, file), join(dstDir, file))
        }
      }
    }
  },

  nitro: {
    output: {
      publicDir: 'docs'
    },
    prerender: {
      crawlLinks: false,
      routes: [
        '/', '/most-wins', '/data-quality', '/attendances', '/all-time-table', '/five-game-streaks', '/big-win-streaks', '/longest-winless-gaps', '/most-chaotic-matches', '/one-nil-wins', '/ht-lead-no-win-streaks', '/comeback-kings', '/most-comebacks', '/manager-wins', '/manager-debuts', '/manager-timeline', '/scoring-trends', '/goal-minutes',
        ...teamRoutes(),
        ...managerRoutes(),
        ...seasonRoutes(),
        ...pointsLostRoutes(),
        ...teamSeasonRoutes(),
      ]
    }
  }
})
