<template>
  <section>
    <div>
      <input
        v-model="searchInput"
        type="text"
        placeholder="Procure pelo conteúdo"
      />
      <span>
        <v-icon
          v-if="searchInput"
          icon="clear"
          @click="searchInput = ''"
        ></v-icon>
        <div v-if="searchInput"></div>
        <v-icon icon="search"></v-icon>
      </span>
    </div>
    <div>
      <button value="videos">Videos</button>
      <button>Assuntos</button>
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
}
</script>
