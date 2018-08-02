<template>
    <div class="contained contact-wrapper">
        <form name="contact" method="POST" action="/#contact" netlify>
            <label><input type="text" name="name" placeholder="Your Name" /></label>   
            <label><input type="email" name="email" placeholder="Your Email" /></label>
            <label><input type="tel" name="tel" placeholder="Your Telephone" /></label>
            <label><input type="text" name="location" placeholder="Your Location" /></label>   
            <label><textarea name="message" placeholder="Description of works"></textarea></label>
            <div data-netlify-recaptcha></div>
            <button type="submit">SEND</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'contact',
}
</script>

<style lang="scss" scoped>

    @import "./src/assets/scss/base/_variables.scss";
    @import "./src/assets/scss/base/_mediaquery.scss";

    .contact-wrapper {
        padding-top: $headerHeight;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        display: block;
        width: 100%;
        max-width: 800px;
    }
    label {
        display: block;
        width: 100%;
        margin: 20px auto;
    }
    input, textarea {
        display: block;
        margin: 10px auto;
        width: 100%;
        max-width: 500px;
        padding: 10px;
        border: none;
        box-sizing: border-box;
        font-size: 16px;
    }
    button {
        display: block;
        padding: 10px;
        margin: 0 auto;
        font-size: 16px;
        font-weight: 600;
        border: none;
        background: #008CBA;
        color: $white;
        width: 100%;
        max-width: 280px;
        min-width: 140px;
    }

</style>
