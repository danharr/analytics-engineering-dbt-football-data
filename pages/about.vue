<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-information-outline" class="mr-2"></v-icon>
          About this site
        </v-card-title>
        <v-card-subtitle>Football Started in 1992 · Premier League insights</v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <v-card-text>
          <div class="d-flex align-center mb-4">
            <v-avatar color="primary" size="56" class="mr-4">
              <span class="text-white text-h5 font-weight-bold">DH</span>
            </v-avatar>
            <div>
              <div class="text-h6 font-weight-bold">Dan Harrington</div>
              <div class="text-subtitle-1 text-grey-darken-1">Lead Data Engineer</div>
            </div>
          </div>

          <p class="mb-4">
            Hi, I'm Dan, the creator of Football Started in 1992. I'm a Lead Data Engineer with a
            background in building data pipelines, and this site is a side project that turns
            Premier League match data into something worth exploring. Every chart here is generated
            end-to-end from the league's own match data: <strong>json → DuckDB → dbt → CSV → static site</strong>.
          </p>

          <v-btn
            color="primary"
            variant="tonal"
            prepend-icon="mdi-linkedin"
            href="https://www.linkedin.com/in/dan-harrington-7a60967/"
            target="_blank"
            rel="noopener"
          >
            Connect on LinkedIn
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
useHead({
  title: 'About | Football Started in 1992',
  meta: [
    {
      name: 'description',
      content: 'About Dan Harrington, Lead Data Engineer and creator of Football Started in 1992, a site of Premier League statistics built from match data.'
    }
  ]
})
</script>
