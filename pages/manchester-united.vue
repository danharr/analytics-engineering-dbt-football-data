<template>
  <TeamDashboard :team="team" />
</template>

<script setup>
import { teamBySlug } from '~/composables/teamPages'

const team = teamBySlug('manchester-united')

useHead({
  title: 'Manchester United',
  meta: [
    {
      name: 'description',
      content: "Manchester United's Premier League record since 1992: biggest wins, heaviest defeats, most red cards, biggest home attendances, all-time standing and manager history."
    }
  ]
})
</script>
