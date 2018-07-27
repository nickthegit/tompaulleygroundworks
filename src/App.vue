<template>
  <div id="app">

    <navigation/>

    <div id="fullpage">
      <div class="section" data-anchor="home">HOME</div>

      <div class="section" data-anchor="services">Services</div>

      <div class="section" data-anchor="gallery">Gallery</div>

      <div class="section" data-anchor="contact">Contact</div>

    </div>

  </div>
</template>

<script>
import navigation from './components/navigation.vue'

import TweenMax from 'gsap'
import fullpage from 'fullpage.js'

export default {
  name: 'app',
  components: {
    navigation
  },
  mounted () {
    TweenMax.to('h1', 1, {x: 50})
    new fullpage('#fullpage', {
      // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      menu: '#navMenu'
      // options here
      // autoScrolling:true,
      // scrollHorizontally: true
    })
  }
}
</script>

<style lang="scss">
  @import "./src/assets/scss/base/_variables.scss";
  @import "./src/assets/scss/base/_reset.scss";
  @import "./src/assets/scss/elements/_structure.scss";
  
</style>
