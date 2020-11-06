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
    this.videoId = this.$route.query.v

    if (!this.videoId) this.$router.push({ name: 'index' })

    this.suggestions = getSuggestions(this.videoId)
  },
}
</script>
