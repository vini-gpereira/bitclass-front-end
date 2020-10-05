<template>
  <div class="w-full">
    <nav
      class="flex flex-row justify-between items-center mx-auto w-10/12 h-16 md:w-8/12 md:h-32"
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
        <button class="w-auto h-auto" @click="openMenu">
          <fa-icon icon="bars" class="md:hidden fa-lg"></fa-icon>
        </button>
      </div>
    </nav>
    <ul
      id="menu"
      class="max-h-0 overflow-hidden transition-maxh duration-300 ease-out bg-graybits-900"
    >
      <li>
        <a href="https://codelab.ime.usp.br/#/" class="nav-btn">UCL</a>
      </li>
      <hr class="w-11/12 mx-auto" />
      <li>
        <NuxtLink to="/videos" class="nav-btn text-redbits">Videos</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuActive: false,
    }
  },
  methods: {
    openMenu() {
      const menuEl = document.getElementById('menu')
      if (this.isMenuActive) {
        menuEl.style.maxHeight = '0px'
      } else {
        menuEl.style.maxHeight = menuEl.scrollHeight + 'px'
      }
      this.isMenuActive = !this.isMenuActive
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  li {
    @apply w-full px-4 h-12 flex items-center;
  }
}

.nav-btn {
  @apply text-2xl text-center;
}
</style>
