<template>
  <section>
    <div>
      <span>Vinicius Pereira - 02/11/2020</span>
      <button>
        <fa-icon icon="angle-down"></fa-icon>
      </button>
    </div>
    <div id="video-data">
      <v-tabs
        v-model="tab"
        background-color="var(--gray)"
        color="var(--red)"
        dark
      >
        <v-tab key="answers">Dúvidas</v-tab>
        <v-tab key="description">Descrição</v-tab>
        <v-tab key="materials">Materiais</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item key="answers"></v-tab-item>
        <v-tab-item key="description"></v-tab-item>
        <v-tab-item key="materials"></v-tab-item>
      </v-tabs-items>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      tab: null,
    }
  },
}
</script>
