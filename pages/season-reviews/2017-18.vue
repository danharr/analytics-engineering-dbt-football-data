<template><SeasonReviewPage season="2017-18" :sub-timing="subTiming2017_18" :top-scorers="topScorers2017_18" :partnerships="partnerships2017_18" :yellow-cards="yellowCards" :red-cards="redCards" /></template>

<script setup>
import { subTiming2017_18, topScorers2017_18, partnerships2017_18, yellowCards, redCards } from '~/composables/useSeasonReviewData'
</script>
