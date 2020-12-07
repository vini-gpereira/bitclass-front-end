<template>
  <div id="suggestions-container" class="suggestions-container">
    <h1 class="suggestions-title">Sugestões</h1>
    <ul class="suggestions-list">
      <li
        v-for="(video, index) in suggestions"
        :key="index"
        class="suggestion-item-wrapper"
      >
        <SuggestionItem v-scroll-to="'#app'" :video="video" />
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
  @apply flex flex-col items-center px-3;

  .suggestions-title {
    @apply text-2xl text-redbits my-2;
  }

  .suggestions-list {
    @apply w-full;

    .suggestion-item-wrapper {
      @apply w-full mb-4 border-b-2 border-graybits-900 pb-4;
    }
  }
}

@screen sm {
  .suggestions-container {
    max-width: 50rem;

    .suggestions-title {
      @apply text-3xl;
    }

    .suggestions-list {
      .suggestion-item-wrapper {
        @apply border-graybits-900;
      }
    }
  }
}

@screen xl {
  .suggestions-container {
    width: 0%;
    max-width: 25%;
    height: 80rem;
    @apply bg-graybits-900 mt-0 mb-8 p-0 
    flex-grow overflow-hidden duration-300
    ease-out transition-width;

    .suggestions-title {
      @apply mt-0 mb-2;
    }

    .suggestions-list {
      .suggestion-item-wrapper {
        @apply border-graybits-100;
      }
    }
  }
}
</style>
