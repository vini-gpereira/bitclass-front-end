<template>
  <NuxtLink
    :to="{ path: 'watch', query: { v: video.id } }"
    class="flex-row duration-200 ease-out md:flex md:hover:shadow-focus md:p-2 md:transition-shadow"
  >
    <div class="w-auto h-full border border-whitebits thumb-container">
      <img
        :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`"
        alt="video-thumbnail"
        class="w-full"
      />
    </div>
    <div class="flex-col justify-between w-full mt-2 md:mt-0 md:ml-3 md:flex">
      <div class="md:flex-grow">
        <h1 class="text-lg md:text-xl lg:text-2xl">{{ video.title }}</h1>
        <p class="text-xs md:text-sm">
          {{ video.author }} - {{ video.postDate }} - {{ video.duration }}
        </p>
      </div>
      <div class="flex-grow hidden md:inline-block">
        <p class="w-full text-sm text-desc">
          {{ video.description }}
        </p>
      </div>
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
.text-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 18px;
  max-height: 54px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@screen md {
  .thumb-container {
    min-width: 320px;
    max-width: 320px;
  }
}
</style>
