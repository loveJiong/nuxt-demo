<template>
  <div class="main-container">
    123
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    methods: {
    },
  };
</script>

<style lang="scss">
  .main-container{
    height: 100%;
    background-color: $bg-color-body;
    .main-mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9998;
    }
  }
</style>
