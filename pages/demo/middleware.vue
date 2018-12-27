<template>
  <section class="container">
    <div>
      <h1 class="title">只有强者才可以看到这个页面</h1>
      <div class="links">
        <nuxt-link class="button--green" to="/">回到首页</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: 'strong'
  }
</script>