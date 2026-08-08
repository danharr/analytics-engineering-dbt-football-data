export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  let first = true
  router.afterEach((to) => {
    if (first) {
      first = false
      return
    }
    const gtag = window.gtag
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_location: window.location.href
      })
    }
  })
})
