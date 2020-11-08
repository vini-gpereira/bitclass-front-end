<template>
  <section class="iframe-container">
    <iframe
      :src="`https://www.youtube.com.br/embed/${videoId}`"
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
.iframe-container {
  padding-bottom: 56.25%;
  @apply relative;

  iframe {
    @apply absolute top-0 left-0 w-full h-full;
  }
}
</style>
