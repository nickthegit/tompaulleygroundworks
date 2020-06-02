<template>
  <header>
    <nuxt-link class="brand" to="/">
      <img
        @click="closeNav"
        src="https://res.cloudinary.com/nickjohn/image/upload/w_400/v1590703038/tpgw/tom-paulley-groundworks-logo.png"
        alt="tpgw header logo"
      />
    </nuxt-link>
    <nav :class="navState ? 'navOpen' : 'navClosed'">
      <ul @click="closeNav">
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/services">Services</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <!-- <button @click="navToggle">b</button> -->
    <button
      class="hamburger hamburger--collapse"
      :class="navState ? 'is-active' : ''"
      @click="navToggle"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        navState: false
      }
    },
    methods: {
      navToggle() {
        this.navState = !this.navState
      },
      closeNav() {
        this.navState = false
      }
    },
    mounted() {
      console.log(this.$route.name)
    },
    head() {
      return {
        bodyAttrs: {
          class: [
            `page-${this.$route.name}`,
            this.navState ? 'navOpen' : 'navClosed'
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 99;
  }
  .brand {
    position: absolute;
    width: 120px;
    left: 40px;
    top: 20px;
    z-index: 4;
    display: block;
    img {
      width: 100%;
    }
  }
  // remove for homepage
  .page-index {
    .brand {
      display: none;
    }
    @include breakpoint(mobile) {
      &.navOpen {
        .brand {
          display: block;
        }
      }
    }
  }
  button {
    width: 60px;
    height: 60px;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
    &.hamburger {
      display: none;
      @include breakpoint(mobile) {
        display: block;
      }
    }
  }
  $hamburger-padding-x: 10px;
  $hamburger-padding-y: 10px;
  $hamburger-layer-width: 40px;
  $hamburger-layer-height: 3px;
  $hamburger-layer-spacing: 10px;
  $hamburger-layer-color: $white;
  $hamburger-layer-border-radius: 2px;
  $hamburger-hover-opacity: 0.7;
  $hamburger-active-layer-color: $hamburger-layer-color;
  $hamburger-active-hover-opacity: $hamburger-hover-opacity;

  // To use CSS filters as the hover effect instead of opacity,
  // set $hamburger-hover-use-filter as true and
  // change the value of $hamburger-hover-filter accordingly.
  $hamburger-hover-use-filter: false;
  $hamburger-hover-filter: opacity(50%);
  $hamburger-active-hover-filter: $hamburger-hover-filter;
  @import '@/assets/scss/hamburgers/hamburgers.scss';

  nav {
    display: inline-block;
    position: absolute;
    height: 100%;
    right: 20px;
    @include breakpoint(mobile) {
      background: $primary;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 3;
      transform: translateY(-101%);
      transition: transform 0.25s ease-out;
      &.navOpen {
        transform: translateY(0);
      }
      ul {
        justify-content: center;
        flex-direction: column;
      }
      li {
        a {
          font-size: 32px;
          line-height: 32px;
        }
      }
    }
  }
  ul {
    display: flex;
    height: 100%;
    align-items: center;
  }
  li {
    a {
      padding: 10px 20px;
      display: inline-block;
      text-decoration: none;
      font-size: 20px;
      line-height: 20px;
      font-family: $title_font;
      text-transform: uppercase;
      color: white;
      position: relative;
      z-index: 2;
      overflow: hidden;
      transition: color 0.3s ease-out;
      &::after {
        content: '';
        width: 100%;
        height: 20px;
        background: $primary;
        position: absolute;
        left: 0;
        top: 8px;
        z-index: -1;
        transform: translateX(103%);
        transition: transform 0.3s ease-out;
      }
      &:hover,
      &.nuxt-link-active {
        color: $black;
        &::after {
          transform: translateX(0);
        }
      }
    }
  }
</style>