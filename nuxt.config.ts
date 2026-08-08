import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,

  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://footballstartedin1992.com'
  },

  sitemap: {
    exclude: ['/_nuxt/**', '/_payload.json']
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
