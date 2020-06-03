<template>
  <main>
    <article>
      <h1>About</h1>
      <p v-for="(paragraph, index) in aboutData.text" :key="`${index}-about`">{{ paragraph }}</p>
      <section class="img-wrap">
        <cloudinary-image
          image="home-page.jpg"
          :width="800"
          :height="800"
          size="half"
          :style="{left: 0, top: 0}"
          alt="An image about Tom Paulley Groundworks"
        />
        <cloudinary-image
          image="tom-paulley-groundworks-logo.png"
          :width="800"
          :height="800"
          size="half"
          :style="{right: 0, bottom: 0}"
        />
      </section>
      <h2>Company info:</h2>
      <p>Vat no: 049760567</p>
      <p>sdf: dglihfgoih</p>
    </article>
  </main>
</template>

<script>
  import cloudinaryImage from '~/components/cloudinaryImage.vue'
  export default {
    components: {
      cloudinaryImage
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
  .img-wrap {
    width: 100%;
    margin: 20px auto;
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
    @include breakpoint(mobile) {
      padding-bottom: 200%;
    }
  }
</style>