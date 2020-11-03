<template>
  <section>
    <iframe :src="`https://www.youtube.com.br/embed/${videoId}`"></iframe>
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
