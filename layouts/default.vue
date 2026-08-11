<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-nav-icon @click.stop="toggleNav"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <NuxtLink to="/" class="text-decoration-none">
          <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
          <span class="text-white site-title">Football Started in 1992</span>
        </NuxtLink>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isMobile"
      :temporary="isMobile"
      :rail="rail && !isMobile"
      :expand-on-hover="rail && !isMobile"
    >
      <v-list>
        <template v-for="item in navItems" :key="item.header || item.path">
          <v-list-subheader v-if="item.header">{{ item.header }}</v-list-subheader>
          <v-list-item
            v-else
            :to="item.path"
            :prepend-icon="item.icon"
            :title="item.label"
            link
          ></v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { navItems } from '~/composables/navItems'

const drawer = ref(false)
const rail = ref(false)
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

function toggleNav() {
  if (isMobile.value) {
    drawer.value = !drawer.value
  } else {
    rail.value = !rail.value
  }
}
</script>
