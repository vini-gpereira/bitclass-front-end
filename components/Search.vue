<template>
  <section class="mx-auto w-10/12 h-64 text-sm mt-5">
    <div
      class="px-3 h-10 flex flex-row bg-whitebits border-2 border-solid rounded-full transition duration-300 border-2 border-solid focus-within:border-redbits"
    >
      <input
        v-model="searchInput"
        type="search"
        placeholder="Procure pelo conteúdo"
        class="text-black w-full mr-3"
      />
      <div class="text-xs flex flex-row items-center">
        <fa-icon
          v-if="searchInput"
          icon="times"
          class="text-black fa-lg mr-3 cursor-pointer"
          @click="searchInput = ''"
        ></fa-icon>
        <div v-if="searchInput" class="w-px h-8 bg-gray-500 mr-3"></div>
        <fa-icon
          icon="search"
          class="text-redbits fa-lg cursor-pointer"
        ></fa-icon>
      </div>
    </div>
    <div class="flex flex-row justify-between mt-2">
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
    handleBtnClick(searchType) {
      this.btnsClasses[this.selectedBtn] = 'no-selected'
      this.btnsClasses[searchType] = 'selected'
      this.selectedBtn = searchType
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
</style>
