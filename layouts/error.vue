<template>
  <section class="container">
    <div>
      <h1 class="title">你还不够强</h1>
      <div class="links">
        <nuxt-link class="button--green" to="/">回到首页</nuxt-link>
        <a class="button--green" @click="beStrong">我要变强</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      beStrong() {
        this.$store.commit('beStrong');
        this.$alert('你变强了,回去挑战吧！');
      }
    },
  }
</script>

<style>
  a {
    cursor: pointer;
  }
</style>


