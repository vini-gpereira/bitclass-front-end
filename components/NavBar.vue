<template>
  <div class="w-full mt-4">
    <nav
      class="items-center w-10/12 h-12 mx-auto flex-row-between md:w-8/12 md:h-32"
    >
      <NuxtLink to="/" class="text-4xl font-fredoka text-redbits md:text-6xl"
        >BitClass</NuxtLink
      >
      <div class="hidden text-3xl md:flex-row-between">
        <a href="https://codelab.ime.usp.br/#/" class="mr-4 nav-btn">UCL</a>
        <NuxtLink to="/about" class="ml-4 nav-btn">Sobre</NuxtLink>
      </div>
      <button class="inline-block w-auto h-auto md:hidden" @click="openMenu">
        <fa-icon icon="bars" class="fa-lg"></fa-icon>
      </button>
    </nav>
    <ul
      id="menu"
      class="overflow-hidden duration-300 ease-out divide-y divide-graybits-100 max-h-0 md:hidden transition-maxh bg-graybits-900"
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
        menuEl.style.marginBottom = '0rem'
      } else {
        menuEl.style.maxHeight = menuEl.scrollHeight + 'px'
        menuEl.style.marginBottom = '0.75rem'
      }
      this.isMenuActive = !this.isMenuActive
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  li {
    @apply w-full px-4 h-12 flex items-center text-xl;
  }
}
.nav-btn {
  @apply text-left w-full h-full leading-12 cursor-pointer;
}
</style>
