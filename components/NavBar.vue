<template>
  <nav
    class="flex flex-row justify-between items-center w-10/12 h-24 md:w-8/12 md:h-32"
  >
    <NuxtLink to="/" class="font-fredoka text-redbits text-4xl md:text-5xl"
      >BitClass</NuxtLink
    >
    <div>
      <a
        href="https://codelab.ime.usp.br/#/"
        class="nav-btn mr-2 hidden md:inline-block"
        >UCL</a
      >
      <NuxtLink
        to="/videos"
        class="nav-btn text-redbits ml-2 hidden md:inline-block"
        >Videos</NuxtLink
      >
      <fa-icon icon="bars" class="md:hidden"></fa-icon>
    </div>
  </nav>
</template>

<style scoped>
.nav-btn {
  @apply w-auto text-2xl text-center;
}
</style>