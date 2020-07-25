<template>
  <footer>
    <address class="contact">
      <a href="https://www.facebook.com/tompaulleygroundworks/" class="tpgw-facebook">
        <div class="social-icon icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0 5.37216 0 0 5.37216 0 11.9991c0 5.9891 4.38789 10.9531 10.1242 11.8533v-8.3848H7.07758v-3.4685h3.04662V9.35553c0-3.00727 1.7914-4.66839 4.5322-4.66839 1.3128 0 2.686.23435 2.686.23435v2.9529h-1.513c-1.4906 0-1.9555.92494-1.9555 1.87385v2.25086h3.3279l-.532 3.4685h-2.7959v8.3848c5.7364-.9002 10.1242-5.8642 10.1242-11.8533z"
            />
          </svg>
        </div>
        <span class="label">{{ contact.facebook }}</span>
      </a>
      <a href="mailto:tom@tpgw.co.uk" class="tpgw-email">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </div>
        <span class="label">{{ contact.email }}</span>
      </a>
      <a href="tel:07795 030117" class="tpgw-call">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            />
          </svg>
        </div>
        <span class="label">{{ contact.tel }}</span>
      </a>
    </address>
  </footer>
</template>

<script>
  import client from '~/sanity.js'

  export default {
    data() {
      return {
        contact: {
          email: 'tom@tpgw.co.uk',
          facebook: 'tompaulleygroundwork',
          tel: '07795 030117'
        }
      }
    },
    async fetch() {
      const query = `*[_type == 'siteSettings'][0] {
            contactDetails
          }`
      return client
        .fetch(query)
        .then(data => {
          this.contact = data.contactDetails
        })
        .catch(err => {
          console.log(err)
        })
    },
    mounted() {
      // console.log(this.contact)
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: $primary;
    color: $white;
    font-family: $title_font;
    padding: 10px 20px;
    box-sizing: border-box;
    box-shadow: 0px -1px 10px 1px rgba($black, 0.5);
    .contact {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      display: inline-block;
      color: $white;
      text-decoration: none;
      font-size: 22px;
      margin: 0 10px;
    }
    .icon {
      width: 25px;
      height: 25px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 3px;
      svg {
        width: 100%;
        fill: $white;
      }
    }
    .label {
      letter-spacing: 1px;
    }
    @include breakpoint(tablet-mobile) {
      .tpgw-facebook,
      .tpgw-email {
        .label {
          display: none;
        }
      }
    }
    @include breakpoint(mobile) {
      .icon {
        width: 35px;
        height: 35px;
      }
      .tpgw-call {
        .label {
          display: none;
        }
      }
    }
  }
</style>