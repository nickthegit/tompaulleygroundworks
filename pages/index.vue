<template>
  <div id="app">

    <navigation/>

    <div>
    <div class="bkg-fixed">
      <div class="blurs"></div>
      <div class="mainBkg"></div>
      <div class="overlay"></div>
    </div>
      <!-- <section class="section hero" :style="{ 'background-image': 'url(' + hero.image + ')' }"> -->
        <section class="section hero">
        <a id="home"></a>
        <div class="home-wrapper">
          <img class="rellax" data-rellax-speed="5" src="https://res.cloudinary.com/jonserness/image/upload/c_fill,q_auto:good,w_650/v1533210167/tpgw/tom-paulley-groundworks-logo.png" alt="Tom Paulley Groundworks Logo">
          <h1 class="rellax" data-rellax-speed="5">{{ hero.strapline }}</h1>
        </div>
      </section>

      <section id="services" class="section services">
        <a id="services"></a>
        <services/> 
      </section>

      <section id="contact" class="section">
        <a id="contact"></a>

        <div class="contact-wrapper">
            <section class="form-wrap">
                <form name="tpgw-contact" method="POST" content-type="application/x-www-form-urlencoded" enctype="application/x-www-form-urlencoded" action="/thanks.html" netlify>
                    <label>Name:<input type="text" name="name" /></label>   
                    <label>Email:<input type="email" name="email" /></label>
                    <label>Telephone:<input type="tel" name="tel" /></label>
                    <label>Location:<input type="text" name="location" /></label>   
                    <label>Description of work:<textarea name="message" ></textarea></label>
                    <!-- <div data-netlify-recaptcha></div> -->
                    <button class="btn" type="submit">SEND</button>
                </form>
            </section>
            <section class="contact-wrap">
                <div>
                    <h1>Contact Info</h1>
                    <h2>Call us: 07795 030117</h2>
                    <h2>Email us: tom@tpgw.co.uk</h2>
                    <h1>Follow Us</h1>
                    <a href="https://www.facebook.com/tompaulleygroundworks/"><svg viewBox="0 0 24 24"><path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4c0 .7.6 1.3 1.3 1.3h11.5v-9.3H9.7v-3.6h3.1V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1V7h-1.9c-1.5 0-1.8.7-1.8 1.8v2.3h3.6l-.5 3.6h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3"/></svg></a>
                </div>
            </section>
        </div>


        <!-- <contact/> -->
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
      // Rellax
      var Rellax = require('rellax')
      var rellax = new Rellax('.rellax');
      // Waypoints
      require('waypoints/lib/noframework.waypoints.min');
      var waypointToServices = new Waypoint({
        element: document.getElementById('services'),
        handler: function(direction) {
          if (direction == 'down') {
            TweenMax.to('.mainBkg', 0.5, { autoAlpha:0 } )
          } else {
            TweenMax.to('.mainBkg', 0.5, { autoAlpha:1 } )
          }
        },
        offset: "35%"
      })
      var waypointToContact = new Waypoint({
        element: document.getElementById('contact'),
        handler: function(direction) {
          if (direction == 'down') {
            TweenMax.to('.blurs', 0.5, { autoAlpha:0 } )
          } else {
            TweenMax.to('.blurs', 0.5, { autoAlpha:1 } )
          }
        },
        offset: "30%" 
      })
      // Smooth scroll
      var SmoothScroll = require('smooth-scroll')
      var scroll = new SmoothScroll('a[href*="#"]');

      // var fullpage = require('fullpage.js');
      // var servicesOnce = 'on';
      // new fullpage('#fullpage', {
      //   licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      //   menu: '#navMenu',
      //   onLeave: function(origin, destination, direction){
      //     if(destination.anchor == "services" && direction =='down' && servicesOnce == 'on'){
      //           const servTl = new TimelineLite({onComplete: function() { servicesOnce = 'off' }}).delay(0.75);
      //           servTl.fromTo('.services__grid-wrapper article', 0.5, {y: -50, autoAlpha: 0}, {y: 0, autoAlpha: 1}) 
      //           .fromTo('.services__grid-wrapper aside', 0.75, {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1}, "-=0.1");        
      //     }
      //   }
      // })
      // const tl = new TimelineLite();
      // tl.fromTo('.hero', 0.75, {autoAlpha: 0},{autoAlpha:1}, "start")
      //   .fromTo('.home-wrapper img', 0.3, {y: -50, autoAlpha: 0}, {y: 0, autoAlpha: 1}, "+=0.2")
      //   .fromTo('.home-wrapper h1', 0.3, {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1}, "+=0.1")
      //   .fromTo('header', 0.3, {y: "-100%", autoAlpha: 0}, {y: "0%", autoAlpha: 1}, "-=0");
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/base/_variables.scss";
  @import "~/assets/scss/base/_reset.scss";
  @import "~/assets/scss/elements/_structure.scss";
  @import "~/assets/scss/base/_mediaquery.scss";



    .contact-wrapper {
        // padding-top: $headerHeight;
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
        position: absolute;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: auto;
    }
    .contact-wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: flex-start;
        box-sizing: border-box;
        h1 {
            font-size: 3vh;
            font-weight: 600;
            margin: 20px 0;
        }
        h2 {
            padding: 5px 0;
        }
        a {
            width: 40px;
            height: 40px;
            display: block;
        }
        svg {
            width: 100%;
            fill: white;
        }
    }
    .form-wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        max-width: 720px;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: end;
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: flex-end;
        box-sizing: border-box;
        padding: 40px;
    }
    form {
        display: inline-block;
        max-width: 720px;
    }
    label {
        display: block;
        width: 100%;
        padding: 5px 0;
    }
    input, textarea {
        margin: 5px 0;
        display: block;
        width: 100%;
        min-width: 500px;
        max-width: 720px;
        padding: 10px;
        border: none;
        box-sizing: border-box;
        font-size: 16px;
        background: transparent;
        border-bottom: 2px solid $white;
        color: $white;
        @include breakpoint(tablet) {
            min-width: 300px;
        }
    }
    .btn {
        display: block;
        padding: 10px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        background: #008CBA;
        color: $white;
        width: 100%;
        max-width: 280px;
        min-width: 140px;
        position: absolute;
        right: 40px;
        margin-top: 20px;
    }
    @include breakpoint(mobile) {
        .contact-wrapper {
            padding: 40px 0;
            grid-template-columns: 100%;
            grid-template-rows: auto auto;
        }
        .contact-wrap {
            grid-column: 1 / 2;
            grid-row: 1 / 2; 
            padding: 40px;  
            height: auto;
            position: relative;         
        }
        .form-wrap {
            grid-column: 1 / 2;
            grid-row: 2 / 3;  
            height: auto;
            position: relative;
            justify-content: center;        
        }
        form {
            width: 100%;
        }
        input, textarea {
            min-width: 100%;
            width: 100%;
        }
    }


  .bkg-fixed {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -2;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .overlay {
      background: rgba($black,0.3);
      z-index: 10;
    }
    .mainBkg {
      background: url('https://res.cloudinary.com/jonserness/image/upload/c_fill,q_auto,w_1920,h_1080/v1533204731/tpgw/home-page.jpg');
      z-index: 5;
    }
  }

  section {
    &.section {
      width: 100%;
      min-height: 100vh;
      position: relative;
    }
  }

  .hero {
    position: relative;
    .home-wrapper {
      height: 100%;
      width: 100%;
      position: absolute;
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
        position: relative;
        z-index: 1;
    }
    img {
      height: 32%;
      width: auto;
      position: relative;
      z-index: 2;
    }
    @include breakpoint(mobile) { 
      img {
        width: 50%;
        height: auto;
      }
    }
  }
</style>


