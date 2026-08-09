<template>
  <TeamDashboard :team="team" />
</template>

<script setup>
import { teamBySlug } from '~/composables/teamPages'

const team = teamBySlug('west-ham')

useHead({
  title: 'West Ham United',
  meta: [
    {
      name: 'description',
      content: "West Ham United's Premier League record since 1992: biggest wins, heaviest defeats, most red cards, biggest home attendances, all-time standing and manager history."
    }
  ]
})
</script>
