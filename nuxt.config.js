import fs from 'fs'
import yaml from 'js-yaml'
import { dateTimeFormats } from './locales/dateTimeFormats'

const en = yaml.load(fs.readFileSync('./locales/en.yml'))
const it = yaml.load(fs.readFileSync('./locales/it.yml'))

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'Giada Joey Cazzola - Destination wedding photographer in Italy and Europe',
    // title: 'Giada Joey Cazzola - Fotografo reportage matrimionio Italia - Piemonte, Toscana, Roma'

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        // content: 'Wedding photographer in Rome, Piedmont, Tuscany, the rest of Italy and Europe. Specialized in spontaneous photo and video reportage.'
        // content: 'Fotografa di matrimonio a Roma, in Piemonte, Toscana, resto di Italia ed Europa. Specializzata in reportage foto e video spontanei.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        // content: 'Giada Joey Cazzola - Destination wedding photographer in Italy and Europe'
        // content: 'Giada Joey Cazzola - Fotografo reportage matrimionio Italia - Piemonte, Toscana, Roma'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        // content: 'Wedding photographer in Rome, Piedmont, Tuscany, the rest of Italy and Europe. Specialized in spontaneous photo and video reportage.'
        // content: 'Fotografa di matrimonio a Roma, in Piemonte, Toscana, resto di Italia ed Europa. Specializzata in reportage foto e video spontanei.'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.giadajoeycazzola.com',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.giadajoeycazzola.com/images/about_me.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '1953139364946355',
      },
    ],

    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.giadajoeycazzola.com',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/vue-awesome-swiper'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: false }],
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/google-gtag',
    [
      '@nuxtjs/i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root', // recommended
        },
      },
    ],
    '@nuxtjs/sitemap',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  'google-gtag': {
    id: 'UA-61816704-2',
  },

  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, it },
      dateTimeFormats,
    },
  },

  sitemap: {
    hostname: 'https://giadajoeycazzola.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
