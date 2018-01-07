module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Giada Joey Cazzola',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'An example of static website for photographers'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['~/assets/css/style.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  plugins: ['~plugins/buefy', '~plugins/vue-awesome-swiper'],

  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-61816704-2'
      }
    ]
  ],

  env: {
    baseUrl: process.env.ENV === 'production' ? process.env.BASE_URL || '' : ''
  },

  router: {
    base: process.env.ENV === 'production' ? process.env.BASE_URL || '' : ''
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
