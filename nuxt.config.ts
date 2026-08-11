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
      routes: ['/', '/most-wins', '/data-quality', '/attendances', '/all-time-table', '/five-game-streaks', '/big-win-streaks', '/longest-winless-gaps', '/most-chaotic-matches', '/one-nil-wins', '/ht-lead-no-win-streaks', '/comeback-kings', '/most-comebacks', '/manager-wins', '/manager-timeline', '/arsenal', '/manchester-united', '/liverpool', '/tottenham', '/west-ham', '/manchester-city', '/newcastle', '/sunderland', '/leeds', '/aston-villa', '/brentford', '/chelsea', '/wenger', '/ferguson', '/moyes', '/guardiola', '/redknapp', '/mourinho', '/klopp', '/allardyce', '/benitez', '/hughes', '/pochettino', '/arteta', '/howe', '/rodgers', '/hodgson', '/bruce', '/o-neill', '/keegan', '/dalglish', '/o-leary', '/epl-1992-93-season-stats', '/epl-1993-94-season-stats', '/epl-1994-95-season-stats', '/epl-1995-96-season-stats', '/epl-1996-97-season-stats', '/epl-1997-98-season-stats', '/epl-1998-99-season-stats', '/epl-1999-00-season-stats', '/epl-2000-01-season-stats', '/epl-2001-02-season-stats', '/epl-2002-03-season-stats', '/epl-2003-04-season-stats', '/epl-2004-05-season-stats', '/epl-2005-06-season-stats', '/epl-2006-07-season-stats', '/epl-2007-08-season-stats', '/epl-2008-09-season-stats', '/epl-2009-10-season-stats', '/epl-2010-11-season-stats', '/epl-2011-12-season-stats', '/epl-2012-13-season-stats', '/epl-2013-14-season-stats', '/epl-2014-15-season-stats', '/epl-2015-16-season-stats', '/epl-2016-17-season-stats', '/epl-2017-18-season-stats', '/epl-2018-19-season-stats', '/epl-2019-20-season-stats', '/epl-2020-21-season-stats', '/epl-2021-22-season-stats', '/epl-2022-23-season-stats', '/epl-2023-24-season-stats', '/epl-2024-25-season-stats', '/epl-2025-26-season-stats']
    }
  }
})
