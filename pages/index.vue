<template>
  <main>
    <!-- <section :style="{backgroundImage: `url(${homeData.backgroundImg})`}"> -->
    <section>
      <div class="glide_wrap">
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li
                class="glide__slide"
                v-for="(image, index) in homeData.sliderImages"
                :key="`${index}homepageslide`"
              >
                <cloudinary-image
                  :image="image"
                  alt="An image about Tom Paulley Groundworks"
                  folder="tpgw/homepage-slider"
                  effects="e_grayscale"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="gradient-back"></div>
      <img class="main-logo" :src="homeData.logo.url" :alt="homeData.logo.alt" />
      <div class="headline_wrap">
        <h1>{{ homeData.headline }}</h1>
        <p>{{ homeData.subText }}</p>
        <nuxt-link :to="`/${homeData.cta.link}`" class="cta btn">{{homeData.cta.text}} →</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
  import Glide from '@glidejs/glide'
  import cloudinaryImage from '~/components/cloudinaryImage.vue'
  // import Glide, {
  //   Controls,
  //   Breakpoints
  // } from '@glidejs/glide/dist/glide.modular.esm'
  export default {
    components: {
      cloudinaryImage
    },
    data() {
      return {
        homeData: {
          logo: {
            url:
              'https://res.cloudinary.com/nickjohn/image/upload/w_400/v1590703038/tpgw/tom-paulley-groundworks-logo.png',
            alt: 'Tom Paulley Groundworks Logo'
          },
          headline: 'Delivering all aspects of groundworks',
          subText:
            'Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.',
          cta: {
            text: 'Get a quote now!',
            link: 'contact'
          },
          sliderImages: [
            'home-page',
            'Top_Soil_grading_and_shaping.jpg',
            'Kerbing_and_road_building',
            'Domestic_and_Reinforced_Concreting',
            'Commercial_Concreting',
            'Patio_laying_and_design',
            'Treatment_plant_Septic_tank_and_Cess_Pit_Installations',
            'Power_Floated_Floors',
            'Driveways'
          ],
          backgroundImg:
            'https://res.cloudinary.com/jonserness/image/upload/c_fill,q_auto,w_1920,h_1080/v1533204731/tpgw/home-page.jpg'
        }
      }
    },
    mounted() {
      let glider = new Glide('.glide', {
        type: 'carousel',
        autoplay: 3500,
        hoverpause: false,
        animationDuration: 2000,
        perView: 3,
        breakpoints: {
          860: {
            perView: 2
          },
          600: {
            perView: 1
          }
        }
      }).mount()
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    // justify-items: start
    @include breakpoint(mobile) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 20px;
    }
  }
  @import 'node_modules/@glidejs/glide/src/assets/sass/glide.core';
  .glide_wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .glide,
  .glide__track,
  .glide__slides,
  .glide__slide {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .glide__slide {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .gradient-back {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    grid-row: 1 / 4;
    grid-column: 1 / 5;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 1%,
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
      width: 45%;
    }
  }
  .headline_wrap {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 3;
    grid-row: 2 / 3;
    grid-column: 2 / 4;
    padding: 20px 40px;
    align-self: start;
    @include breakpoint(mobile) {
      padding: 20px 0;
    }
  }
</style>
