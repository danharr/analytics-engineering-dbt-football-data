<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-stadium" class="mr-2"></v-icon>
          Average Home Attendance by Team
        </v-card-title>
        <v-card-subtitle>1992-93 to 2025-26 · season average across all home games</v-card-subtitle>
        <v-card-text>
          <AttendanceChart :data="attendance" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.attendance" />
    </v-col>
  </v-row>
</template>

<script setup>
import { attendance, sqlQueries } from '~/composables/useData'

useHead({
  title: 'Average Home Attendance by Team',
  meta: [
    {
      name: 'description',
      content: 'Average home attendances by Premier League team from 1992-93 to 2025-26.'
    }
  ]
})
</script>
