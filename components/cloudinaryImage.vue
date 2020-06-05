<template>
  <picture :style="{backgroundImage: `url(${imgStrings.background})` }" :class="size">
    <source :srcset="imgStrings.mobile" media="(max-width: 480px)" />
    <source :srcset="imgStrings.tablet" media="(max-width: 800px)" />
    <source :srcset="imgStrings.mini" media="(max-width: 1200px)" />
    <source :srcset="imgStrings.desktop" media="(max-width: 1600px)" />
    <source :srcset="imgStrings.large" media="(min-width: 1601px)" />
    <img :srcset="imgStrings.fallback" :alt="alt" />
  </picture>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'full' // or half
      },
      image: {
        type: String,
        default: '1000x1000_text_image_needed.png'
      },
      alt: {
        type: String,
        default: 'An image about Tom Paulley groundworks'
      },
      width: {
        type: [String, Number]
      },
      height: {
        type: [String, Number]
      },
      username: {
        type: String,
        default: 'nickjohn'
      },
      folder: {
        type: String,
        default: 'tpgw'
      },
      effects: {
        type: [String, Boolean],
        default: false
      }
    },
    methods: {
      buildString(width, height, isBackground) {
        let isHalf = this.size === 'half' ? true : false
        let h = isHalf && height ? height / 2 : height
        let w = isHalf ? width / 2 : width
        let fx = this.effects ? `,${this.effects}` : ''

        return `https://res.cloudinary.com/${this.username}/image/upload/${
          isBackground ? 'e_blur:300,' : ''
        }c_fill,w_${w}${height ? ',h_' + h : ''},q_auto:low,f_auto,g_auto${fx}${
          this.folder ? '/' + this.folder : ''
        }/${this.image}`
      }
    },
    computed: {
      imgStrings() {
        let background, mobile, tablet, mini, desktop, large, fallback
        let hasDimensions = this.height && this.width ? true : false
        let relNum = hasDimensions
          ? Number(this.height) / Number(this.width)
          : false
        background = `${this.buildString(
          40,
          hasDimensions ? 40 * relNum : false,
          true
        )}`
        mobile = `${this.buildString(
          480,
          hasDimensions ? 480 * relNum : false,
          false
        )}, ${this.buildString(
          480 * 2,
          hasDimensions ? 480 * relNum * 2 : false,
          false
        )} 2x`
        tablet = `${this.buildString(
          800,
          hasDimensions ? 800 * relNum : false,
          false
        )}, ${this.buildString(
          800 * 2,
          hasDimensions ? 800 * relNum * 2 : false,
          false
        )} 2x`
        mini = `${this.buildString(
          1200,
          hasDimensions ? 1200 * relNum : false,
          false
        )}, ${this.buildString(
          1200 * 2,
          hasDimensions ? 1200 * relNum * 2 : false,
          false
        )} 2x`
        desktop = `${this.buildString(
          1600,
          hasDimensions ? 1600 * relNum : false,
          false
        )}, ${this.buildString(
          1600 * 2,
          hasDimensions ? 1600 * relNum * 2 : false,
          false
        )} 2x`
        large = `${this.buildString(
          2000,
          hasDimensions ? 2000 * relNum : false,
          false
        )}, ${this.buildString(
          2000 * 2,
          hasDimensions ? 2000 * relNum * 2 : false,
          false
        )} 2x`
        fallback = mini

        return { background, mobile, tablet, mini, desktop, large, fallback }
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
    top: 0;
    left: 0;
    &.half {
      width: 50%;
      @include breakpoint(mobile) {
        width: 100%;
        height: 50%;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>