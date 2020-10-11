<template>
  <a>
    <img
      :src="`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`"
      alt="video-thumbnail"
    />
    <div>
      <h1>{{ video.title }}</h1>
      <p>{{ video.author }} - {{ video.postDate }} - {{ video.duration }}</p>
      <p>{{ video.description }}</p>
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
