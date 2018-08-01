<template>
    <!-- Slider main container -->
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
                <picture>
                    <source media="(min-width: 1024px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_900/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_1800/v1533128578/tpgw/tpgw1.jpg 2x">
                    <source media="(min-width: 769px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_900/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_1800/v1533128578/tpgw/tpgw1.jpg 2x">
                    <source media="(min-width: 481px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_770/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_1440/v1533128578/tpgw/tpgw1.jpg 2x">
                    <source media="(min-width: 321px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_480/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_960/v1533128578/tpgw/tpgw1.jpg 2x">
                    <source media="(min-width: 200px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_320/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_640/v1533128578/tpgw/tpgw1.jpg 2x">
                    <img src="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_900/v1533128578/tpgw/tpgw1.jpg" alt="">
                </picture>  
            </div>
            <div class="swiper-slide">
                <img src="http://via.placeholder.com/1920x1080" alt="">
            </div>
            <div class="swiper-slide">
                <img src="http://via.placeholder.com/1920x1080" alt="">
            </div>

        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'swiper',
    mounted () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            grabCursor: true,
            // autoplay: {
            //     delay: 5000,
            // },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }
}
</script>

<style lang="scss" scoped>

    @import "./src/assets/scss/base/_variables.scss";
    @import "./src/assets/scss/base/_mediaquery.scss";
    @import "./src/assets/scss/swiper.scss";

    .swiper-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .swiper-slide {
        img {
            width: 100%;
            height: auto;
        }
    }

</style>
