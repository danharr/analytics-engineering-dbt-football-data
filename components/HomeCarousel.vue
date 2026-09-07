<template>
  <v-col cols="12" md="8" offset-md="2">
    <v-defaults-provider :defaults="{ VBtn: { variant: 'outlined', color: '#eee' } }">
      <v-sheet class="overflow-hidden" rounded="xl">
        <v-carousel
          v-model="currentIndex"
          direction="vertical"
          height="400"
          progress="red"
          vertical-arrows="left"
          vertical-delimiters="right"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
          >
            <NuxtLink :to="item.path" class="carousel-link">
              <img :src="item.src" :alt="item.title" class="carousel-img" />
            </NuxtLink>
          </v-carousel-item>

          <v-overlay
            :scrim="false"
            content-class="w-100 h-100 d-flex flex-column align-center justify-space-between pointer-pass-through py-3"
            contained
            model-value
            no-click-animation
            persistent
          >
            <v-scroll-x-transition mode="out-in" appear>
              <v-sheet
                :key="currentIndex"
                rounded="xl"
              >
                <v-list-item
                  :to="currentItem.path"
                  :subtitle="currentItem.subtitle"
                  :title="currentItem.title"
                  class="pa-1 pr-6"
                ></v-list-item>
              </v-sheet>
            </v-scroll-x-transition>
            <v-chip
              :text="`${ currentIndex + 1 } / ${ items.length }`"
              color="#eee"
              size="small"
              variant="flat"
            ></v-chip>
          </v-overlay>
        </v-carousel>
      </v-sheet>
    </v-defaults-provider>
  </v-col>
</template>

<script setup>
import { computed, ref } from 'vue'

const items = [
  { src: '/klopp.png', title: 'Jürgen Klopp', subtitle: 'Manager', path: '/managers/klopp' },
  { src: '/erling.png', title: 'Erling Haaland', subtitle: 'Goals by matchweek', path: '/players/erling-haaland' },
  { src: '/manutd.png', title: 'Manchester United', subtitle: 'Treble-winning season · cumulative points', path: '/teams/manchester-united/cumulative-points-per-season' }
]

const currentIndex = ref(0)
const currentItem = computed(() => items[currentIndex.value])
</script>

<style scoped>
.carousel-link {
  display: block;
  width: 100%;
  height: 100%;
}
.carousel-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
