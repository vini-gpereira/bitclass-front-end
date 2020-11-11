<template>
  <NuxtLink :to="{ path: 'watch', query: { v: video.id } }">
    <div>
      <img :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`" />
    </div>
    <div>
      <h1>{{ video.title }}</h1>
      <span>
        {{ video.author }} • {{ video.duration }} • {{ video.postDate }}
      </span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
