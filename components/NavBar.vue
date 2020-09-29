<template>
  <nav class="flex flex-row justify-between items-center w-8/12 h-32">
    <a class="font-fredoka text-redbits text-5xl">BitClass</a>
    <div class="flex flex-row justify-between w-40">
      <a class="nav-btn">UCL</a>
      <a class="nav-btn text-redbits">Videos</a>
    </div>
  </nav>
</template>

<style scoped>
a {
  @apply cursor-pointer;
}
.nav-btn {
  @apply w-auto text-2xl text-center;
}
</style>