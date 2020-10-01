<template>
  <div class="w-full">
    <nav
      class="flex flex-row justify-between items-center mx-auto w-10/12 h-24 md:w-8/12 md:h-32"
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
        <button @click="openMenu" class="w-auto h-auto">
          <fa-icon icon="bars" class="md:hidden fa-lg"></fa-icon>
        </button>
      </div>
    </nav>
    <ul
      id="menu"
      class="w-full h-0 overflow-hidden transition-height duration-200 ease-in"
    >
      <li class="w-full h-4 px-4">
        <a href="https://codelab.ime.usp.br/#/" class="nav-btn">UCL</a>
      </li>
      <li class="w-full h-4 px-4">
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
      isMenuActive: false
    }
  },
  methods: {
    openMenu() {
      const menuEl = document.getElementById('menu')
      if (this.isMenuActive) {
        menuEl.style.height = '0px'
      } else {
        menuEl.style.height = '100px'
      }
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>>

<style scoped>
.nav-btn {
  @apply w-auto text-2xl text-center;
}
</style>