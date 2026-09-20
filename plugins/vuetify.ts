import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#1a56db',
            secondary: '#3b82f6'
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
