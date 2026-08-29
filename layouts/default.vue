<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-nav-icon @click.stop="toggleNav"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <NuxtLink to="/" class="text-decoration-none d-flex align-center">
          <img src="/logo-square.png" alt="Football Started in 1992" class="site-logo" />
          <span class="text-white site-title ml-2">Football Started in 1992</span>
        </NuxtLink>
      </v-app-bar-title>
      <v-btn
        variant="text"
        prepend-icon="mdi-information-outline"
        to="/about"
        class="text-white d-none d-sm-flex"
      >
        About
      </v-btn>
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
      <div v-if="crumbs.length > 1" class="breadcrumbs px-4 pt-3">
        <template v-for="(crumb, i) in crumbs" :key="i">
          <NuxtLink v-if="crumb.to" :to="crumb.to" class="breadcrumb-link">{{ crumb.label }}</NuxtLink>
          <span v-else class="breadcrumb-current">{{ crumb.label }}</span>
          <span v-if="i < crumbs.length - 1" class="breadcrumb-sep">/</span>
        </template>
      </div>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

    <CookieConsent />
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { navItems } from '~/composables/navItems'
import { useBreadcrumbs } from '~/composables/breadcrumbs'
import CookieConsent from '~/components/CookieConsent.vue'

const crumbs = useBreadcrumbs()
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

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.875rem;
}
.breadcrumb-link {
  color: #1a56db;
  text-decoration: none;
  font-weight: 500;
}
.breadcrumb-link:hover {
  text-decoration: underline;
}
.breadcrumb-current {
  color: #666;
}
.breadcrumb-sep {
  color: #999;
}
</style>
