<template>
  <main>
    <article>
      <h1>{{ about_data.name }}</h1>
      <block-content :blocks="about_data.intro" />
      <section class="imgs">
        <article class="img-wrap" v-for="image in about_data.featureImages" :key="image._key">
          <image-src
            :alt="image.altText ? image.altText : 'About image for TPGW'"
            :image_40="urlFor(image).width(40).height(40).blur(50).auto('format').quality(10).url()"
            :image_480="urlFor(image).width(480).height(480).auto('format').quality(80).url()"
            :image_800="urlFor(image).width(400).height(400).auto('format').quality(80).url()"
            :image_960="urlFor(image).width(960).height(960).auto('format').quality(80).url()"
            :image_1000="urlFor(image).width(500).height(500).auto('format').quality(80).url()"
            :image_1200="urlFor(image).width(600).height(600).auto('format').quality(80).url()"
            :image_1400="urlFor(image).width(700).height(700).auto('format').quality(80).url()"
            :image_1600="urlFor(image).width(800).height(800).auto('format').quality(80).url()"
            :image_2000="urlFor(image).width(1000).height(1000).auto('format').quality(80).url()"
            :image_2400="urlFor(image).width(1200).height(1200).auto('format').quality(80).url()"
            :image_2800="urlFor(image).width(1400).height(1400).auto('format').quality(80).url()"
            :image_3200="urlFor(image).width(1600).height(1600).auto('format').quality(80).url()"
            :image_4000="urlFor(image).width(2000).height(2000).auto('format').quality(80).url()"
          />
        </article>
      </section>
      <h2>Company info:</h2>
      <block-content :blocks="about_data.companyInfo" />
    </article>
  </main>
</template>

<script>
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
    async asyncData() {
      const query = `*[_type == 'about'] {
            _id,
          	companyInfo,
            featureImages,
            intro,
            name
          }`
      return client
        .fetch(query)
        .then(data => {
          return { about_data: data[0] }
        })
        .catch(err => {
          console.log(err)
        })
    },
    data() {
      return {
        aboutData: {
          text: [
            'TPGW Ltd was started by Tom Paulley in 2018, but his interests into ground works and plant machinery started way before then.',
            'When Tom was still at school, during his school holidays, he managed to convince a local plant hire company, near where he lived in Somerset, to let him come in to clean, help service and prep machinery for going back out on hire.',
            'He went onto work for the company when he left college to become a hire assistant and cover for branch managers when on leave. He left to work for another Plant hire company based in Dorset that also specialised in ground works also, he started as a labourer and soon went up to a plant operator, to a site gang leader and finally to a ground works supervisor, gathering as much knowledge until he felt the time was right to start his own company, which is where we are today.'
          ]
        }
      }
    },
    methods: {
      urlFor(source) {
        return builder.image(source)
      }
    },
    mounted() {
      // console.log(this.about_data)
    },
    head() {
      return {
        titleTemplate: `About - %s`
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
  h2,
  p {
    width: 100%;
    max-width: $textContainer;
    margin: 0 auto;
    padding: 10px 40px;
    @include breakpoint(mobile) {
      padding: 10px 20px;
    }
  }
  .imgs {
    width: 100%;
    position: relative;
    display: flex;
    @include breakpoint(mobile) {
      flex-wrap: wrap;
    }
  }
  .img-wrap {
    width: 50%;
    margin: 20px auto;
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
    left: 0;
    @include breakpoint(mobile) {
      width: 100%;
      padding-bottom: 100%;
    }
  }
</style>