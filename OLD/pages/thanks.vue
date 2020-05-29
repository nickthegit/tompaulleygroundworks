<template>
    <div class="background-wrapper">
        <h1>Thanks!</h1>
        <h2>We'll get back to you as soon as we can</h2>
        <nuxt-link to="/">Back</nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
    .background-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        background: black;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: white;
        padding: 40px;
    }
    h1 {
        font-size: 8vh;
    }
    h2 {
        font-size: 3vh;
        font-weight: 400;
    }
    a {
        margin-top: 20px;
        color: white;
        font-size: 20px;
    }
</style>

