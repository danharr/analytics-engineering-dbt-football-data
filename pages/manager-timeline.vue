<template>
  <v-row>
    <v-col cols="12" md="10" offset-md="1">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-chart-gantt" class="mr-2"></v-icon>
          Manager Timeline
        </v-card-title>
        <v-card-subtitle>
          A Gantt chart of every Premier League club's managers since 1992, from the Wikipedia managers list
        </v-card-subtitle>
        <v-card-text class="pt-0">
          <p class="mb-0">
            Each club is a row, with every managerial spell drawn as a bar in that club's colours,
            divided by white borders. Short spells are easy to miss on the scale, so hover any bar
            for the manager's name, dates and time in charge — the same manager's spells at other
            clubs light up too, so you can trace their career around the league. Thin, faded bars
            are caretakers; spells still running extend to the present day. Where a bar is wide
            enough, the manager's name is written inside it.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <v-card>
        <v-card-title>Premier League Managers by Club, 1992 – present</v-card-title>
        <v-card-subtitle>
          Colour = club · faded = caretaker · white border = spell boundary · hover to highlight a manager across every club
        </v-card-subtitle>
        <v-card-text>
          <ManagerTimelineChart :data="managerTimeline" />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="10" offset-md="1">
      <ChartCode :sql="sqlQueries.managerTimeline" />
    </v-col>
  </v-row>
</template>

<script setup>
import { managerTimeline, sqlQueries, datasetLd } from '~/composables/useData'

useHead({
  title: "Every Premier League Manager's Timeline Since 1992",
  meta: [
    {
      name: 'description',
      content: 'A Gantt chart of every Premier League club\u2019s managers since 1992, from the Wikipedia managers list, coloured by club with hover tooltips.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datasetLd({
        name: 'Premier League Manager Timeline Dataset',
        description: 'Every managerial spell at every Premier League club since 1992, with start and end dates, taken from the Wikipedia managers list.',
        path: '/manager-timeline',
        csv: 'manager_timeline.csv',
        keywords: ['manager timeline', 'managerial spells']
      }))
    }
  ]
})
</script>
