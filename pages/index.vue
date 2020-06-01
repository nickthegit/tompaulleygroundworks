<template>
  <main>
    <section>
      <div class="gradient-back"></div>
      <img
        class="main-logo"
        src="https://res.cloudinary.com/nickjohn/image/upload/w_400/v1590703038/tpgw/tom-paulley-groundworks-logo.png"
        alt="Tom Paulley Groundworks Logo"
      />
      <div class="headline_wrap">
        <h1>Delivering all aspects of groundworks</h1>
        <p>Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.</p>
        <button>CTA</button>
      </div>
    </section>
  </main>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100%;
    position: relative;
  }
  section {
    width: 100%;
    height: 100%;
    position: fixed;
    display: grid;
    grid-template: 1fr auto 1fr / 320px 25% 25% 1fr;
    align-items: center;
    // justify-items: start
    @include breakpoint(mobile) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 20px;
    }
  }
  .gradient-back {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    grid-row: 1 / 4;
    grid-column: 1 / 5;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 1%,
      rgba(0, 0, 0, 1) 100%
    );
    @include breakpoint(mobile) {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .main-logo {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 3;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    padding-left: 40px;
    align-self: start;
    @include breakpoint(mobile) {
      align-self: initial;
      padding: 0;
      width: 60%;
    }
  }
  .headline_wrap {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
    grid-row: 2 / 3;
    grid-column: 2 / 4;
    padding: 20px 40px;
    align-self: start;
    @include breakpoint(mobile) {
      padding: 20px 0;
    }
  }
</style>
