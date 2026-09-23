import { useConsent } from '~/composables/useConsent'

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const { restore, trackPageView } = useConsent()

  router.afterEach((to) => {
    trackPageView(to.fullPath)
  })

  restore()
})
