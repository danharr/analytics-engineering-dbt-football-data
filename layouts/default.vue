<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>
        <NuxtLink to="/" class="text-decoration-none">
          <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
          <span class="text-white">Premier League Insights</span>
        </NuxtLink>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list>
        <v-list-subheader>Charts</v-list-subheader>
        <v-list-item
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :prepend-icon="item.icon"
          :title="item.label"
          link
        ></v-list-item>
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
import { navItems } from '~/composables/navItems'
</script>
