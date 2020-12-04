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
    const term = this.$store.state.searchText

    this.results = getResults(term)
  },
  watchQuery(newQuery) {
    const term = newQuery.term || ''
    this.results = getResults(term)
  },
}
</script>
