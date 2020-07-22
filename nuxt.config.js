
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tom Paulley Groundworks, Dorset',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.' },
      { name: 'keywords', content: 'Concreting,treatment plant,drainage,driveway,excavation,surfacing,landscaping,dorset,somerset,dorchester,sherborne' },
      { name: 'author', content: 'Nick John - nickjohn.co.uk' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `Tom Paulley Groundworks`
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: 'https://tpgw.co.uk/'
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: `https://tpgw.co.uk/tpgw-poster.jpg`
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: 'Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  pageTransition: 'page',
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/_all.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  content: {
    // Options
  },
  styleResources: {
    scss: [
      './assets/scss/_variables.scss', // use underscore "_" & also file extension ".scss"
      './assets/scss/_mediaquery.scss'
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://tpgw.co.uk',
    exclude: [
      '/thanks',
      '/404'
    ],
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const files = await $content('services').fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  /*
  ** Build configuration
  */
  generate: {
    fallback: true,
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('services').fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
