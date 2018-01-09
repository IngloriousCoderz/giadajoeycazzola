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
    link: [
      { rel: 'canonical', href: 'https://www.giadajoeycazzola.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'
      }
    ]
  },

  css: ['~/assets/css/style.css'],

  script: [
    {
      innerHTML: `
// Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
// ----------------------------------------------------------------------
// This script checks to see if a redirect is present in the query string
// and converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
;(function(l) {
  if (l.search) {
    var q = {}
    l.search
      .slice(1)
      .split('&')
      .forEach(function(v) {
        var a = v.split('=')
        q[a[0]] = a
          .slice(1)
          .join('=')
          .replace(/~and~/g, '&')
      })
    if (q.p !== undefined) {
      window.history.replaceState(
        null,
        null,
        l.pathname.slice(0, -1) + (q.p || '') + (q.q ? '?' + q.q : '') + l.hash
      )
    }
  }
})(window.location)
`,
      type: 'text/javascript',
      body: true
    }
  ],

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
