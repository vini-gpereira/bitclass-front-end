<template>
  <section class="description-container">
    <v-tabs v-model="tab" color="var(--red)" class="tabs" dark grow>
      <v-tab key="description" class="tab">
        <span class="font-semibold">Descrição</span>
      </v-tab>
      <v-tab key="materials" class="tab">
        <span class="font-semibold">Materiais</span>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="tabs-items">
      <v-tab-item key="description" class="tab-item">
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
      <v-tab-item key="materials" class="tab-item">
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

  .tabs {
    .tab {
      background-color: var(--gray) !important;
      border-color: var(--gray) !important;
    }
  }

  .tabs-items {
    height: 20rem;
    background-color: var(--gray) !important;

    .tab-item {
      @apply h-full;

      .tab-item-container {
        @apply overflow-y-auto h-full;
      }
    }
  }
}

@screen xl {
  .description-container {
    @apply h-full flex flex-col;

    .tabs {
      .tab {
        background-color: var(--dark-gray) !important;
        border-color: var(--dark-gray) !important;
      }
    }

    .tabs-items {
      background-color: var(--dark-gray) !important;
      @apply h-full;
    }
  }
}
</style>
