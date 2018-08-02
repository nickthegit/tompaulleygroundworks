<template>
    <!-- Slider main container -->
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" v-for="img in addCropToImg" :key="img.index">
                <img :src="img" alt="">
            </div>


        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-nav swiper-button-prev"></div>
        <div class="swiper-nav swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'swiper',
    props: {
        images: Array
    },
    computed: {
        addCropToImg: function() {
            var newArr = []
            for (let i = 0; i < this.images.length; i++) {
                const newImg = this.images[i].replace("/upload/", "/upload/ar_1.777777,c_fill,q_auto:good,w_900/");
                newArr.push(newImg);
            }
            return newArr
        }
    },
    mounted () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 5000,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
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
    .swiper-nav {
        @include breakpoint(mobile) { 
            display: none;
        }
    }


</style>
