<template>
  <div v-if="video" class="watch-container">
    <VideoContainer :video="video" />
    <Suggestions :suggestions="suggestions" />
  </div>
</template>

<script>
import { getSuggestions, getVideo } from '@/api/app'

export default {
  data() {
    return {
      video: null,
      suggestions: null,
    }
  },
  async mounted() {
    const videoId = this.$route.query.v
    await this.changeVideo(videoId)
  },
  methods: {
    async changeVideo(videoId) {
      if (!videoId) {
        this.$router.push({ name: 'index' })
        return
      }

      const video = await getVideo(videoId)

      if (!video) {
        this.$router.push({ name: 'index' })
        return
      }

      this.video = video
      this.suggestions = await getSuggestions(videoId)
    },
  },
  async watchQuery(newQuery) {
    const videoId = newQuery.v
    await this.changeVideo(videoId)
  },
}
</script>

<style scoped>
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
