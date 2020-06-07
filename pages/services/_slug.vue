<template>
  <main>
    <article>
      <h1>{{ service.title }}</h1>
      <p v-if="service.description.length > 0">{{ service.description }}</p>
      <p v-if="service.list.length > 0">
        <ul>
        <li v-for="(item, itemIndex) in service.list" :key="`${itemIndex}-listitem`">{{ item }}</li>
        </ul>
      </p>
      <section class="img-container" v-for="(imgSection, sectionIndex) in service.image_sections" :key="`${sectionIndex}-imgsection`" >
        <div v-if="imgSection.type === 'slider'" class="slider"><h1>SLIDER</h1></div>
        <div v-else :class="[imgSection.type, `length-${imgSection.images.length}`, `${imgSection.images.length % 2 ? 'odd' : 'even'}`]" >
          <div class="img-wrap" v-for="(image, imgIndex) in imgSection.images" :key="`${imgIndex}-imgof-${sectionIndex}`">
            <cloudinary-image
              :image="image"
              :width="800"
              :height="600"
              size="full"
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
 import cloudinaryImage from '~/components/cloudinaryImage.vue'
  export default {
        components: {
      cloudinaryImage
    },
    async asyncData({ $content, params }) {
      const service = await $content('services', params.slug).fetch()
      return {
        service
      }
    },
    mounted() {
      console.log(this.service)
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
    ul {
      width: 100%;
      max-width: $textContainer / 2;
    }
    li {
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
    }
    @include breakpoint(mobile) {
      padding: 10px 20px;
    }
  }
  .back-to-services {
    width: 100%;
    max-width: $textContainer;
    border-bottom: 1px solid rgba($white, 0.5);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 28px;
    margin: 0 auto;
    padding: 10px 40px;
    color: $white;
    font-family: $title_font;
    display: block;
    &:hover {
      color: $primary;
    }
  }
  .img-container {
    width: 100%;
    position: relative;
    padding: 40px 0;
  }
  .gallery {
    width: 100%;
    position: relative;
    display: grid;
    grid-template: auto / 1fr 1fr;
    grid-auto-flow: dense;
    .img-wrap:last-child:nth-last-child(odd) {
      grid-column: auto / span 2;
      //et
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
</style>