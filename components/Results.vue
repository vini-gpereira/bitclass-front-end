<template>
  <ul class="results-container">
    <li
      v-for="(video, index) in results"
      :key="index"
      class="video-result-wrapper"
    >
      <VideoResult :video="video" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.results-container {
  width: 90%;
  max-width: 70rem;
  @apply flex flex-col items-center justify-center;
}

.video-result-wrapper {
  @apply w-full pb-2 mb-2 border-b-2 border-graybits-100;
}

@screen md {
  .results-container {
    width: 95%;
  }

  .video-result-wrapper {
    @apply p-0 pb-6 mb-6;
  }
}
</style>
