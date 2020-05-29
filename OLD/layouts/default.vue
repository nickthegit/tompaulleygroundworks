<template>
  <div>
    <navigation />
    <nuxt />
  </div>
</template>

<script>
  import navigation from "~/components/navigation.vue";
  export default {
    components: {
      navigation
    }
  };
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap");
  body {
    background: $black;
    color: $white;
    font-family: "Teko", sans-serif;
  }
</style>

