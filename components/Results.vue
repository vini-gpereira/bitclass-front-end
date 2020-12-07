<template>
  <div class="results-container">
    <v-tabs
      v-model="tab"
      background-color="var(--gray)"
      color="var(--red)"
      class="tabs"
    >
      <v-tabs-slider color="var(--red)"></v-tabs-slider>
      <v-tab active-class="active-tab" class="tab">Videos</v-tab>
      <v-tab active-class="active-tab" class="tab">Categories</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="tabs-items">
      <v-tab-item>
        <ul class="flex flex-col items-center">
          <li
            v-for="(video, index) in results['videos']"
            :key="index"
            class="w-full pb-2 mb-2 border-b-2 border-graybits-100 md:p-0 md:pb-6 md:mb-6"
          >
            <VideoResult :video="video" />
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item>
        <ul class="md:text-2xl">
          <li
            v-for="(category, index) in results['categories']"
            :key="index"
            class="w-full"
          >
            <CategoryResult :id="index" :category="category" />
          </li>
        </ul>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
const types = ['videos', 'categories']

export default {
  props: {
    results: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tab: null,
    }
  },
  watch: {
    tab(newTab) {
      const type = types[newTab]

      this.$store.commit('changeSearchText', type)

      this.$router.push({
        query: { ...this.$route.query, type },
      })
    },
  },
  mounted() {
    const type = this.$route.query.type || this.$store.state.searchType

    this.$store.commit('changeSearchText', type)

    this.tab = types.indexOf(type)
  },
}
</script>

<style lang="scss">
.results-container {
  width: 90%;
  @apply flex flex-col items-center justify-center mb-16;

  .tabs {
    @apply w-auto mb-4;

    .tab {
      color: var(--white) !important;
      @apply normal-case text-lg;
    }

    .active-tab {
      color: var(--red) !important;
    }
  }

  .tabs-items {
    background-color: var(--gray) !important;
    @apply w-full;
  }
}

@screen md {
  .results-container {
    width: 95%;
    @apply mt-16;
  }
}
</style>
