<template>
  <div>
    <ul v-if="type === 'videos'">
      <li v-for="(video, index) in results" :key="index">
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
import VideoResult from './VideoResult.vue'
import CategoryResult from './CategoryResult.vue'

export default {
  components: {
    VideoResult,
    CategoryResult,
  },
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
