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
