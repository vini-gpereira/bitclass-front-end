<template>
  <ul>
    <li v-for="(video, index) in suggestions" :key="index">
      <VideoResult :video="video" />
    </li>
  </ul>
</template>

<script>
import { getSuggestions } from '@/mock/api'

export default {
  props: {
    videoId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      suggestions: null,
    }
  },
  mounted() {
    this.suggestions = getSuggestions(this.videoId)
  },
}
</script>
