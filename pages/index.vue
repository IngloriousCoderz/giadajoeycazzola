<template>
  <div class="has-navbar-fixed-top">
    <nav
      class="navbar is-fixed-top is-hidden-desktop"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link :to="localePath('index')" class="navbar-item">
          <h2 class="has-text-weight-bold is-marginless">GJC</h2>
        </nuxt-link>

        <button
          class="button navbar-burger"
          :class="{ 'is-active': burgerActive }"
          @click="onClickBurger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': burgerActive }">
        <div class="navbar-start">
          <nuxt-link
            :to="localePath('index')"
            class="navbar-item"
            @click.native="closeBurger"
          >
            {{ $t('menu.home') }} &rsaquo;
          </nuxt-link>

          <nuxt-link
            :to="localePath('reviews')"
            class="navbar-item"
            @click.native="closeBurger"
          >
            {{ $t('menu.reviews') }} &rsaquo;
          </nuxt-link>

          <nuxt-link
            :to="localePath('portfolio')"
            class="navbar-item"
            @click.native="closeBurger"
          >
            {{ $t('menu.portfolio') }} &rsaquo;
          </nuxt-link>

          <nuxt-link
            :to="localePath('stories')"
            class="navbar-item"
            @click.native="closeBurger"
          >
            {{ $t('menu.stories') }} &rsaquo;
          </nuxt-link>

          <nuxt-link
            :to="localePath('blog')"
            class="navbar-item"
            @click.native="closeBurger"
          >
            {{ $t('menu.blog') }} &rsaquo;
          </nuxt-link>

          <nuxt-link
            :to="localePath('contacts')"
            class="navbar-item"
            @click.native="closeBurger"
          >
            {{ $t('menu.contacts') }} &rsaquo;
          </nuxt-link>

          <hr class="navbar-divider" />

          <nuxt-link
            v-if="$i18n.locale !== 'en'"
            :to="switchLocalePath('en')"
            class="navbar-item"
          >
            🇬🇧
          </nuxt-link>
          <nuxt-link
            v-if="$i18n.locale !== 'it'"
            :to="switchLocalePath('it')"
            class="navbar-item"
          >
            🇮🇹
          </nuxt-link>
        </div>
      </div>
    </nav>

    <div v-swiper:mySwiper="swiperOptions" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="img in images" :key="img.id" class="swiper-slide">
          <div
            class="is-overlay has-clipped-background swiper-lazy"
            :data-background="img.src"
          />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
        </div>
      </div>

      <div
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
        @click="onClickPrev"
      />
      <div
        slot="button-next"
        class="swiper-button-next swiper-button-white"
        @click="onClickNext"
      />
    </div>

    <div class="navbar level is-hidden-touch">
      <div class="languages">
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
          🇬🇧
        </nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'it'" :to="switchLocalePath('it')">
          🇮🇹
        </nuxt-link>
      </div>

      <nav class="navbar level container has-text-centered is-uppercase">
        <div class="level-item">
          <nuxt-link :to="localePath('index')" class="has-text-white">
            {{ $t('menu.home') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('reviews')" class="has-text-white">
            {{ $t('menu.reviews') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('portfolio')" class="has-text-white">
            {{ $t('menu.portfolio') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('index')" class="has-text-white">
            <h2 class="is-size-2 has-text-weight-bold is-marginless">GJC</h2>
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('stories')" class="has-text-white">
            {{ $t('menu.stories') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('blog')" class="has-text-white">
            {{ $t('menu.blog') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('contacts')" class="has-text-white">
            {{ $t('menu.contacts') }}
          </nuxt-link>
        </div>
      </nav>
    </div>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1-desktop is-size-3-mobile has-text-centered">
            GiadaJoeyCazzola
          </h1>

          <div class="content has-text-centered" v-html="$t('home.about')" />
        </div>

        <h1 class="is-size-1 has-text-centered">
          {{ $t('home.awards') }}
        </h1>

        <!-- // Matrimonio.com -->
        <div class="container">
          <div class="columns is-centered">
            <div id="wp-ratedWA" class="column is-3 has-text-centered">
              <a
                href="https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658"
                title="Giada Joey Cazzola, vincitore Wedding Awards 2021 Matrimonio.com"
                target="_blank"
              >
                <img
                  id="wp-ratedWA-img-2021"
                  width="250"
                  height="250"
                  alt="Giada Joey Cazzola, vincitore Wedding Awards 2021 Matrimonio.com"
                  src="https://cdn1.matrimonio.com/img/badges/2021/badge-weddingawards_it_IT.jpg"
                />
              </a>
            </div>

            <div id="wp-ratedWA" class="column is-3 has-text-centered">
              <a
                href="https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658"
                title="Giada Joey Cazzola, vincitore Wedding Awards 2020 matrimonio.com"
                target="_blank"
              >
                <img
                  id="wp-ratedWA-img-2020"
                  width="250"
                  height="250"
                  alt="Giada Joey Cazzola, vincitore Wedding Awards 2020 matrimonio.com"
                  src="https://cdn1.matrimonio.com/img/badges/2020/badge-weddingawards_it_IT.jpg"
                />
              </a>
            </div>

            <div id="wp-ratedWA" class="column is-3 has-text-centered">
              <a
                href="https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658"
                title="Giada Joey Cazzola, vincitore Wedding Awards 2019 matrimonio.com"
                target="_blank"
              >
                <img
                  id="wp-ratedWA-img-2019"
                  width="250"
                  height="250"
                  alt="Giada Joey Cazzola, vincitore Wedding Awards 2019 matrimonio.com"
                  src="https://cdn1.matrimonio.com/img/badges/2019/badge-weddingawards_it_IT.jpg"
                />
              </a>
            </div>

            <div id="wp-ratedWA" class="column is-3 has-text-centered">
              <a
                href="https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658"
                title="Giada Joey Cazzola, vincitore Wedding Awards 2018 matrimonio.com"
                target="_blank"
              >
                <img
                  id="wp-ratedWA-img-2018"
                  width="250"
                  height="250"
                  alt="Giada Joey Cazzola, vincitore Wedding Awards 2018 matrimonio.com"
                  src="https://cdn1.matrimonio.com/img/badges/2018/badge-weddingawards_it_IT.jpg"
                />
              </a>
            </div>
          </div>
        </div>
        <!-- // Matrimonio.com -->
      </div>
    </section>
  </div>
</template>

<script>
import zpad from 'zpad'

const BASE_PATH = '/images/home'
const IMAGE_COUNT = 6
const SLIDE_DELAY = 3000
const SLIDE_SPEED = 750
const MANUAL_SPEED = 500

export default {
  layout: 'home',

  data() {
    return {
      title: this.$i18n.t('default.seo.title'),
      description: this.$i18n.t('home.seo.description'),
      url: 'https://www.giadajoeycazzola.com/',
      image: 'https://www.giadajoeycazzola.com/images/home/01.jpg',

      burgerActive: false,
      images: Array.from(Array(IMAGE_COUNT).keys()).map((index) => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`,
      })),
      swiperOptions: {
        loop: true,
        speed: SLIDE_SPEED,
        lazy: { loadPrevNext: true, loadOnTransitionStart: true },
        keyboard: { enabled: true },
        autoplay: { delay: SLIDE_DELAY, disableOnInteraction: true },
      },
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.url,
        },
      ],
    }
  },

  mounted() {
    window.wpShowRatedWAv3 && window.wpShowRatedWAv3('159658', '2021')
  },

  methods: {
    onClickBurger() {
      this.burgerActive = !this.burgerActive
    },

    closeBurger() {
      this.burgerActive = false
    },

    onClickPrev() {
      this.mySwiper.slidePrev(MANUAL_SPEED)
    },

    onClickNext() {
      this.mySwiper.slideNext(MANUAL_SPEED)
    },
  },
}
</script>

<style scoped lang="scss">
.swiper-container {
  height: 100vh;
  overflow: hidden;
  @media (max-width: 1023px) {
    height: 720px;
  }
  @media (max-width: 767px) {
    height: 480px;
  }
  @media (max-width: 479px) {
    height: 240px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.has-navbar-fixed-top {
  @media (min-width: 1024px) {
    padding-top: 0;
  }
}

.navbar.level {
  background: transparent;
}

.navbar.level:not(.container) {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  text-shadow: 0 0 0.5em black;
}
</style>
