module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tom Paulley Groundworks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tom Paulley Groundworks is a Dorset based ground works company offering services towards all aspects of groundworks, from excavations to drainage and surfacing to landscaping, serving all neighbouring counties.' },
      { name: 'keywords', content: 'Concreting,treatment plant,drainage,driveway,excavation,surfacing,landscaping,dorset,somerset,dorchester,sherborne'},
      { name: 'author', content: 'Nick John - nickjohn.co.uk'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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

