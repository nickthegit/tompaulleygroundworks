<template>
    <picture>
        <source media="(min-width: 1024px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_900/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_1800/v1533128578/tpgw/tpgw1.jpg 2x">
        <source media="(min-width: 769px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_900/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_1800/v1533128578/tpgw/tpgw1.jpg 2x">
        <source media="(min-width: 481px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_770/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_1440/v1533128578/tpgw/tpgw1.jpg 2x">
        <source media="(min-width: 321px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_480/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_960/v1533128578/tpgw/tpgw1.jpg 2x">
        <source media="(min-width: 200px)" srcset="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_320/v1533128578/tpgw/tpgw1.jpg, http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_640/v1533128578/tpgw/tpgw1.jpg 2x">
        <img src="http://res.cloudinary.com/jonserness/image/upload/ar_1.777777,c_fill,q_auto:good,w_900/v1533128578/tpgw/tpgw1.jpg" alt="">
    </picture> 
</template>

<script>

export default {
    props: {
        imageObj: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    img {
        width: 100%;
    }
</style>

