<template>
  <nav class="navbar-container" :class="{ scrolled: !atTopOfPage }">
    <NuxtLink to="/" class="logo">BitClass</NuxtLink>
    <v-btn icon small class="btn open-menu-btn" @click="showMenu = !showMenu">
      <fa-icon icon="bars" class="fa-2x"></fa-icon>
    </v-btn>
    <transition name="roll">
      <div v-show="showMenu" class="nav-options">
        <Search />
        <section class="nav-links">
          <NuxtLink to="/" class="nav-link home-link">
            <span> Início </span>
          </NuxtLink>
          <a href="https://codelab.ime.usp.br/#/" class="ucl-link nav-link">
            <span> UCL </span>
          </a>
          <NuxtLink to="/about" class="about-link nav-link">
            <span> Sobre </span>
          </NuxtLink>
        </section>
        <v-btn
          icon
          small
          class="btn close-menu-btn"
          @click="showMenu = !showMenu"
        >
          <fa-icon icon="times" class="fa-2x"></fa-icon>
        </v-btn>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showMenu: false,
      atTopOfPage: true,
      windowWidth: 0,
    }
  },
  watch: {
    windowWidth(newValue) {
      if (newValue >= 768) this.showMenu = true
      else this.showMenu = false
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) this.atTopOfPage = false
      else this.atTopOfPage = true
    },
    handleResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-container {
  padding-left: 7px;
  @apply w-full items-center h-16 pl-4 pr-2
  mx-auto flex flex-row justify-between 
  fixed top-0 z-10 bg-graybits-500;

  &.scrolled {
    box-shadow: 0 0 15px #000;
  }

  .logo {
    @apply text-4xl font-fredoka text-redbits;
  }

  .btn {
    @apply inline-block h-10 w-10;

    &.open-menu-btn {
      @apply text-whitebits;
    }

    &.close-menu-btn {
      @apply bg-whitebits text-graybits-900 mb-5;
    }
  }

  .nav-options {
    box-shadow: 0 0 15px #000;
    @apply fixed z-10 bottom-0 left-0 
      w-full bg-graybits-900
      flex flex-col items-center pt-5;

    .nav-links {
      @apply w-full flex flex-col my-3;

      .nav-link {
        @apply w-full text-center text-2xl
          h-12 flex items-center justify-center;
      }
    }
  }
}

.roll-enter-active {
  animation: slide 200ms;
}

.roll-leave-active {
  animation: slide 200ms reverse;
}

@keyframes slide {
  0% {
    bottom: -50%;
  }
  100% {
    bottom: 0;
  }
}

@screen md {
  .navbar-container {
    width: 95%;
    @apply h-24 px-0;

    .logo {
      font-size: 3.5rem;
      @apply mr-10;
    }

    .btn {
      @apply hidden;
    }

    .nav-options {
      @apply static z-0 flex-row 
      bg-transparent shadow-none 
      pt-0 flex-grow;

      .nav-links {
        width: 12rem;
        @apply flex-row justify-between ml-10;

        .nav-link {
          @apply w-auto text-3xl;
        }

        .home-link {
          @apply hidden;
        }
      }
    }
  }
}
</style>
