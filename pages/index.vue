<template>
  <Results v-if="results" :results="results" />
</template>

<script>
import { getResults } from '@/mock/api'

export default {
  data() {
    return {
      results: null,
    }
  },
  mounted() {
    this.results = getResults()
  },
}
</script>
