<template>
  <div id="app">

    <navigation/>

    <div id="fullpage">
      <section class="section hero" data-anchor="home" :style="{ 'background-image': 'url(' + hero.image + ')' }">
        <div class="home-wrapper">
          <img src="https://res.cloudinary.com/jonserness/image/upload/c_fill,q_auto:good,w_650/v1533210167/tpgw/tom-paulley-groundworks-logo.png" alt="Tom Paulley Groundworks Logo">
          <h1>{{ hero.strapline }}</h1>
        </div>
      </section>

      <section class="section services" data-anchor="services">
        <services/> 
      </section>

      <section class="section" data-anchor="contact">
        <contact/>
      </section>

    </div>

  </div>
</template>

<script>
import navigation from '~/components/navigation.vue'
import services from '~/components/services.vue'
import contact from '~/components/contact.vue'

import TweenMax from 'gsap'

export default {
  name: 'app',
  components: {
    navigation,
    services,
    contact
  },
  data() {
    return {
      hero: {
        image: 'https://res.cloudinary.com/jonserness/image/upload/c_fill,q_auto,w_1920,h_1080/v1533204731/tpgw/home-page.jpg',
        strapline: 'Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.'
      }
    }
  },
  mounted () {
    if (process.browser) {
      var fullpage = require('fullpage.js');
      var servicesOnce = 'on';
      new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        menu: '#navMenu',
        onLeave: function(origin, destination, direction){
          if(destination.anchor == "services" && direction =='down' && servicesOnce == 'on'){
                const servTl = new TimelineLite({onComplete: function() { servicesOnce = 'off' }}).delay(0.75);
                servTl.fromTo('.services__grid-wrapper article', 0.5, {y: -50, autoAlpha: 0}, {y: 0, autoAlpha: 1}) 
                .fromTo('.services__grid-wrapper aside', 0.75, {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1}, "-=0.1");        
          }
        }
      })
      const tl = new TimelineLite();
      tl.fromTo('.hero', 0.75, {autoAlpha: 0},{autoAlpha:1}, "start")
        .fromTo('.home-wrapper img', 0.3, {y: -50, autoAlpha: 0}, {y: 0, autoAlpha: 1}, "+=0.2")
        .fromTo('.home-wrapper h1', 0.3, {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1}, "+=0.1")
        .fromTo('header', 0.3, {y: "-100%", autoAlpha: 0}, {y: "0%", autoAlpha: 1}, "-=0");
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/base/_variables.scss";
  @import "~/assets/scss/base/_reset.scss";
  @import "~/assets/scss/elements/_structure.scss";
  @import "~/assets/scss/base/_mediaquery.scss";

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
      height: 32%;
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


