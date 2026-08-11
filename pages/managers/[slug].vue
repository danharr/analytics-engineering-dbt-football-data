<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-account-tie-outline" class="mr-2"></v-icon>
            {{ manager.name }}
          </v-card-title>
          <v-card-subtitle>Premier League career record, biggest wins/losses, club breakdown</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <ManagerWinsChart :data="managerWins" :highlight="manager.name" />
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <ManagerResultsTable :matches="managerMatchesFiltered" />
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <ManagerClubsTable :clubRecords="managerClubRecordsFiltered" />
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <ChartCode :sql="sqlQueries.managerWins" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { managerWins, managerMatches, managerClubRecords, sqlQueries } from '~/composables/useData'
import { managerBySlug } from '~/utils/managerPages'
import ManagerWinsChart from '~/components/ManagerWinsChart.vue'
import ManagerResultsTable from '~/components/ManagerResultsTable.vue'
import ManagerClubsTable from '~/components/ManagerClubsTable.vue'
import ChartCode from '~/components/ChartCode.vue'

const route = useRoute()
const manager = managerBySlug(route.params.slug)

if (!manager) {
  throw createError({ statusCode: 404, statusMessage: 'Manager not found', fatal: true })
}

const managerMatchesFiltered = managerMatches.filter(r => r.manager_name === manager.name)
const managerClubRecordsFiltered = managerClubRecords.filter(r => r.manager_name === manager.name)

useHead({
  title: `${manager.name} Premier League Record, Wins & Stats`,
  meta: [{
    name: 'description',
    content: `Premier League record for ${manager.name}: total wins, five biggest wins and losses, club-by-club record.`
  }]
})
</script>
