<template>
  <div class="suggestions-container">
    <h1 class="suggestions-title">Sugestões</h1>
    <ul class="suggestions-list">
      <li
        v-for="(video, index) in suggestions"
        :key="index"
        class="suggestion-item-wrapper"
      >
        <SuggestionItem :video="video" />
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
  @apply flex flex-col items-center mt-2 px-3;

  .suggestions-title {
    @apply text-2xl text-redbits mb-2;
  }

  .suggestions-list {
    @apply w-full;

    .suggestion-item-wrapper {
      @apply w-full mb-2 border-b-2 border-graybits-100 pb-2;
    }
  }
}

@screen md {
  .suggestions-container {
    height: 80rem;
    @apply bg-graybits-900 mt-0 mb-8 ml-1 p-3;

    .suggestions-title {
      @apply text-3xl;
    }

    .suggestions-list {
      @apply overflow-y-scroll;
    }
  }
}
</style>
