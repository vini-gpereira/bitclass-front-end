<template>
  <NuxtLink
    :to="{ path: 'watch', query: { v: video.id } }"
    class="video-result-container"
  >
    <div class="thumb-wrapper">
      <img
        :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`"
        alt="video-thumbnail"
        class="w-full"
      />
    </div>
    <div class="video-info-container">
      <h1 class="title">{{ video.title }}</h1>
      <p class="post-date-and-duration">
        {{ video.postDate }} • {{ video.duration }}
      </p>
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
.video-result-container {
  @apply flex-row duration-200 ease-out;
}

.thumb-wrapper {
  @apply w-auto h-full border border-whitebits;
}

.thumb-wrapper img {
  @apply w-full;
}

.video-info-container {
  @apply w-full mt-2;
}

.title {
  @apply text-lg;
}

.post-date-and-duration {
  @apply text-base;
}

@screen md {
  .video-result-container {
    @apply flex p-2 transition-shadow;
  }

  .video-result-container:hover {
    @apply shadow-focus;
  }

  .thumb-wrapper {
    min-width: 320px;
    max-width: 320px;
  }

  .video-info-container {
    @apply flex flex-col justify-between mt-0 ml-3;
  }

  .title {
    @apply text-3xl;
  }

  .post-date-and-duration {
    @apply text-xl;
  }
}
</style>
