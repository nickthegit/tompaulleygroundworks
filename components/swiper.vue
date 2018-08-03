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
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            on: {
                init: function () {
                    var width = window.innerWidth
                    var height = window.innerHeight
                    var container = document.querySelector('.blurs');                                              
                    // console.log(this)
                    for (let i = 0; i < this.slides.length; i++) {
                        var imgForDiv = this.imagesToLoad[i].src.replace("/upload/ar_1.777777,c_fill,q_auto:good,w_900/", "/upload/c_fill,q_50,e_blur:900,w_" + width + ",h_"+ height +"/");
                        var element = document.createElement("DIV")
                        element.style.backgroundImage = "url('"+ imgForDiv +"')"
                        element.classList.add("bkg-blurs")  
                        container.appendChild(element) 
                    }
                    var bkgBoxes = document.querySelectorAll('.bkg-blurs');
                    TweenMax.set('.bkg-blurs', { autoAlpha: 0 })
                    TweenMax.set(bkgBoxes[this.activeIndex], { autoAlpha: 0.8 })
                },
            }
        })
        mySwiper.on('slideChange', function () {
            var bkgBoxes = document.querySelectorAll('.bkg-blurs');
            TweenMax.to(bkgBoxes[this.previousIndex], 0.3, { autoAlpha: 0 })
            TweenMax.to(bkgBoxes[this.activeIndex], 0.3, { autoAlpha: 0.8 })
        });
    }
}
</script>

<style lang="scss" scoped>

    @import "~/assets/scss/base/_variables.scss";
    @import "~/assets/scss/base/_mediaquery.scss";
    @import "~/assets/scss/swiper.scss";

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
