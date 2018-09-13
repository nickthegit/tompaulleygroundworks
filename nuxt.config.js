module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tom Paulley Groundworks, Dorset',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.' },
      { name: 'keywords', content: 'Concreting,treatment plant,drainage,driveway,excavation,surfacing,landscaping,dorset,somerset,dorchester,sherborne'},
      { name: 'author', content: 'Nick John - nickjohn.co.uk'},
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
  modules: [
    '@nuxtjs/sitemap'
   ],
   sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://tpgw.co.uk',
    generate: true,
    routes: [
      '/',
      '/thanks'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

