<template>
  <a href="/" class="">
    <div class="w-auto">
      <img
        :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`"
        alt="video-thumbnail"
        class="w-full"
      />
    </div>
    <div class="p-2 mb-2">
      <h1 class="text-lg">{{ video.title }}</h1>
      <p class="text-xs">
        {{ video.author }} - {{ video.postDate }} - {{ video.duration }}
      </p>
      <p class="hidden mt-auto text-xs md:inline-block">
        {{ video.description }}
      </p>
    </div>
  </a>
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
