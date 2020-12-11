<template>
  <NuxtLink
    :to="{ path: 'watch', query: { v: video.id } }"
    class="video-link-container"
  >
    <div class="image-wrapper">
      <img
        :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`"
        alt="suggestion-thumbnail"
      />
    </div>
    <div class="suggestion-data-container">
      <h1>{{ video.title }}</h1>
      <span>{{ video.author }}</span>
      <span>{{ video.duration }} • {{ video.postDate }}</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.video-link-container {
  @apply flex flex-col;
}

.image-wrapper {
  @apply w-full flex flex-col border border-whitebits;
}
.image-wrapper img {
  @apply w-full;
}

.suggestion-data-container {
  @apply flex flex-col;
}

.suggestion-data-container h1 {
  @apply text-xl mt-1;
}

.suggestion-data-container span {
  @apply text-base;
}

@screen sm {
  .video-link-container {
    @apply flex-row p-2;
  }

  .video-link-container:hover {
    @apply shadow-focus transition-shadow duration-200 ease-out;
  }

  .image-wrapper {
    width: 20rem;
    min-width: 20rem;
    @apply mr-2;
  }

  .suggestion-data-container {
    @apply flex-grow;
  }

  .suggestion-data-container h1 {
    @apply mt-0 text-2xl;
  }

  .suggestion-data-container span {
    @apply text-lg;
  }
}

@screen xl {
  .video-link-container {
    justify-content: normal;
    @apply flex-col;
  }

  .image-wrapper {
    @apply w-full min-w-0;
  }

  .suggestion-data-container {
    @apply w-auto;
  }

  .suggestion-data-container h1 {
    @apply text-xl mt-1;
  }

  .suggestion-data-container span {
    @apply text-base;
  }
}
</style>
