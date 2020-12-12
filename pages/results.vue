<template>
  <Results v-if="results" :results="results" />
</template>

<script>
import { getResults } from '@/api/app'

export default {
  data() {
    return {
      results: null,
    }
  },
  async mounted() {
    const term = this.$store.state.searchText

    this.results = await getResults(term)
  },
  async watchQuery(newQuery) {
    const term = newQuery.term || ''
    this.results = await getResults(term)
  },
}
</script>
