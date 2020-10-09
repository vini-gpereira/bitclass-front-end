<template>
  <section class="w-10/12 mx-auto mt-5 text-sm md:w-9/12 md:text-xl">
    <div
      class="flex flex-row h-10 px-3 transition duration-300 border-2 border-solid rounded-full md:px-4 bg-whitebits focus-within:border-redbits md:h-12"
    >
      <fa-icon
        icon="search"
        class="h-full mr-2 text-redbits md:hidden"
      ></fa-icon>
      <input
        v-model="searchInput"
        type="search"
        placeholder="Procure pelo conteúdo"
        class="w-full mr-2 text-black"
      />
      <fa-icon
        v-if="searchInput"
        icon="times"
        class="h-full text-gray-600 cursor-pointer md:mr-3"
        @click="searchInput = ''"
      ></fa-icon>
      <div
        v-if="searchInput"
        class="hidden w-px h-8 my-auto mr-3 bg-gray-500 md:inline-block"
      ></div>
      <fa-icon
        icon="search"
        class="hidden h-full cursor-pointer text-redbits md:inline-block"
      ></fa-icon>
    </div>
    <div class="mt-2 flex-row-between md:h-12 md:mt-6">
      <button :class="btnsClasses.videos" @click="handleBtnClick('videos')">
        Videos
      </button>
      <button
        :class="btnsClasses.categories"
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
      btnsClasses: {
        videos: 'selected',
        categories: 'no-selected',
      },
      searchType: 'videos',
    }
  },
  methods: {
    handleBtnClick(newSearchType) {
      this.btnsClasses[this.searchType] = 'no-selected'
      this.btnsClasses[newSearchType] = 'selected'
      this.searchType = newSearchType
    },
  },
}
</script>

<style scoped>
button {
  @apply rounded-full h-10 w-al-mid border-solid border border-redbits;
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
}
</style>
