<template>
  <div v-if="video" class="watch-container">
    <VideoContainer :video="video" />
    <Suggestions :suggestions="suggestions" :show="showSuggestions" />
  </div>
</template>

<script>
import { getSuggestions, getVideo } from '@/mock/api'

export default {
  data() {
    return {
      video: null,
      suggestions: null,
      showSuggestions: true,
    }
  },
  mounted() {
    const videoId = this.$route.query.v
    this.changeVideo(videoId)
  },
  methods: {
    changeVideo(videoId) {
      if (!videoId) {
        this.$router.push({ name: 'index' })
        return
      }

      this.video = getVideo(videoId)
      this.suggestions = getSuggestions(videoId)
    },
    changeSuggestionsDisplay() {
      this.showSuggestions = !this.showSuggestions
    },
  },
  watchQuery(newQuery) {
    const videoId = newQuery.v
    this.changeVideo(videoId)
  },
}
</script>

<style lang="scss" scoped>
.watch-container {
  @apply w-full mt-8;
}

@screen xl {
  .watch-container {
    width: 95%;
    @apply flex flex-row justify-between;
  }
}
</style>
