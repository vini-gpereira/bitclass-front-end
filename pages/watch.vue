<template>
  <div>
    <div>
      <section>
        <h1>Titulo do video</h1>
        <fa-icon icon="bars"></fa-icon>
      </section>
      <Video :video-id="videoId" />
      <Description :video-id="videoId" />
    </div>
    <div>
      <Suggestions :suggestions="suggestions" />
    </div>
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
