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

<style>
.iframe-container {
  padding-bottom: min(625px, 55%);
  @apply relative;
}

.iframe-container iframe {
  @apply absolute top-0 left-0 w-full h-full;
}
</style>
