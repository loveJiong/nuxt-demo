<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ title }}
      </h1>
      <h2 class="subtitle">
        {{ query }}
      </h2>
    </div>
  </section>
</template>

<script>

  export default {
    layout: 'layouts-demo',
    async asyncData({ $axios, query}) {
      let res = await $axios.$get('http://192.168.150.189/hswy-basic-web/basic/account/serverDate')
      return {
        query: res,
      }
    },
    data() {
      return {
        title: '服务端渲染',
      };
    },
    computed: {
    },
    mounted() {
    },
    methods: {
    },
  };
</script>

<style lang="scss">
</style>
