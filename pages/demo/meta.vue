<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ title }}
      </h1>
      <h2 class="subtitle">
        前页面的title:{{ title }}
      </h2>
      <h2 class="subtitle">
        当前页面的head的children数:{{ num }}
      </h2>
      <a class="button--grey" @click="change">变一下</a>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'layouts-demo',
    data() {
      return {
        title: '动态meta标签',
        meta: [ { hid: 'description', name: 'description', content: 'My custom description' } ],
        link: [],
        num: 0,
      };
    },
    computed: {
    },
    head() {
      return {
        title: this.title,
        meta: this.meta,
        link: this.link,
      };
    },
    mounted() {
      this.num = document.getElementsByTagName('head')[0].children.length;
    },
    methods: {
      change() {
        this.title = '变了一下';
        this.link = [ { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' } ];
        setTimeout(() => {
          this.num = document.getElementsByTagName('head')[0].children.length;
        }, 100);
      }
    },
  };
</script>

<style lang="scss">
</style>
