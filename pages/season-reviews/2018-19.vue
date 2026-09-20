<template><SeasonReviewPage season="2018-19" :sub-timing="subTiming2018_19" :top-scorers="topScorers2018_19" :partnerships="partnerships2018_19" :yellow-cards="yellowCards" :red-cards="redCards" /></template>

<script setup>
import { subTiming2018_19, topScorers2018_19, partnerships2018_19, yellowCards, redCards } from '~/composables/useSeasonReviewData'
</script>
