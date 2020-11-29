<template>
  <div class="app-container">
    <NavBar />
    <Nuxt class="content" />
  </div>
</template>

<style lang="scss">
@import '~assets/css/style.css';

.app-container {
  max-width: 1500px;
  @apply w-full flex flex-col
  items-center justify-center
  text-whitebits mx-auto;

  .content {
    @apply mt-16;
  }
}

@screen md {
  .app-container {
    .content {
      @apply mt-24;
    }
  }
}
</style>
