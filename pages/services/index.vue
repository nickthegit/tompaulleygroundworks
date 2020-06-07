<template>
  <main>
    <article>
      <h1>Services</h1>
      <section class="services__grid">
        <nuxt-link
          v-for="(service, index) in services"
          :key="`${index}-services`"
          :to="`services/${service.slug}`"
        >
          <article>
            <section class="img-wrap">
              <picture
                :style="{backgroundImage: `url(https://res.cloudinary.com/nickjohn/image/upload/c_fill,w_64,h_36,q_auto:low,f_auto,g_auto,e_blur:600/tpgw/${service.feature_img})` }"
              >
                <source
                  :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,w_480,h_320,q_auto:low,f_auto,g_auto/tpgw/${service.feature_img}`"
                  media="(max-width: 480px)"
                />
                <source
                  :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,w_400,h_267,q_auto:low,f_auto,g_auto/tpgw/${service.feature_img}`"
                  media="(max-width: 1200px)"
                />
                <source
                  :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,w_600,h_400,q_auto:low,f_auto,g_auto/tpgw/${service.feature_img}`"
                  media="(max-width: 1600px)"
                />
                <source
                  :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,w_800,h_533,q_auto:low,f_auto,g_auto/tpgw/${service.feature_img}`"
                  media="(min-width: 1601px)"
                />
                <img
                  :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,w_600,h_400,q_auto:low,f_auto,g_auto/tpgw/${service.feature_img}`"
                  alt="Service feature image"
                />
              </picture>
            </section>
            <h2>{{ service.title }}</h2>
            <div class="gradient"></div>
          </article>
        </nuxt-link>
      </section>
    </article>
  </main>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const services = await $content('services').fetch()
      return {
        services
      }
    },
    data() {
      return {}
    },
    mounted() {
      console.log(this.services)
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
    column-gap: 20px;
    row-gap: 20px;
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
      &:hover {
        picture {
          opacity: 0.5;
        }
        img {
          transform: scale(1.2);
        }
      }
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
  }
</style>