<template>
  <ul>
    <li v-for="(video, index) in suggestions" :key="index">
      <VideoResult :video="video" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    suggestions: {
      type: Array,
      default: null,
    },
  },
}
</script>
