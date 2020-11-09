<template>
  <div class="suggestions-container">
    <h1 class="suggestions-title">Sugestões</h1>
    <ul class="suggestions-list">
      <li
        v-for="(video, index) in suggestions"
        :key="index"
        class="video-result-wrapper"
      >
        <VideoResult :video="video" />
      </li>
    </ul>
  </div>
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
.suggestions-container {
  @apply flex flex-col items-center mt-2;

  .suggestions-title {
    @apply text-2xl text-redbits;
  }

  ul {
    .video-result-wrapper {
      @apply w-full p-2 mb-2 border-b-2 border-graybits-100;
    }
  }
}

@screen md {
  .suggestions-container {
    height: 80rem;
    @apply bg-graybits-900 mt-0 p-2 mb-8 ml-1;

    .suggestions-title {
      @apply text-3xl;
    }

    .suggestions-list {
      @apply overflow-y-scroll;
    }
  }
}
</style>
