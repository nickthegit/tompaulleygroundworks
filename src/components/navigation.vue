<template>
    <header :class="{navOpen: isActive}" >
        <a href="/" class="brand">
            <img src="https://res.cloudinary.com/jonserness/image/upload/c_fill,q_auto:good,w_100/v1533210167/tpgw/tom-paulley-groundworks-logo.png" alt="Tom Paulley Groundworks Logo">
        </a>
        <nav>
            <ul id="navMenu">
                <li @click="toggleNav" data-menuanchor="home" class="active"><a href="#home">Home</a></li>
                <li @click="toggleNav" data-menuanchor="services"><a href="#services">Services</a></li>
                <li @click="toggleNav" data-menuanchor="contact"><a href="#contact">Contact</a></li>
            </ul>
        </nav> 
        <button class="hamburger hamburger--collapse" :class="{isActive: isActive}" @click="toggleNav" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </header>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
      toggleNav: function(){
          this.isActive = !this.isActive;
          this.$emit('navState', this.isActive);
      }
  }
}
</script>

<style lang="scss" scoped>

    @import "./src/assets/scss/base/_variables.scss";
    @import "./src/assets/scss/base/_mediaquery.scss";

    header {
      width: 100%;
      height: $headerHeight;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      padding: $headerHeight / 8;
      box-sizing: border-box;
      background: rgba($black,0.1);
    }
    nav {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        z-index: 2;
        transition: all 0.2s ease-out;
        li {
            display: inline-block;
            padding: 10px;
            margin: 0 10px;
            font-size: 20px;
        }
        a {
            text-decoration: none;
            color: white;
        }
    }
    .brand {
        position: absolute;
        left: 20px;
        top: 50%;
        width: auto;
        height: $headerHeight / 1.4;
        transform: translateY(-50%);
        z-index: 3;
        img {
            height: 100%;
            width: auto;
        }
    }
    $hamburger-padding-x                       : 0;
    $hamburger-padding-y                       : 0;
    $hamburger-layer-width                     : 45px;
    $hamburger-layer-height                    : 3px;
    $hamburger-layer-spacing                   : 8px;
    $hamburger-layer-color                     : #fff;
    $hamburger-layer-border-radius             : 0;
    $hamburger-hover-opacity                   : 0.7;
    $hamburger-hover-transition-duration       : 0.15s;
    $hamburger-hover-transition-timing-function: linear;
    @import "./src/assets/scss/components/hamburgers/hamburgers.scss";
    .hamburger {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        height: 45px;
        width: 45px;
        border: none;
        z-index: 4;
        display: none;
    }
    @include breakpoint(mobile) { 
        nav {
            transform: translateY(0%);
            transform: translateX(100%);
            height: 100vh;
            width: 100%;
            top: 0;
            left: 0;
            background: rgba($black, 0.8);
            #navMenu {
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
            }
            li {
                display: block;
                font-size: 4.5vh;
                padding: 20px;
            }
        } 
        .hamburger {
            display: block;
        }
        .navOpen {
            nav {
                transform: translateX(0%);
            }
        }       
    }
</style>
