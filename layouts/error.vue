<template>
  <main>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </main>
</template>

<script>
  export default {
    props: ['error']
  }
</script>

<style lang="scss" scoped>
  .container,
  main {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    a {
      color: $white;
    }
  }
</style>