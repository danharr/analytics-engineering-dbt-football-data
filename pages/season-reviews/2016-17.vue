<template><SeasonReviewPage season="2016-17" :sub-timing="subTiming2016_17" :top-scorers="topScorers2016_17" :partnerships="partnerships2016_17" :yellow-cards="yellowCards" :red-cards="redCards" /></template>

<script setup>
import { subTiming2016_17, topScorers2016_17, partnerships2016_17, yellowCards, redCards } from '~/composables/useSeasonReviewData'
</script>
