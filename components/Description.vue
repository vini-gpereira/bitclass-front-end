<template>
  <section class="description-container">
    <section class="tabs-wrapper">
      <v-tabs
        v-model="tab"
        background-color="var(--gray)"
        color="var(--red)"
        dark
        grow
      >
        <v-tab key="description">
          <span class="font-semibold">Descrição</span>
        </v-tab>
        <v-tab key="materials">
          <span class="font-semibold">Materiais</span>
        </v-tab>
      </v-tabs>
    </section>
    <section class="tabs-items-wrapper">
      <v-tabs-items v-model="tab">
        <v-tab-item key="description">
          <div class="tab-item-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
        </v-tab-item>
        <v-tab-item key="materials">
          <div class="tab-item-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </section>
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

<style lang="scss" scoped>
.description-container {
  height: 25rem;
  @apply border-b-2 border-graybits-900 flex flex-col;

  .tabs-items-wrapper {
    @apply flex-grow;

    .tab-item-wrapper {
      max-height: 21rem;
      @apply p-3 bg-graybits-500 overflow-scroll;
    }
  }
}
</style>
