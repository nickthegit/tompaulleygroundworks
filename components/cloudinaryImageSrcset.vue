<template>
  <div class="img-wrapper" :style="{backgroundImage: `url(${buildString(80, 53, true)})`}">
    <v-lazy-image
      sizes="(max-width: 7560px) 40vw, 3024px"
      :srcset="`${buildString(480, 320, false)} 480w, ${buildString(814, 543, false)} 814w, ${buildString(1062, 708, false)} 1062w, ${buildString(1274, 849, false)} 1274w, ${buildString(1450, 967, false)} 1450w, ${buildString(1611, 1074, false)} 1611w, ${buildString(1752, 1168, false)} 1752w, ${buildString(1897, 1265, false)} 1897w, ${buildString(2022, 1348, false)} 2022w, ${buildString(2150, 1433, false)} 2150w`"
      :src="buildString(1611, 1074, false)"
      :alt="alt"
    />
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image'
  export default {
    components: {
      VLazyImage
    },
    props: {
      image: {
        type: String,
        default: '1000x1000_text_image_needed.png'
      },
      alt: {
        type: String,
        default: 'An image about Tom Paulley groundworks'
      },
      username: {
        type: String,
        default: 'nickjohn'
      },
      folder: {
        type: String,
        default: 'tpgw'
      }
    },
    methods: {
      buildString(width, height, isBackground) {
        return `https://res.cloudinary.com/${this.username}/image/upload/${
          isBackground ? 'e_blur:300,' : ''
        }c_fill,w_${width},h_${height},q_auto:low,f_auto,g_auto${
          this.folder ? '/' + this.folder : ''
        }/${this.image}`
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .img-wrapper {
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