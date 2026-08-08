import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'
import { readFileSync } from 'node:fs'

const lastUpdatedFromStats = (): string => {
  const lines = readFileSync('assets/data/stats.csv', 'utf-8').trim().split('\n')
  const cols = lines[lines.length - 1].split(',')
  return cols[cols.length - 1].trim()
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,

  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://footballstartedin1992.com',
    name: 'Football Started in 1992',
    description: 'Premier League statistics built from the official API — all-time table, most wins, attendances, streaks and data quality across 34 seasons.'
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
      htmlAttrs: { lang: 'en' }
    }
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    plugins: [vuetify({ autoImport: true })]
  },

  nitro: {
    output: {
      publicDir: 'docs'
    },
    prerender: {
      crawlLinks: false,
      routes: ['/', '/most-wins', '/data-quality', '/attendances', '/all-time-table', '/five-game-streaks', '/big-win-streaks']
    }
  }
})
