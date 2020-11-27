<template>
  <div class="navbar-container">
    <nav>
      <NuxtLink to="/" class="home-link">BitClass</NuxtLink>
      <div class="ucl-about-links">
        <a href="https://codelab.ime.usp.br/#/" class="ucl-link nav-link"
          >UCL</a
        >
        <NuxtLink to="/about" class="about-link nav-link">Sobre</NuxtLink>
      </div>
      <div class="nav-btns">
        <v-btn icon small class="open-btn">
          <fa-icon icon="search" class="fa-2x"></fa-icon>
        </v-btn>
        <v-btn icon small class="open-btn" @click="openMenu">
          <fa-icon icon="bars" class="fa-2x"></fa-icon>
        </v-btn>
      </div>
    </nav>
    <ul id="menu">
      <li>
        <a href="https://codelab.ime.usp.br/#/" class="nav-link">UCL</a>
      </li>
      <li>
        <NuxtLink to="/about" class="nav-link">Sobre</NuxtLink>
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
    openSearch() {},
  },
}
</script>

<style lang="scss" scoped>
.navbar-container {
  @apply w-full mt-4;

  nav {
    width: 90%;
    @apply items-center h-8 mx-auto flex flex-row justify-between mb-4;

    .home-link {
      @apply text-4xl font-fredoka text-redbits;
    }

    .ucl-about-links {
      @apply hidden text-3xl flex-row justify-between;

      .ucl-link {
        @apply mr-4;
      }

      .about-link {
        @apply ml-4;
      }
    }

    .nav-btns {
      .open-btn {
        color: var(--whitebits);
        @apply inline-block h-10 w-10;
      }
    }
  }

  ul {
    @apply overflow-hidden duration-300 
    ease-out max-h-0 transition-maxh
    bg-graybits-900 mb-0;

    li {
      @apply w-full px-4 h-12 flex items-center text-xl border-b-2 border-graybits-100;

      &:last-child {
        @apply border-b-0;
      }

      .nav-link {
        @apply text-left w-full h-full leading-12 cursor-pointer;
      }
    }
  }
}

@screen md {
  .navbar-container {
    nav {
      width: 95%;
      @apply h-32;

      .home-link {
        @apply text-6xl;
      }

      .ucl-about-links {
        @apply flex;
      }

      .open-menu-btn {
        @apply hidden;
      }
    }

    ul {
      @apply hidden;
    }
  }
}
</style>
