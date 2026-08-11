<template>
  <TeamDashboard :team="team" />
</template>

<script setup>
import { teamBySlug } from '~/composables/teamPages'

const team = teamBySlug('chelsea')

useHead({
  title: 'Chelsea Premier League All-Time Record & Stats',
  meta: [
    {
      name: 'description',
      content: "Chelsea's Premier League record since 1992: biggest wins, heaviest defeats, most red cards, biggest home attendances, all-time standing and manager history."
    }
  ]
})
</script>
