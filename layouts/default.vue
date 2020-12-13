<template>
  <div id="app" class="app-container">
    <NavBar />
    <Nuxt class="content" />
  </div>
</template>

<style>
.app-container {
  max-width: 1920px;
  @apply w-full flex flex-col
  items-center justify-center
  text-whitebits mx-auto;
}

.content {
  @apply mt-16;
}

@screen md {
  .content {
    margin-top: 7rem;
  }
}
</style>
