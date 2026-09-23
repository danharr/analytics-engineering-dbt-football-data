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
import { useRoute } from 'vue-router'
import { useConsent } from '~/composables/useConsent'

const { status, grant, deny, trackPageView } = useConsent()
const route = useRoute()
const show = ref(false)

function accept() {
  grant()
  trackPageView(route.fullPath)
  show.value = false
}

function decline() {
  deny()
  show.value = false
}

onMounted(() => {
  if (status.value === null) show.value = true
})
</script>
