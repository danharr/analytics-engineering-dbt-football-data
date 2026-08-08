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
    description: 'Premier League statistics built from the official API, covering the all-time table, most wins, attendances, streaks and data quality across 34 seasons.'
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
      routes: ['/', '/most-wins', '/data-quality', '/attendances', '/all-time-table', '/five-game-streaks', '/big-win-streaks', '/longest-winless-gaps', '/most-chaotic-matches', '/one-nil-wins', '/ht-lead-no-win-streaks', '/comeback-kings', '/most-comebacks', '/manager-wins']
    }
  }
})
