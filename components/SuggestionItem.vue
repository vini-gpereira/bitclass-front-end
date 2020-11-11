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

<style lang="scss" scoped>
.video-link-container {
  @apply flex flex-col;

  .image-wrapper {
    @apply w-full flex flex-col border border-whitebits;

    img {
      @apply w-full;
    }
  }

  .suggestion-data-container {
    @apply flex flex-col;

    h1 {
      @apply text-xl mt-1;
    }

    span {
      @apply text-base;
    }
  }
}
</style>
