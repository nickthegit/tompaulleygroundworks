<template>
  <main>
    <h1>Contact</h1>
    <div class="contact-wrapper">
      <section class="form-wrap">
        <form
          name="tpgw-contact"
          method="POST"
          netlify-honeypot="bot-field"
          action="/thanks.html"
          netlify
        >
          <input type="hidden" name="form-name" value="tpgw-contact" />
          <p class="hidden-input">
            <label>
              Donâ€™t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Telephone:
            <input type="tel" name="tel" />
          </label>
          <label>
            Location:
            <input type="text" name="location" />
          </label>
          <label>
            Description of work:
            <textarea name="message"></textarea>
          </label>
          <div data-netlify-recaptcha></div>
          <button class="btn" type="submit">SEND</button>
        </form>
      </section>
      <section class="contact-wrap">
        <address>
          <h4>
            <span>Call us:</span> 07795 030117
          </h4>
          <h4>
            <span>Email us:</span> tom@tpgw.co.uk
          </h4>
          <h4>
            <span>Opening Hours</span>
          </h4>
          <p>
            Mon-Fri:
            <strong>7:30 - 17:30</strong>
          </p>
          <p>
            Sat:
            <strong>7:30 - 13:30</strong>
          </p>
          <p>
            Sun:
            <strong>Closed</strong>
          </p>
          <h4>
            <span>Follow Us</span>
          </h4>
          <a href="https://www.facebook.com/tompaulleygroundworks/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0 5.37216 0 0 5.37216 0 11.9991c0 5.9891 4.38789 10.9531 10.1242 11.8533v-8.3848H7.07758v-3.4685h3.04662V9.35553c0-3.00727 1.7914-4.66839 4.5322-4.66839 1.3128 0 2.686.23435 2.686.23435v2.9529h-1.513c-1.4906 0-1.9555.92494-1.9555 1.87385v2.25086h3.3279l-.532 3.4685h-2.7959v8.3848c5.7364-.9002 10.1242-5.8642 10.1242-11.8533z"
              />
            </svg>
          </a>
        </address>
      </section>
    </div>
  </main>
</template>

<script>
  export default {
    head() {
      return {
        titleTemplate: `Contact - %s`
      }
    }
  }
</script>

<style lang="scss" scoped>
  main,
  article {
    width: 100%;
    height: 100%;
    position: relative;
  }
  main {
    padding-top: $header_height;
    padding-bottom: $footer_height;
    @include breakpoint(tablet-mobile) {
      padding-top: $header_height + 40px;
    }
  }
  h1 {
    width: 100%;
    max-width: $textContainer;
    margin: 0 auto;
    padding: 10px 40px;
    @include breakpoint(mobile) {
      padding: 10px 20px;
    }
  }

  .hidden-input {
    display: none;
  }

  .contact-wrapper {
    width: 100%;
    max-width: $textContainer;
    box-sizing: border-box;
    position: relative;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: auto;
    margin: 0 auto;
  }
  .contact-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: flex-start;
    box-sizing: border-box;
    a {
      width: 40px;
      height: 40px;
      display: block;
      margin-top: 10px;
    }
    svg {
      width: 100%;
      fill: $white;
    }
    h4 {
      padding-top: 20px;
      span {
        color: $primary;
      }
    }
    p {
      strong {
        font-weight: 600;
      }
    }
  }
  .form-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    max-width: 720px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: end;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 40px;
  }
  form {
    display: inline-block;
    max-width: 720px;
    width: 100%;
  }
  label {
    display: block;
    width: 100%;
    padding: 5px 0;
  }
  input,
  textarea {
    margin: 5px 0;
    display: block;
    width: 100%;
    min-width: 300px;
    max-width: 720px;
    padding: 10px;
    border: none;
    box-sizing: border-box;
    font-size: 16px;
    background: transparent;
    border-bottom: 2px solid $white;
    color: $white;
    @include breakpoint(tablet) {
      min-width: 300px;
    }
  }
  .btn {
    display: block;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    background: $primary;
    color: $white;
    width: 100%;
    max-width: 280px;
    min-width: 140px;
    position: absolute;
    right: 40px;
    margin-top: 20px;
  }
  @include breakpoint(mobile) {
    .contact-wrapper {
      padding-bottom: 40px;
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
    }
    .contact-wrap {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      padding: 0 20px;
      height: auto;
      position: relative;
    }
    .form-wrap {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      height: auto;
      position: relative;
      justify-content: center;
      padding: 40px 20px;
    }
    form {
      width: 100%;
    }
    input,
    textarea {
      min-width: 100%;
      width: 100%;
    }
  }
</style>