<template>
  <div id="app">

    <navigation/>

    <div id="fullpage">
      <section class="section hero" data-anchor="home" :style="{ 'background-image': 'url(' + hero.image + ')' }">
        <div class="home-wrapper">
          <img src="http://via.placeholder.com/650x650" alt="Tom Paulley Groundworks Logo">
          <h1>{{ hero.strapline }}</h1>
        </div>
      </section>

      <section class="section services" data-anchor="services">
        <services/> 
      </section>

      <section class="section" data-anchor="contact">Contact</section>

    </div>

  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import services from './components/services.vue'

import TweenMax from 'gsap'
import fullpage from 'fullpage.js'

export default {
  name: 'app',
  components: {
    navigation,
    services
  },
  data() {
    return {
      hero: {
        image: 'http://res.cloudinary.com/jonserness/image/upload/c_fill,q_auto,w_1920,h_1080/v1533204731/tpgw/home-page.jpg',
        strapline: 'Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.'
      }
    }
  },
  mounted () {
    // TweenMax.to('h1', 1, {x: 50})
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
  @import "./src/assets/scss/base/_mediaquery.scss";

  .hero {
    position: relative;
    .home-wrapper {
      background: rgba($black,0.3);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      box-sizing: border-box;
    }
    h1 {
        font-size: 3.4vh;
        line-height: 3.6vh;
        width: 100%;
        max-width: 800px;
        padding-top: 40px;
    }
    img {
      height: 30%;
      width: auto;
    }
    @include breakpoint(mobile) { 
      img {
        width: 50%;
        height: auto;
      }
    }
  }
  
</style>
