<template>
  <section class="video-wrapper">
    <iframe
      :src="`https://www.youtube.com.br/embed/${videoId}`"
      class="absolute top-0 left-0 w-full h-full"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
  </section>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.video-wrapper {
  @apply relative;

  padding-bottom: 56.25%;
}
</style>
