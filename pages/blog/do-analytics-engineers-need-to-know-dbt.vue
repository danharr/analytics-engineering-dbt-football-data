<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card color="secondary" variant="tonal">
        <v-card-title>
          <v-icon icon="mdi-newspaper-variant-outline" class="mr-2"></v-icon>
          Do Analytics Engineers need to know dbt?
        </v-card-title>
        <v-card-subtitle>Blog · Analytics Engineering</v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <v-card-text>
          <p class="mb-4">
            I worked for nearly 10 years at Playstation. When I joined I was a BI Engineer. Within
            that same role I then became a software engineer before finally leaving with the role
            Analytics Engineer.
          </p>

          <p class="mb-4">
            All 3 roles largely were the same, they were just changing the job title with industry
            trends. All these roles required data modelling skills so that we could surface data
            into BI tools like Tableau or Qlik View.
          </p>

          <p class="mb-4">
            Initially git ops wasn't a part of the role but by the mid 2010s all software engineers
            needed to be comfortable using git to version control their work and work on tasks as a
            team.
          </p>

          <p class="mb-4">
            What I didn't need when I first had the title of Analytics Engineer was knowledge of
            <a href="https://www.getdbt.com/" target="_blank" rel="noopener">dbt (data build tool)</a>.
            It didn't exist or was at least in it's infancy. dbt have claimed to have invented the
            role Analytics Engineer and they justify it as being the combination of software
            engineering techniques with analytics skills like writing SQL. It's fair to say that I
            was heavily using GitHub to contribute to projects that leaned heavily on Airflow so in
            my opinion dbt is not essential for every team that feels they need Analytics Engineers.
          </p>

          <p class="mb-4">
            Overtime though I have increasingly liked what dbt brings to an AE's workflow. The ease
            at which tests can be built on assets was always something that required extra effort
            with Airflow in isolation. It also helps promote teams to think of their SQL tasks as one
            collective system. So instead of 5 different airflow tasks cleaning the same source data
            in the same way we can have one model in dbt that does it only once.
          </p>

          <p class="mb-4">
            dbt is increasingly useful in the age of AI. This site is built with dbt and Duck DB.
            The data is cleaned and shaped into fact and dimension tables using dbt before each page
            in this site writes SQL against the data to build the insight for ecah page, such as
            <NuxtLink to="/goal-minutes">this chart showing what minute teams score goals in</NuxtLink>.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
useHead({
  title: 'Do Analytics Engineers need to know dbt? | Football Started in 1992',
  meta: [
    {
      name: 'description',
      content: 'A blog post on whether analytics engineers need dbt, drawing on a decade of BI, software engineering and analytics engineering experience.'
    }
  ]
})
</script>
