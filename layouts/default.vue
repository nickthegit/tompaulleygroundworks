<template>
  <div>
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
  import mainHeader from '~/components/Header.vue'
  import mainFooter from '~/components/Footer.vue'
  export default {
    components: {
      mainHeader,
      mainFooter
    }
  }
</script>

<style lang="scss">
</style>
