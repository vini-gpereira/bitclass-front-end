<template>
  <div class="w-full mt-4">
    <nav
      class="flex flex-row justify-between items-center mx-auto w-10/12 h-12 md:w-8/12 md:h-32"
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
        <NuxtLink to="/about" class="nav-btn ml-2 hidden md:inline-block"
          >Sobre</NuxtLink
        >
        <button class="w-auto h-auto" @click="openMenu">
          <fa-icon icon="bars" class="md:hidden fa-lg"></fa-icon>
        </button>
      </div>
    </nav>
    <ul
      id="menu"
      class="divide-y divide-graybits-100 max-h-0 md:hidden overflow-hidden transition-maxh duration-300 ease-out bg-graybits-900"
    >
      <li>
        <a href="https://codelab.ime.usp.br/#/" class="nav-btn">UCL</a>
      </li>
      <li>
        <NuxtLink to="/about" class="nav-btn">Sobre</NuxtLink>
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
  @apply text-xl text-left w-full h-full leading-12;
}
</style>
