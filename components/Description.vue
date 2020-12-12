<template>
  <section class="description-container">
    <h1 class="description-title">Descrição</h1>
    <p class="description-text" v-html="video.description"></p>
  </section>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tab: null,
    }
  },
}
</script>

<style>
.description-container {
  @apply h-full flex flex-col items-center px-6;
}

.description-title {
  @apply text-3xl text-redbits my-1;
}

.description-text {
  max-height: 15rem;
  max-width: 70rem;
  @apply w-full text-base overflow-y-auto mb-2;
}

.description-link {
  @apply text-redbits;
}

.description-link:hover {
  @apply cursor-pointer underline;
}

@screen sm {
  .description-text {
    max-height: 20rem;
    @apply text-lg overflow-y-auto;
  }
}

@screen xl {
  .description-text {
    @apply max-h-full text-xl flex-grow;
  }
}
</style>
