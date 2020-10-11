<template>
  <div>
    <button>
      <p></p>
      <fa-icon icon="angle-down"></fa-icon>
    </button>
    <ul>
      <li>
        <a href="">
          <p></p>
          <p></p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
