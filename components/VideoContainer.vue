<template>
  <div>
    <section class="video-bar-container top-bar">
      <h1>Titulo do video</h1>
      <button class="hidden">
        <fa-icon icon="bars"></fa-icon>
      </button>
    </section>
    <Video :video-id="videoId" />
    <section class="video-bar-container bottom-bar">
      <div class="author-and-date-wrapper">
        <span class="text-lg">Vinicius Pereira</span>
        <span class="text-xs">02/11/2020</span>
      </div>
      <v-btn icon color="var(--white)">
        <fa-icon icon="angle-down" class="fa-lg"></fa-icon>
      </v-btn>
    </section>
    <Description :video-id="videoId" :show-description="true" />
  </div>
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
.video-bar-container {
  @apply flex flex-row px-3 justify-between;

  &.top-bar {
    @apply mb-2 text-xl;
  }

  &.bottom-bar {
    @apply items-center pb-2 mt-2 border-b-2 border-graybits-900;
  }

  .author-and-date-wrapper {
    @apply flex flex-col;
  }
}
</style>
