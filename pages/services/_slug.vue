<template>
  <main>
    <article>
      <section class="service_intro">
        <h1>{{ service_data.name }}</h1>
        <block-content :blocks="service_data.intro" />
      </section>

      <section
        class="img-container"
        v-for="imgSection in service_data.imageBlocks"
        :key="imgSection._key"
      >
        <!-- slider -->
        <div v-if="imgSection.blocktype === 'slider'" class="slider">
          <div class="glide_wrap">
            <div class="glide">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li
                    class="glide__slide"
                    v-for="image in imgSection.featureImages"
                    :key="image._key"
                  >
                    <div class="img-wrap">
                      <image-src
                        :alt="image.altText ? image.altText : `${service_data.name} image for TPGW`"
                        :image_40="urlFor(image).width(40).height(27).blur(50).auto('format').quality(10).url()"
                        :image_480="urlFor(image).width(480).height(320).auto('format').quality(80).url()"
                        :image_800="urlFor(image).width(800).height(533).auto('format').quality(80).url()"
                        :image_960="urlFor(image).width(960).height(640).auto('format').quality(80).url()"
                        :image_1000="urlFor(image).width(1000).height(667).auto('format').quality(80).url()"
                        :image_1200="urlFor(image).width(1200).height(800).auto('format').quality(80).url()"
                        :image_1400="urlFor(image).width(1400).height(933).auto('format').quality(80).url()"
                        :image_1600="urlFor(image).width(1600).height(1067).auto('format').quality(80).url()"
                        :image_2000="urlFor(image).width(2000).height(1333).auto('format').quality(80).url()"
                        :image_2400="urlFor(image).width(2400).height(1600).auto('format').quality(80).url()"
                        :image_2800="urlFor(image).width(2800).height(1867).auto('format').quality(80).url()"
                        :image_3200="urlFor(image).width(3200).height(2133).auto('format').quality(80).url()"
                        :image_4000="urlFor(image).width(4000).height(2667).auto('format').quality(80).url()"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- gallery -->
        <div v-else class="gallery">
          <div class="img-wrap" v-for="image in imgSection.featureImages" :key="image._key">
            <image-src
              :alt="image.altText ? image.altText : `${service_data.name} image for TPGW`"
              :image_40="urlFor(image).width(40).height(27).blur(50).auto('format').quality(10).url()"
              :image_480="urlFor(image).width(480).height(320).auto('format').quality(80).url()"
              :image_800="urlFor(image).width(400).height(267).auto('format').quality(80).url()"
              :image_960="urlFor(image).width(960).height(640).auto('format').quality(80).url()"
              :image_1000="urlFor(image).width(500).height(333).auto('format').quality(80).url()"
              :image_1200="urlFor(image).width(600).height(400).auto('format').quality(80).url()"
              :image_1400="urlFor(image).width(700).height(467).auto('format').quality(80).url()"
              :image_1600="urlFor(image).width(800).height(533).auto('format').quality(80).url()"
              :image_2000="urlFor(image).width(1000).height(667).auto('format').quality(80).url()"
              :image_2400="urlFor(image).width(1200).height(800).auto('format').quality(80).url()"
              :image_2800="urlFor(image).width(1400).height(933).auto('format').quality(80).url()"
              :image_3200="urlFor(image).width(1600).height(1067).auto('format').quality(80).url()"
              :image_4000="urlFor(image).width(2000).height(1333).auto('format').quality(80).url()"
            />
          </div>
        </div>
      </section>
    </article>
    <nuxt-link class="back-to-services" to="/services">← Back to services</nuxt-link>
  </main>
</template>

<script>
  import Glide from '@glidejs/glide'

  import imageSrc from '~/components/ImageSrc.vue'

  import client from '~/sanity.js'
  import BlockContent from 'sanity-blocks-vue-component'
  import imageUrlBuilder from '@sanity/image-url'
  const builder = imageUrlBuilder(client)

  export default {
    components: {
      imageSrc,
      BlockContent
    },
    async asyncData({ params }) {
      const query = `*[_type == 'services' && slug.current == '${params.slug}'] {
                  _id,
                  imageBlocks,
                  intro,
                  name,
                  slug
                }`
      return client
        .fetch(query)
        .then(data => {
          return { service_data: data[0] }
        })
        .catch(err => {
          console.log(err)
        })
    },
    methods: {
      urlFor(source) {
        return builder.image(source)
      }
    },
    mounted() {
      console.log('SD', this.service_data)
      let isGlide = document.querySelector('.glide')
      if (isGlide) {
        let glider = new Glide('.glide', {
          type: 'carousel',
          autoplay: 3000,
          hoverpause: true,
          animationDuration: 1500
        }).mount()
      }
    },
    head() {
      return {
        titleTemplate: `%s - Services - ${this.$route.params.slug}`
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
  .service_intro {
    h1,
    p,
    ul {
      width: 100%;
      max-width: $textContainer;
      margin: 0 auto;
      padding: 10px 40px;
    }
    ul {
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