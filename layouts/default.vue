<template>
  <div class="has-navbar-fixed-top">
    <nav
      class="navbar is-fixed-top is-hidden-desktop"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link :to="localePath('index')" class="navbar-item">
          <h1 class="has-text-weight-bold is-marginless">GJC</h1>
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

    <div class="navbar level is-fixed-top is-hidden-touch">
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
          <nuxt-link :to="localePath('index')">
            {{ $t('menu.home') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('reviews')">
            {{ $t('menu.reviews') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('portfolio')">
            {{ $t('menu.portfolio') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('index')">
            <h1 class="is-size-2 has-text-weight-bold is-marginless">GJC</h1>
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('stories')">
            {{ $t('menu.stories') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('blog')">
            {{ $t('menu.blog') }}
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link :to="localePath('contacts')">
            {{ $t('menu.contacts') }}
          </nuxt-link>
        </div>
      </nav>
    </div>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      burgerActive: false,
    }
  },

  head() {
    return {
      titleTemplate: `%s | ${this.$i18n.t('default.seo.title')}`,
    }
  },

  mounted() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1953139364946355',
        xfbml: true,
        version: 'v2.12',
      })

      window.FB.AppEvents.logPageView()
    }
  },

  methods: {
    onClickBurger() {
      this.burgerActive = !this.burgerActive
    },

    closeBurger() {
      this.burgerActive = false
    },
  },
}
</script>
