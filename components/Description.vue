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
    <v-tabs-items v-model="tab" class="tabs-items-container">
      <v-tab-item key="description" class="tab-item-wrapper">
        <div class="tab-item-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </v-tab-item>
      <v-tab-item key="materials" class="tab-item-wrapper">
        <div class="tab-item-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </section>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
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
  @apply border-b-2 border-graybits-900;

  .tabs-items-container {
    height: 20rem;
    background-color: var(--gray) !important;

    .tab-item-wrapper {
      @apply h-full;

      .tab-item-container {
        @apply overflow-y-scroll h-full;
      }
    }
  }
}

@screen md {
  .description-container {
    @apply h-full flex flex-col;

    .tabs-items-container {
      @apply h-full;
    }
  }
}
</style>
