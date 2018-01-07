<template>
<div>
  <nav class="navbar is-hidden-desktop" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{name: 'index'}" class="navbar-item has-text-white">Logo</nuxt-link>

      <button class="button navbar-burger" :class="{'is-active': burgerActive}" @click="onClickBurger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar-menu" :class="{'is-active': burgerActive}">
      <nuxt-link :to="{name: 'index'}" class="navbar-item has-text-white">Home</nuxt-link>
      <nuxt-link :to="{name: 'about'}" class="navbar-item has-text-white">About</nuxt-link>
      <nuxt-link :to="{name: 'photo'}" class="navbar-item has-text-white">Photo</nuxt-link>
      <nuxt-link :to="{name: 'stories'}" class="navbar-item has-text-white">Stories</nuxt-link>
      <nuxt-link :to="{name: 'film'}" class="navbar-item has-text-white">Film</nuxt-link>
      <nuxt-link :to="{name: 'contatti'}" class="navbar-item has-text-white">Contatti</nuxt-link>
    </div>
  </nav>

  <div v-swiper:mySwiper="swiperOptions">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides" :key="slide">
        <div class="is-overlay" :style="{'background-image': `url(${baseUrl}/images/slides/${slide}.jpg)`}" />
        <div class="is-overlay dark"></div>
      </div>
    </div>
  </div>

  <nav class="navbar level has-text-centered is-hidden-mobile">
    <div class="level-item">
      <nuxt-link :to="{name: 'index'}" class="has-text-white">Home</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'about'}" class="has-text-white">About</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'photo'}" class="has-text-white">Photo</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'index'}" class="has-text-white">Logo</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'stories'}" class="has-text-white">Stories</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'film'}" class="has-text-white">Film</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'contatti'}" class="has-text-white">Contatti</nuxt-link>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="is-size-1 has-text-centered">Giada Joey Cazzola</h1>

        <div class="content">
          <p>
            Giada è una fotografa torinese specializzata in reportage di matrimonio fotografia di gravidanza, newborn e baby photography. Contattala per informazioni.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  layout: 'home',

  data() {
    return {
      baseUrl: process.env.baseUrl,
      burgerActive: false,
      slides: ['jpg1', 'jpg2', 'jpg3', 'jpg4', 'jpg5', 'jpg6', 'jpg7', 'jpg8'],
      swiperOptions: {
        loop: true,
        speed: 3000,
        keyboard: {
          enabled: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },

  methods: {
    onClickBurger() {
      this.burgerActive = !this.burgerActive
    }
  }
}
</script>

<style scoped>
.navbar.is-mobile, .navbar-brand, .navbar-menu {
  background-color: #504c49;
}

.swiper-container {
  height: 100vh;
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-slide>.is-overlay {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.swiper-slide>.is-overlay.dark {
  /*background: rgba(0, 0, 0, 0.5);*/
}

.navbar.level {
  position: absolute;
  width: 100vw;
  bottom: 0;
  z-index: 1;
  background: transparent;
}
</style>
