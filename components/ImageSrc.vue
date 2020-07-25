<template>
  <picture :style="{backgroundImage: `url(${image_40})` }">
    <source :srcset="`${image_480}, ${image_960} 2x`" media="(max-width: 480px)" />
    <source :srcset="`${image_800}, ${image_1600} 2x`" media="(max-width: 800px)" />
    <source :srcset="`${image_1000}, ${image_2000} 2x`" media="(max-width: 1000px)" />
    <source :srcset="`${image_1200}, ${image_2400} 2x`" media="(max-width: 1200px)" />
    <source :srcset="`${image_1400}, ${image_2800} 2x`" media="(max-width: 1400px)" />
    <source :srcset="`${image_1600}, ${image_3200} 2x`" media="(max-width: 1600px)" />
    <source :srcset="`${image_2000}, ${image_4000} 2x`" media="(min-width: 1601px)" />
    <img :srcset="`${image_1600}`" :alt="alt" />
  </picture>
</template>

<script>
  export default {
    props: {
      image_40: {
        type: String,
        default: 'https://via.placeholder.com/40?text=40+image+needed'
      },
      image_480: {
        type: String,
        default: 'https://via.placeholder.com/480?text=480+image+needed'
      },
      image_800: {
        type: String,
        default: 'https://via.placeholder.com/800?text=800+image+needed'
      },
      image_960: {
        type: String,
        default: 'https://via.placeholder.com/960?text=960+image+needed'
      },
      image_1000: {
        type: String,
        default: 'https://via.placeholder.com/1000?text=1000+image+needed'
      },
      image_1200: {
        type: String,
        default: 'https://via.placeholder.com/1200?text=1200+image+needed'
      },
      image_1400: {
        type: String,
        default: 'https://via.placeholder.com/1400?text=1400+image+needed'
      },
      image_1600: {
        type: String,
        default: 'https://via.placeholder.com/1600?text=1600+image+needed'
      },
      image_2000: {
        type: String,
        default: 'https://via.placeholder.com/2000?text=2000+image+needed'
      },
      image_2400: {
        type: String,
        default: 'https://via.placeholder.com/2400?text=2400+image+needed'
      },
      image_2800: {
        type: String,
        default: 'https://via.placeholder.com/2800?text=2800+image+needed'
      },
      image_3200: {
        type: String,
        default: 'https://via.placeholder.com/3200?text=3200+image+needed'
      },
      image_4000: {
        type: String,
        default: 'https://via.placeholder.com/4000?text=4000+image+needed'
      },
      alt: {
        type: String,
        default: 'An image about Tom Paulley groundworks'
      }
    }
  }
</script>

<style lang="scss" scoped>
  picture {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>