<template>
  <nav class="flex flex-row justify-between items-center w-8/12 h-32">
    <NuxtLink to="/" class="font-fredoka text-redbits text-5xl"
      >BitClass</NuxtLink
    >
    <div class="flex flex-row justify-between w-40">
      <a href="https://codelab.ime.usp.br/#/" class="nav-btn">UCL</a>
      <NuxtLink to="/videos" class="nav-btn text-redbits">Videos</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-btn {
  @apply w-auto text-2xl text-center;
}
</style>