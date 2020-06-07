<template>
  <main>
    <article>
      <h1>{{ service.title }}</h1>
      <p v-if="service.description.length > 0">{{ service.description }}</p>
      <!-- <p > -->
      <ul class="list">
        <li v-for="(item, itemIndex) in service.list" :key="`${itemIndex}-listitem`">{{ item }}</li>
      </ul>
      <!-- </p> -->
      <section
        class="img-container"
        v-for="(imgSection, sectionIndex) in service.image_sections"
        :key="`${sectionIndex}-imgsection`"
      >
        <!-- slider -->
        <div v-if="imgSection.type === 'slider'" class="slider">
          <div class="glide_wrap">
            <div class="glide">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li
                    class="glide__slide"
                    v-for="(image, imgIndex) in imgSection.images"
                    :key="`${imgIndex}-imgof-${sectionIndex}`"
                  >
                    <div class="img-wrap">
                      <cloudinary-image-srcset
                        :image="image"
                        :alt="`An image about ${service.title} by Tom Paulley Groundworks`"
                        folder="tpgw"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- gallery -->
        <div
          v-else
          :class="[imgSection.type, `length-${imgSection.images.length}`, `${imgSection.images.length % 2 ? 'odd' : 'even'}`]"
        >
          <div
            class="img-wrap"
            v-for="(image, imgIndex) in imgSection.images"
            :key="`${imgIndex}-imgof-${sectionIndex}`"
          >
            <cloudinary-image-srcset
              :image="image"
              :alt="`An image about ${service.title} by Tom Paulley Groundworks`"
              folder="tpgw"
            />
          </div>
        </div>
      </section>
    </article>
    <nuxt-link class="back-to-services" to="/services">← Back to services</nuxt-link>
  </main>
</template>

<script>
  import cloudinaryImageSrcset from '~/components/cloudinaryImageSrcset.vue'
  import Glide from '@glidejs/glide'
  export default {
    components: {
      cloudinaryImageSrcset
    },
    async asyncData({ $content, params }) {
      const service = await $content('services', params.slug).fetch()
      return {
        service
      }
    },
    mounted() {
      let isGlide = document.querySelector('.glide')
      if (isGlide) {
        let glider = new Glide('.glide', {
          type: 'carousel',
          autoplay: 3000,
          hoverpause: true,
          animationDuration: 1500
        }).mount()
      }
    }
  }
</script>

<style lang="scss" scoped>
  main,
  article {
    width: 100%;
    height: 100%;
    position: relative;
  }
  main {
    padding-top: $header_height;
    padding-bottom: $footer_height;
    @include breakpoint(tablet-mobile) {
      padding-top: $header_height + 40px;
    }
  }
  h1,
  p,
  .list {
    width: 100%;
    max-width: $textContainer;
    margin: 0 auto;
    padding: 10px 40px;
  }
  .list {
    padding-bottom: 40px;
    li {
      width: 100%;
      max-width: $textContainer / 2;
      padding: 10px 0;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 16px;
      position: relative;
      z-index: 2;
      border-bottom: 1px solid rgba($white, 0.5);
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 4px;
        background: $primary;
        top: 12px;
        left: -6px;
        z-index: -1;
      }
      @include breakpoint(mobile) {
        padding: 10px 20px;
      }
    }
  }
  .img-container {
    width: 100%;
    position: relative;
  }
  .gallery {
    width: 100%;
    position: relative;
    display: grid;
    grid-template: auto / 1fr 1fr;
    grid-auto-flow: dense;
    @include breakpoint(mobile) {
      grid-template: auto / 100%;
    }
    &.odd {
      .img-wrap {
        &:last-child {
          grid-column: auto / span 2;
        }
      }
    }
  }
  .img-wrap {
    width: 100%;
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 66.666666%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.25s ease-out;
    }
  }
  @import 'node_modules/@glidejs/glide/src/assets/sass/glide.core';
  .glide_wrap {
    width: 100%;
    height: 100%;
    position: relative;
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
  .back-to-services {
    width: 100%;
    max-width: $textContainer;
    border-bottom: 1px solid rgba($white, 0.5);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 28px;
    margin: 0 auto;
    padding: 40px 40px;
    color: $white;
    font-family: $title_font;
    display: block;
    &:hover {
      color: $primary;
    }
  }
</style>