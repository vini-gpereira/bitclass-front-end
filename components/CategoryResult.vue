<template>
  <div class="mb-1">
    <button
      class="flex flex-row items-center justify-between w-full h-12 px-2 bg-graybits-900 md:h-16"
      @click="expandCategory"
    >
      <p>{{ category.name }}</p>
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
        v-for="(video, index) in category.videos"
        :key="index"
        class="h-12 px-2 mt-1 bg-graybits-100 md:h-16"
      >
        <a
          href="/"
          class="flex flex-row items-center justify-between w-full h-full cursor-pointer"
        >
          <div class="mr-4">
            <p class="text-desc">{{ video.title }}</p>
          </div>
          <p>{{ video.duration }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
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
    }
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
