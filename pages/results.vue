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
    const term = this.$route.query.term || ''
    const type = this.$route.query.type || 'videos'

    this.resultList = getResults(term)

    this.$store.commit('changeSearchText', term)
    this.$store.commit('changeSearchType', type)
  },
}
</script>
