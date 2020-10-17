<template>
  <Results :type="searchType" :results="results" />
</template>

<script>
import { getResults } from '@/mock/api'

export default {
  data() {
    return {
      resultList: [],
    }
  },
  computed: {
    searchType() {
      return this.$store.state.searchType
    },
    results() {
      return this.resultList[this.searchType]
    },
  },
  mounted() {
    this.resultList = getResults()
  },
}
</script>
