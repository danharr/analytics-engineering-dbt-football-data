<template>
  <TeamDashboard :team="team" />
</template>

<script setup>
import { teamBySlug } from '~/composables/teamPages'

const team = teamBySlug('liverpool')

useHead({
  title: 'Liverpool Premier League All-Time Record & Stats',
  meta: [
    {
      name: 'description',
      content: "Liverpool's Premier League record since 1992: biggest wins, heaviest defeats, most red cards, biggest home attendances, all-time standing and manager history."
    }
  ]
})
</script>
