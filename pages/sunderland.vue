<template>
  <TeamDashboard :team="team" />
</template>

<script setup>
import { teamBySlug } from '~/composables/teamPages'

const team = teamBySlug('sunderland')

useHead({
  title: 'Sunderland Premier League Stats, Records & History | Football Started in 1992',
  meta: [
    {
      name: 'description',
      content: "Sunderland's Premier League record since 1992: biggest wins, heaviest defeats, most red cards, biggest home attendances, all-time standing and manager history."
    }
  ]
})
</script>
