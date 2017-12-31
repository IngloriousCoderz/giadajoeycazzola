import Vue from 'vue'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  require('swiper/dist/css/swiper.css')
  Vue.use(VueAwesomeSwiper)
}
