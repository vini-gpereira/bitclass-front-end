<template>
  <section class="description-container">
    <v-tabs
      v-model="tab"
      background-color="var(--gray)"
      color="var(--red)"
      class="tabs"
    >
      <v-tabs-slider color="var(--red)"></v-tabs-slider>
      <v-tab active-class="active-tab" class="tab">Descrição</v-tab>
      <v-tab active-class="active-tab" class="tab">Materiais</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="tabs-items">
      <v-tab-item class="tab-item">
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
      <v-tab-item class="tab-item">
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
  @apply flex flex-col items-center;

  .tabs {
    @apply w-auto mb-2;

    .tab {
      color: var(--white) !important;
      @apply normal-case text-base;
    }

    .active-tab {
      color: var(--red) !important;
    }
  }

  .tabs-items {
    background-color: var(--gray) !important;
    @apply bg-graybits-500;

    .tab-item {
      .tab-item-container {
        height: 20rem;
        @apply overflow-y-auto;
      }
    }
  }
}

@screen sm {
  .description-container {
    .tabs {
      @apply w-full;
    }
  }
}

@screen xl {
  .description-container {
    @apply h-full;

    .tabs {
      .tab {
        @apply text-lg;
      }
    }

    .tabs-items {
      @apply h-full;
    }
  }
}
</style>
