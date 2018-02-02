module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Giada Joey Cazzola - Destination Wedding Photographer',

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
          'Fotografa di matrimonio a Torino, lago di Como, lago Maggiore, Toscana, Roma, Puglia e in tutta Europa. Specializzata in reportage foto e video spontanei.'
        // 'Destination wedding and elopement photographer in Turin, lake Como, lake Maggiore, Tuscany, Rome, Apulia and Europe. Specializing in spontaneous photo and video reportages.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Giada Joey Cazzola - Destination Wedding Photographer'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Fotografa di matrimonio a Torino, lago di Como, lago Maggiore, Toscana, Roma, Puglia e in tutta Europa. Specializzata in reportage foto e video spontanei.'
        // 'Destination wedding and elopement photographer in Turin, lake Como, lake Maggiore, Tuscany, Rome, Apulia and Europe. Specializing in spontaneous photo and video reportages.'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.giadajoeycazzola.com'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/favicon-96x96.png'
      },
      {
        property: 'og:type',
        content: 'website'
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
      { src: 'https://cdn1.matrimonio.com/js/wp-widget.js' },
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
    vendor: ['buefy', 'vue-awesome-swiper', 'zpad'],
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
