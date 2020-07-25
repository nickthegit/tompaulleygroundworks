<template>
  <main>
    <article>
      <h1>Services</h1>
      <section class="services__grid">
        <nuxt-link
          v-for="service in services"
          :key="service._id"
          :to="`services/${service.slug.current}`"
        >
          <article>
            <section class="img-wrap">
              <image-src
                v-if="service.featureImage"
                :alt="service.featureImage.altText ? service.featureImage.altText : `${service.name} feature image for TPGW`"
                :image_40="urlFor(service.featureImage).width(40).height(27).blur(50).auto('format').quality(10).url()"
                :image_480="urlFor(service.featureImage).width(480).height(320).auto('format').quality(80).url()"
                :image_800="urlFor(service.featureImage).width(400).height(267).auto('format').quality(80).url()"
                :image_960="urlFor(service.featureImage).width(960).height(640).auto('format').quality(80).url()"
                :image_1000="urlFor(service.featureImage).width(333).height(222).auto('format').quality(80).url()"
                :image_1200="urlFor(service.featureImage).width(400).height(267).auto('format').quality(80).url()"
                :image_1400="urlFor(service.featureImage).width(467).height(311).auto('format').quality(80).url()"
                :image_1600="urlFor(service.featureImage).width(800).height(533).auto('format').quality(80).url()"
                :image_2000="urlFor(service.featureImage).width(667).height(445).auto('format').quality(80).url()"
                :image_2400="urlFor(service.featureImage).width(800).height(533).auto('format').quality(80).url()"
                :image_2800="urlFor(service.featureImage).width(934).height(623).auto('format').quality(80).url()"
                :image_3200="urlFor(service.featureImage).width(1067).height(711).auto('format').quality(80).url()"
                :image_4000="urlFor(service.featureImage).width(1334).height(889).auto('format').quality(80).url()"
              />
              <picture v-else>
                <img
                  src="https://via.placeholder.com/800x533?text=Feature+image+needed"
                  alt="feature image needed warning"
                />
              </picture>
            </section>
            <h2>{{ service.name }}</h2>
            <div class="gradient"></div>
          </article>
        </nuxt-link>
      </section>
    </article>
  </main>
</template>

<script>
  import imageSrc from '~/components/ImageSrc.vue'

  import client from '~/sanity.js'
  import imageUrlBuilder from '@sanity/image-url'
  const builder = imageUrlBuilder(client)

  export default {
    components: {
      imageSrc
    },
    async asyncData() {
      const query = `*[_type == 'services'] {
                        _id,
                        name,
                        slug,
                        featureImage
                        }`
      return client
        .fetch(query)
        .then(data => {
          return { services: data }
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
      // console.log(this.services)
    },
    head() {
      return {
        titleTemplate: `Services - %s`
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
  p {
    width: 100%;
    max-width: $textContainer;
    margin: 0 auto;
    padding: 10px 40px;
    @include breakpoint(mobile) {
      padding: 10px 20px;
    }
  }
  .services__grid {
    padding: 10px 0;
    width: 100%;
    display: grid;
    grid-template: auto / 1fr 1fr 1fr;
    // column-gap: 20px;
    // row-gap: 20px;
    @include breakpoint(tablet) {
      grid-template: auto / 1fr 1fr;
    }
    @include breakpoint(mobile) {
      grid-template: auto / 1fr;
    }
    a {
      color: $white;
      text-decoration: none;
    }
    article {
      position: relative;
      width: 100%;
      height: 100%;
    }
    h2 {
      position: absolute;
      z-index: 3;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
    }
    .gradient {
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      background: $black;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 7%,
        rgba(0, 0, 0, 1) 70%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
  .img-wrap {
    width: 100%;
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 66.666666%;
    picture {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 1;
      transition: opacity 0.25s ease-out;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      picture {
        opacity: 0.5;
      }
      img {
        transform: scale(1.2);
      }
    }
  }
</style>