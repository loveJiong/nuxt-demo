<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-demo
      </h1>
      <h2 class="subtitle">
        基础和特性demo
      </h2>
      <div class="links">
        <nuxt-link class="button--green" to="/demo/ssr">异步数据</nuxt-link>
        <nuxt-link class="button--green" to="/demo/meta">动态meta标签</nuxt-link>
        <nuxt-link class="button--green" to="/demo/middleware">中间件</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style>

  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
