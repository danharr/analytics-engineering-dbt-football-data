<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>
        <NuxtLink to="/" class="text-decoration-none">
          <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
          <span class="text-white site-title">Football Started in 1992</span>
        </NuxtLink>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="pa-6 text-center">
              <v-card-title>
                <v-icon icon="mdi-alert-circle-outline" size="48" class="mb-2"></v-icon>
                <div>This page could not be loaded</div>
              </v-card-title>
              <v-card-text>
                <p class="mb-4">
                  Sorry, something went wrong. This is usually a temporary problem —
                  try reloading the page.
                </p>
                <v-btn color="primary" variant="tonal" @click="reload">Reload</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null
  }
})

useHead({
  title: 'Page Not Loaded | Football Started in 1992',
  meta: [
    {
      name: 'robots',
      content: 'noindex'
    }
  ]
})

function reload() {
  window.location.reload()
}
</script>
