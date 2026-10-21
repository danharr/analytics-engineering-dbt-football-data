import { fileURLToPath } from 'node:url'

// Minimal Vite config for running the thumbnail generator outside Nuxt.
// It only needs the `~` alias so the existing composables and `?raw` CSV
// imports resolve the same way they do in the app.
export default {
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('..', import.meta.url))
    }
  }
}
