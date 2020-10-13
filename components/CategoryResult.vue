<template>
  <div>
    <button @click="expandCategory">
      <p>{{ category.name }}</p>
      <fa-icon :id="`angle-icon-${id}`" icon="angle-down"></fa-icon>
    </button>
    <ul :id="`category-content-${id}`">
      <li v-for="(video, index) in category.videos" :key="index">
        <a href="/">
          <p>{{ video.name }}</p>
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
