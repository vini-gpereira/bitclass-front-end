<template>
  <div id="video-container" class="video-container animation">
    <section class="video-bar-container top-bar">
      <h1>{{ video.title }}</h1>
      <v-btn
        icon
        large
        color="var(--white)"
        class="show-suggestions-button"
        @click="toggleSuggestions"
      >
        <fa-icon
          id="show-suggestions-icon"
          icon="angle-left"
          class="rotate-0 fa-2x"
        ></fa-icon>
      </v-btn>
    </section>
    <Video :video-id="video.id" />
    <section class="video-bar-container bottom-bar">
      <div class="date">
        {{ video.postDate }}
      </div>
      <v-btn
        icon
        color="var(--white)"
        class="show-description-btn"
        @click="toogleDescription"
      >
        <fa-icon
          id="show-description-icon"
          icon="angle-down"
          class="show-icon animation fa-lg"
        ></fa-icon>
      </v-btn>
    </section>
    <div v-show="showDescription" class="description-wrapper">
      <Description :video="video" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      windowWidth: 0,
      showDescription: false,
      showSuggestions: false,
    }
  },
  mounted() {
    this.handleResize()
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    toggleSuggestions() {
      const showSuggsIcon = document.getElementById('show-suggestions-icon')
      const videoContainer = document.getElementById('video-container')
      const suggsContainer = document.getElementById('suggestions-container')

      this.showSuggestions = !this.showSuggestions

      if (this.showSuggestions) {
        showSuggsIcon.style.transform = 'rotate(180deg)'

        videoContainer.style.width = '74%'

        suggsContainer.style.width = '25%'
        suggsContainer.style.padding = '0.75rem'
        suggsContainer.style.overflow = 'auto'
      } else {
        showSuggsIcon.style.transform = 'rotate(0)'

        videoContainer.style.width = '100%'

        suggsContainer.style.width = '0%'
        suggsContainer.style.padding = '0rem'
        suggsContainer.style.overflow = 'hidden'
      }
    },
    toogleDescription() {
      const showDescIcon = document.getElementById('show-description-icon')

      this.showDescription = !this.showDescription

      if (this.showDescription) {
        showDescIcon.style.transform = 'rotate(180deg)'
      } else {
        showDescIcon.style.transform = 'rotate(0)'
      }
    },
    handleResize() {
      const windowWidth = window.innerWidth

      if (windowWidth >= 1280) this.showDescription = true
      else this.showDescription = false

      this.windowWidth = windowWidth
    },
  },
}
</script>

<style scoped>
.video-container {
  @apply flex flex-col w-full;
}

.video-bar-container {
  @apply flex flex-row px-3 justify-between items-center;
}

.top-bar {
  @apply mb-2 text-xl;
}

.show-suggestions-button {
  @apply hidden;
}

.bottom-bar {
  @apply items-center pb-2 mt-2 border-b-2 border-graybits-900;
}

.author-and-date-wrapper {
  @apply flex flex-col;
}

.separator {
  @apply hidden;
}

.date {
  @apply text-base;
}

.show-description-icon {
  @apply transition-transform rotate-0;
}

.description-wrapper {
  @apply overflow-hidden
  border-b-2 border-graybits-900;
}

.animation {
  @apply duration-300 ease-out;
}

@screen sm {
  .top-bar {
    @apply text-2xl;
  }

  .date {
    @apply text-2xl;
  }
}

@screen xl {
  .video-container {
    height: 80rem;
    @apply mb-8 transition-width;
  }

  .video-bar-container {
    @apply px-0;
  }

  .show-suggestions-button {
    @apply inline-block;
  }

  .separator {
    @apply inline-block text-2xl mr-2;
  }

  .show-description-btn {
    @apply hidden;
  }

  .show-description-icon {
    @apply rotate-0;
  }

  .description-wrapper {
    @apply border-b-0 flex-grow;
  }
}
</style>
