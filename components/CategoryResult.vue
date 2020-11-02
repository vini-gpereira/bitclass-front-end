<template>
  <div class="mb-1">
    <button
      class="flex flex-row items-center justify-between w-full h-12 px-3 bg-graybits-900 md:h-16"
      @click="expandCategory"
    >
      <p>{{ category.label }}</p>
      <fa-icon
        :id="`angle-icon-${id}`"
        icon="angle-down"
        class="transition-transform duration-200 ease-out rotate-0"
      ></fa-icon>
    </button>
    <ul
      :id="`category-content-${id}`"
      class="overflow-hidden duration-200 ease-out transition-maxh max-h-0"
    >
      <li
        v-for="(video, index) in categoryVideos"
        :key="index"
        class="h-12 px-3 mt-1 bg-graybits-100 md:h-16"
      >
        <NuxtLink
          :to="{ path: 'watch', query: { v: video.id } }"
          class="flex flex-row items-center justify-between w-full h-full cursor-pointer"
        >
          <div class="mr-4">
            <p class="text-desc">{{ video.title }}</p>
          </div>
          <p>{{ video.duration }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { getVideo } from '@/mock/api'

export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
    category: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      active: false,
      categoryVideos: [],
    }
  },
  mounted() {
    this.categoryVideos = this.category.videosIds.map((id) => getVideo(id))
  },
  methods: {
    expandCategory() {
      const angleIconElement = document.getElementById(`angle-icon-${this.id}`)
      const contentElement = document.getElementById(
        `category-content-${this.id}`
      )

      if (this.active) {
        angleIconElement.style.transform = 'rotate(0)'
        contentElement.style.maxHeight = '0px'
      } else {
        angleIconElement.style.transform = 'rotate(180deg)'
        contentElement.style.maxHeight = `${contentElement.scrollHeight}px`
      }

      this.active = !this.active
    },
  },
}
</script>

<style scoped>
.text-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.3rem;
  max-height: 2.6rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
