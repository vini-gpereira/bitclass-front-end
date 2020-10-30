<template>
  <section class="w-10/12 mx-auto mt-5 text-sm md:w-9/12 md:text-2xl">
    <div
      class="flex flex-row h-10 px-4 rounded-full md:px-5 bg-whitebits md:h-16"
    >
      <fa-icon
        icon="search"
        class="h-full mr-3 text-redbits md:hidden"
      ></fa-icon>
      <input
        v-model="searchInput"
        type="search"
        placeholder="Procure pelo conteúdo"
        class="w-full mr-3 text-black md:mr-5"
        @keydown.enter="submitSearch"
      />
      <fa-icon
        v-if="searchInput"
        icon="times"
        class="h-full text-gray-600 cursor-pointer md:mr-5 clear-icon"
        @click="searchInput = ''"
      ></fa-icon>
      <span
        v-if="searchInput"
        class="hidden w-px h-10 my-auto mr-5 bg-gray-400 md:inline-block"
      ></span>
      <fa-icon
        icon="search"
        class="hidden h-full cursor-pointer text-redbits md:inline-block"
        @click="submitSearch"
      ></fa-icon>
    </div>
    <div class="mt-2 flex-row-between md:h-16 md:mt-6">
      <button
        :class="searchType == 'videos' ? 'selected' : 'no-selected'"
        @click="handleBtnClick('videos')"
      >
        Videos
      </button>
      <button
        :class="searchType == 'categories' ? 'selected' : 'no-selected'"
        @click="handleBtnClick('categories')"
      >
        Assuntos
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchInput: '',
    }
  },
  computed: {
    searchType() {
      return this.$store.state.searchType
    },
  },
  mounted() {
    const term = this.$route.query.term || ''
    const type = this.$route.query.type || this.searchType || ''

    this.searchInput = term

    this.$store.commit('changeSearchText', term)
    this.$store.commit('changeSearchType', type)
  },
  methods: {
    handleBtnClick(newSearchType) {
      if (newSearchType !== this.searchType) {
        const query = this.$route.query

        this.$store.commit('changeSearchType', newSearchType)
        this.$router.replace({ query: { ...query, type: newSearchType } })
      }
    },
    submitSearch() {
      this.$store.commit('changeSearchText', this.searchInput)

      this.$router.push({
        name: 'results',
        query: { term: this.searchInput, type: this.searchType },
      })
    },
  },
}
</script>

<style scoped>
button {
  @apply rounded-full h-10 w-al-mid border-solid border border-redbits;
}
.clear-icon {
  width: 0.8em;
}
.selected {
  @apply bg-redbits;
}
.no-selected {
  @apply bg-transparent text-redbits;
}
@screen md {
  button {
    @apply h-full border-2;
  }

  .search-icon {
    width: 1.2em;
  }
}
</style>
