<template>
  <section class="mx-auto w-10/12 text-sm mt-5 md:w-9/12 md:text-xl">
    <div
      class="px-4 flex flex-row bg-whitebits border-2 border-solid rounded-full transition duration-300 border-2 border-solid focus-within:border-redbits md:h-12"
    >
      <input
        v-model="searchInput"
        type="search"
        placeholder="Procure pelo conteúdo"
        class="text-black w-full mr-3"
      />
      <div class="flex flex-row items-center">
        <fa-icon
          v-if="searchInput"
          icon="times"
          class="text-gray-600 mr-3 cursor-pointer"
          @click="searchInput = ''"
        ></fa-icon>
        <div v-if="searchInput" class="w-px h-8 bg-gray-500 mr-3"></div>
        <fa-icon icon="search" class="text-redbits cursor-pointer"></fa-icon>
      </div>
    </div>
    <div class="flex flex-row justify-between mt-2 md:h-12 md:mt-6">
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
