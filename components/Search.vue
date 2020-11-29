<template>
  <section class="search-container">
    <button class="btn search-btn">
      <fa-icon icon="search" />
    </button>
    <input
      v-model="searchInput"
      type="search"
      placeholder="Procure pelo conteúdo"
      @keydown.enter="submitSearch"
    />
    <button v-if="searchInput" class="btn close-btn">
      <fa-icon icon="times" @click="searchInput = ''" />
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
        query: { term: this.searchInput },
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
  @apply bg-whitebits rounded-full flex flex-row items-center pl-2 pr-3;

  .btn {
    @apply w-6;
  }

  .search-btn {
    @apply text-redbits mr-1;
  }

  .close-btn {
    @apply hidden text-graybits-900;
  }

  input {
    @apply h-full text-graybits-900 flex-grow;
  }
}

@screen md {
  .search-container {
    height: 2.75rem;
    @apply mx-auto pl-3 pr-1;

    input {
      @apply text-xl order-1;
    }

    .btn {
      @apply text-2xl w-10 h-10;
    }

    .close-btn {
      border-right: solid 1px #838383;
      @apply inline-block order-2;
    }

    .search-btn {
      @apply order-3;
    }
  }
}
</style>
