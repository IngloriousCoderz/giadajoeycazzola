global.File = typeof window === 'undefined' ? Object : window.File

module.exports = {
  /**
   * Headers of the page
   */
  head: {
    title: 'Giada Joey Cazzola - Fotografa matrimonio Torino e Roma',

    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Fotografa di matrimonio a Torino, Roma, in Toscana, Puglia, Costiera Amalfitana, Sicilia e in tutta Europa. Specializzata in reportage foto e video spontanei.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Giada Joey Cazzola - Fotografa matrimonio Torino e Roma'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Fotografa di matrimonio a Torino, Roma, in Toscana, Puglia, Costiera Amalfitana, Sicilia e in tutta Europa. Specializzata in reportage foto e video spontanei.'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.giadajoeycazzola.com'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.giadajoeycazzola.com/images/about_me.jpg'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '1953139364946355'
      }
    ],

    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.giadajoeycazzola.com'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: ['~/assets/css/style.scss'],

  /**
   * Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },

  plugins: ['~plugins/vue-awesome-swiper'],

  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-61816704-2'
      }
    ],
    '@nuxtjs/sitemap',
    'nuxt-buefy'
  ],

  sitemap: {
    hostname: 'https://www.giadajoeycazzola.com',
    generate: true
  },

  /**
   * Build configuration
   */
  build: {
    vendor: ['babel-polyfill', 'vue-awesome-swiper', 'zpad'],
    /**
     * You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
