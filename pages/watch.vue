<template>
  <div>
    <div>
      <section>
        <h1>Titulo do video</h1>
        <fa-icon icon="bars"></fa-icon>
      </section>
      <Video :video-id="videoId" />
      <Description :video-id="videoId" />
    </div>
    <div>
      <Suggestions :video-id="videoId" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: '',
    }
  },
  mounted() {
    this.videoId = this.$route.query.v

    if (!this.videoId) this.$router.push({ name: 'index' })
  },
}
</script>
