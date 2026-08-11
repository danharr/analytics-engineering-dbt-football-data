<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card color="secondary" variant="tonal">
          <v-card-title>
            <v-icon icon="mdi-account-tie-outline" class="mr-2"></v-icon>
            José Mourinho
          </v-card-title>
          <v-card-subtitle>Premier League career record, biggest wins/losses, club breakdown</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" offset-md="1">
        <ManagerWinsChart :data="managerWins" :highlight="thisManager" />
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
import { managerWins, managerMatches, managerClubRecords, sqlQueries } from '~/composables/useData'
import ManagerWinsChart from '~/components/ManagerWinsChart.vue'
import ManagerResultsTable from '~/components/ManagerResultsTable.vue'
import ManagerClubsTable from '~/components/ManagerClubsTable.vue'
import ChartCode from '~/components/ChartCode.vue'
const thisManager = 'José Mourinho'
const managerMatchesFiltered = managerMatches.filter(r => r.manager_name === thisManager)
const managerClubRecordsFiltered = managerClubRecords.filter(r => r.manager_name === thisManager)
useHead({
  title: 'José Mourinho Premier League Record, Wins & Stats',
  meta: [{
    name: 'description',
    content: "Premier League record for José Mourinho: total wins, five biggest wins and losses, club-by-club record."
  }]
})
</script>
