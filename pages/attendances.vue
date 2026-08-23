<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>
          <v-icon icon="mdi-stadium" class="mr-2"></v-icon>
          Average Home Attendance by Team
        </v-card-title>
        <v-card-subtitle>1992-93 to 2026-27 · season average across all home games</v-card-subtitle>
        <v-card-text>
          <p class="mb-4">
            Manchester United have long been the division's biggest draw, averaging above 70,000
            at Old Trafford in every season since 2006-07 and peaking at 75,821 in 2006-07.
            Each line tracks a club's average home attendance year by year, so a move into a
            bigger ground stands out as a sudden jump. West Ham's 22,000-seat leap when they
            swapped Upton Park for the London Stadium in 2016-17 is the clearest example.
            The gap in 2020-21 is deliberate: every match that season was played behind closed
            doors.
          </p>
          <AttendanceChart :data="attendance" />
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script setup>
import { attendance, datasetLd } from '~/composables/useData'

useHead({
  title: 'Highest Average Home Attendances in Premier League History',
  meta: [
    {
      name: 'description',
      content: 'Average home attendances by Premier League team from 1992-93 to 2026-27.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Average Home Attendance Dataset',
        description: 'Average home attendance per Premier League team in each season from 1992-93 to 2026-27, including the empty-stadium 2020-21 season.',
        path: '/attendances',
        csv: 'attendance.csv',
        keywords: ['attendances', 'average home crowds']
      }))
    }
  ]
})
</script>
