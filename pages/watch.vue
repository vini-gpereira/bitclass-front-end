<template>
  <div v-if="video" class="watch-container">
    <VideoContainer :video="video" />
    <Suggestions :suggestions="suggestions" />
  </div>
</template>

<script>
import { getSuggestions, getVideo } from '@/mock/api'

export default {
  data() {
    return {
      video: null,
      suggestions: null,
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
  },
  watchQuery(newQuery) {
    const videoId = newQuery.v
    this.changeVideo(videoId)
  },
}
</script>

<style lang="scss" scoped>
.watch-container {
  @apply flex flex-col w-full items-center;
}

@screen xl {
  .watch-container {
    width: 95%;
    @apply flex-row justify-between;
  }
}
</style>
