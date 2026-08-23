<template>
  <TeamGoalsByPlayer :team="team" season-label="2025-26" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { seasonTeamBySlug } from '~/utils/seasonTeams'

const route = useRoute()
const team = seasonTeamBySlug(String(route.params.slug), '2025-26')

if (!team) {
  throw createError({ statusCode: 404, statusMessage: 'No 2025-26 player data for this team', fatal: true })
}
</script>
