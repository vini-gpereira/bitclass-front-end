<template>
  <div>
    <section class="video-bar-container top-bar">
      <h1>Titulo do video</h1>
      <button class="hidden">
        <fa-icon icon="bars"></fa-icon>
      </button>
    </section>
    <Video :video-id="videoId" />
    <section class="video-bar-container bottom-bar">
      <div class="author-and-date-wrapper">
        <span class="text-lg">Vinicius Pereira</span>
        <span class="text-xs">02/11/2020</span>
      </div>
      <v-btn icon color="var(--white)" @click="handleShowDescriptionClick">
        <fa-icon
          id="show-description-icon"
          icon="angle-down"
          class="show-description-icon animation fa-lg"
        ></fa-icon>
      </v-btn>
    </section>
    <div id="description-wrapper" class="description-wrapper animation">
      <Description :video-id="videoId" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      showDescription: false,
    }
  },
  methods: {
    handleShowDescriptionClick() {
      const showDescIcon = document.getElementById('show-description-icon')
      const descWrapper = document.getElementById('description-wrapper')

      this.showDescription = !this.showDescription

      if (this.showDescription) {
        showDescIcon.style.transform = 'rotate(180deg)'
        descWrapper.style.maxHeight = descWrapper.scrollHeight + 'px'
      } else {
        showDescIcon.style.transform = 'rotate(0)'
        descWrapper.style.maxHeight = '0px'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.video-bar-container {
  @apply flex flex-row px-3 justify-between;

  &.top-bar {
    @apply mb-2 text-xl;
  }

  &.bottom-bar {
    @apply items-center pb-2 mt-2 border-b-2 border-graybits-900;
  }

  .author-and-date-wrapper {
    @apply flex flex-col;
  }
}

.animation {
  @apply duration-300 ease-out;
}

.show-description-icon {
  @apply transition-transform rotate-0;
}

.description-wrapper {
  @apply overflow-hidden transition-maxh max-h-0;
}
</style>
