<template>
  <div class="video-container">
    <section class="video-bar-container top-bar">
      <h1>{{ video.title }}</h1>
      <v-btn icon large color="var(--white)" class="show-suggestions-button">
        <fa-icon icon="bars" class="fa-2x"></fa-icon>
      </v-btn>
    </section>
    <Video :video-id="video.id" />
    <section class="video-bar-container bottom-bar">
      <div class="author-and-date-wrapper">
        <span class="author">{{ video.author }}</span>
        <span class="separator"> - </span>
        <span class="date">{{ video.postDate }}</span>
      </div>
      <v-btn
        icon
        color="var(--white)"
        class="show-description-btn"
        @click="handleShowDescriptionClick"
      >
        <fa-icon
          id="show-description-icon"
          icon="angle-down"
          class="show-description-icon animation fa-lg"
        ></fa-icon>
      </v-btn>
    </section>
    <div id="description-wrapper" class="description-wrapper animation">
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
.video-container {
  @apply flex flex-col;

  .video-bar-container {
    @apply flex flex-row px-3 justify-between;

    &.top-bar {
      @apply mb-2 text-xl;

      .show-suggestions-button {
        @apply hidden;
      }
    }

    &.bottom-bar {
      @apply items-center pb-2 mt-2 border-b-2 border-graybits-900;

      .author-and-date-wrapper {
        @apply flex flex-col;

        .author {
          @apply text-lg;
        }

        .separator {
          @apply hidden;
        }

        .date {
          @apply text-xs;
        }
      }
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
}

@screen md {
  .video-container {
    height: 80rem;
    @apply bg-graybits-900 p-2 mb-8 mr-1;

    .video-bar-container {
      @apply px-0;

      &.top-bar {
        @apply text-3xl;

        .show-suggestions-button {
          @apply inline-block;
        }
      }

      &.bottom-bar {
        .author-and-date-wrapper {
          @apply flex-row items-center;

          .author {
            @apply text-2xl mr-2;
          }

          .separator {
            @apply inline-block text-2xl mr-2;
          }

          .date {
            @apply text-2xl;
          }
        }

        .show-description-btn {
          @apply hidden;
        }
      }
    }

    .show-description-icon {
      @apply rotate-0;
    }

    .description-wrapper {
      @apply max-h-full;
    }
  }
}
</style>
