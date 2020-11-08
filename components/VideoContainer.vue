<template>
  <div>
    <section class="flex flex-row justify-between px-3 mb-2 text-xl">
      <h1>Titulo do video</h1>
      <button class="hidden">
        <fa-icon icon="bars"></fa-icon>
      </button>
    </section>
    <Video :video-id="videoId" />
    <section
      class="flex flex-row items-center px-3 pb-2 mt-2 border-b-2 border-graybits-900"
    >
      <div class="flex flex-col">
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

<style></style>
