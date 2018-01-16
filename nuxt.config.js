module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Giada Joey Cazzola - Destination wedding photographer',

    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Destination wedding and elopement photographer in Turin, lake Como, lake Maggiore, Tuscany, Rome, Apulia and Europe. Specializing in spontaneous photo and video reportages.'
      },
      {
        property: 'og:url',
        content: 'https://www.giadajoeycazzola.com'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Giada Joey Cazzola - Destination wedding photographer'
      },
      {
        property: 'og:description',
        content:
          'Destination wedding and elopement photographer in Turin, lake Como, lake Maggiore, Tuscany, Rome, Apulia and Europe. Specializing in spontaneous photo and video reportages.'
      },
      {
        property: 'og:image',
        content: '/favicon-96x96.png'
      }
    ],

    link: [
      {
        rel: 'canonical',
        href: 'https://www.giadajoeycazzola.com'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display'
      }
    ],

    script: [
      { src: 'https://cdn1.matrimonio.com/_js/wp-rated.js?v=4' },
      { src: '/scripts/spa.js' },
      { src: '/scripts/fb.js' }
    ]
  },

  css: ['~/assets/css/style.css'],

  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },

  plugins: ['~plugins/buefy', '~plugins/vue-awesome-swiper'],

  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-61816704-2'
      }
    ],
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.giadajoeycazzola.com',
    generate: true
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
