import { ref } from 'vue'

const CONSENT_KEY = 'pl-cookie-consent'

type ConsentStatus = 'granted' | 'denied' | null

const status = ref<ConsentStatus>(null)

function applyGtag(next: 'granted' | 'denied') {
  if (typeof window === 'undefined') return
  const gtag = window.gtag
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: next })
  }
}

export function useConsent() {
  function restore() {
    if (typeof localStorage === 'undefined') return
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'granted') {
      status.value = 'granted'
      applyGtag('granted')
    } else if (stored === 'denied') {
      status.value = 'denied'
    }
  }

  function grant() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CONSENT_KEY, 'granted')
    }
    status.value = 'granted'
    applyGtag('granted')
  }

  function deny() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CONSENT_KEY, 'denied')
    }
    status.value = 'denied'
    applyGtag('denied')
  }

  function trackPageView(path: string) {
    if (status.value !== 'granted') return
    if (typeof window === 'undefined') return
    const gtag = window.gtag
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: path,
        page_location: window.location.href
      })
    }
  }

  return { status, restore, grant, deny, trackPageView }
}
