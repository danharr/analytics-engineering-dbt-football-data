<template>
  <TeamDashboard :team="team" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { teamBySlug } from '~/composables/teamPages'
import TeamDashboard from '~/components/TeamDashboard.vue'

const route = useRoute()
const team = teamBySlug(route.params.slug)

if (!team) {
  throw createError({ statusCode: 404, statusMessage: 'Team not found', fatal: true })
}

useHead({
  title: `${team.name} Premier League All-Time Record & Stats`,
  meta: [
    {
      name: 'description',
      content: `${team.name}'s Premier League record since 1992: biggest wins, heaviest defeats, most red cards, biggest home attendances, all-time standing and manager history.`
    }
  ]
})
</script>
