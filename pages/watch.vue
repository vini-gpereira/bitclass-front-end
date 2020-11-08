<template>
  <div class="watch-container">
    <VideoContainer :video-id="videoId" />
    <Suggestions :suggestions="suggestions" />
  </div>
</template>

<script>
import { getSuggestions } from '@/mock/api'

export default {
  data() {
    return {
      videoId: '',
      suggestions: null,
    }
  },
  mounted() {
    const videoId = this.$route.query.v
    this.changeSuggestions(videoId)
  },
  methods: {
    changeSuggestions(videoId) {
      if (!videoId) {
        this.$router.push({ name: 'index' })
        return
      }

      this.videoId = videoId
      this.suggestions = getSuggestions(this.videoId)
    },
  },
  watchQuery(newQuery) {
    const videoId = newQuery.v
    this.changeSuggestions(videoId)
  },
}
</script>

<style lang="scss" scoped>
.watch-container {
  @apply w-full mt-8;
}
</style>
