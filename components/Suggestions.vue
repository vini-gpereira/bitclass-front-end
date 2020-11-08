<template>
  <ul class="mt-2">
    <li
      v-for="(video, index) in suggestions"
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
    suggestions: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.video-result-wrapper {
  @apply w-full p-2 mb-2 border-b-2 border-graybits-100;
}
</style>
