<template>
  <div class="mt-8 md:w-10/12 md:mt-16">
    <ul v-if="type === 'videos'" class="flex flex-col items-center">
      <li
        v-for="(video, index) in results"
        :key="index"
        class="w-full p-2 mb-2 border-b-2 border-graybits-100 md:p-0 md:pb-6 md:mb-6"
      >
        <VideoResult :video="video" />
      </li>
    </ul>
    <ul v-else-if="type === 'categories'">
      <li v-for="(category, index) in results" :key="index">
        <CategoryResult :category="category" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'videos',
    },
    results: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
