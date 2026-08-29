<template>
  <v-snackbar
    :model-value="show"
    location="bottom"
    :timeout="-1"
    color="grey-darken-4"
    class="cookie-consent"
  >
    <p class="mb-1 font-weight-medium">We use cookies</p>
    <p class="mb-0 text-body-2 text-grey-lighten-2">
      This site uses Google Analytics to measure how it is used. Accept to allow
      analytics cookies, or decline to browse without them.
    </p>
    <template #actions>
      <v-btn color="primary" variant="tonal" size="small" @click="accept">Accept</v-btn>
      <v-btn color="grey-lighten-1" variant="text" size="small" @click="decline">Decline</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const CONSENT_KEY = 'pl-cookie-consent'
const show = ref(false)

function updateConsent(status) {
  const gtag = window.gtag
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: status, ad_storage: status })
  }
}

function accept() {
  localStorage.setItem(CONSENT_KEY, 'granted')
  updateConsent('granted')
  show.value = false
}

function decline() {
  localStorage.setItem(CONSENT_KEY, 'denied')
  show.value = false
}

onMounted(() => {
  if (typeof localStorage === 'undefined') return
  if (!localStorage.getItem(CONSENT_KEY)) show.value = true
})
</script>
