<template>
    <div class="background-wrapper">
        <h1>404</h1>
        <h2>You've taken a wrong turn!</h2>
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

