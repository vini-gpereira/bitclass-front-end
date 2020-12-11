<template>
  <section class="description-container">
    <h1 class="description-title">Descrição</h1>
    <p class="description-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur.
    </p>
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

<style scoped>
.description-container {
  @apply flex flex-col items-center justify-center;
}
</style>
