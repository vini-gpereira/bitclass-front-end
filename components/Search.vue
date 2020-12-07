<template>
  <section class="search-container">
    <input
      v-model="searchInput"
      type="search"
      placeholder="Procure pelo conteúdo"
      @keydown.enter="submitSearch"
    />
    <button v-if="searchInput" class="btn close-btn" @click="searchInput = ''">
      <fa-icon icon="times" @click="searchInput = ''" />
    </button>
    <button class="btn search-btn" @click="submitSearch">
      <fa-icon icon="search" />
    </button>
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
  mounted() {
    const term = this.$route.query.term || this.$store.state.searchText || ''

    this.searchInput = term

    this.$store.commit('changeSearchText', term)
  },
  methods: {
    submitSearch() {
      this.$store.commit('changeSearchText', this.searchInput)

      this.$router.push({
        name: 'results',
        query: { ...this.$route.query, term: this.searchInput },
      })
    },
  },
}
</script>

<style lang="scss">
.search-container {
  width: 90%;
  max-width: 40rem;
  height: 2.25rem;
  @apply bg-whitebits rounded-full flex flex-row items-center pl-2 pr-1;

  .btn {
    @apply h-6 flex items-center justify-center px-3;
  }

  .search-btn {
    @apply text-redbits;
  }

  .close-btn {
    border-right: solid 1px #838383;
    @apply text-graybits-100;
  }

  input {
    @apply h-full text-graybits-900 flex-grow px-1;
  }
}

@screen md {
  .search-container {
    height: 2.75rem;
    @apply w-auto max-w-none pl-3 pr-1 mr-10 flex-grow;

    input {
      @apply text-xl;
    }

    .btn {
      @apply text-2xl h-10;
    }
  }
}
</style>
