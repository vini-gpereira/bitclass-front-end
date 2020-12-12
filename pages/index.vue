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
    this.results = await getResults()
  },
}
</script>
