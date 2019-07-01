<template>
  <div class="has-navbar-fixed-top">
    <nav class="navbar is-hidden-desktop" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{name: 'index'}" class="navbar-item">
          <h1 class="has-text-weight-bold is-marginless">GJC</h1>
        </nuxt-link>

        <button
          class="button navbar-burger"
          :class="{'is-active': burgerActive}"
          @click="onClickBurger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="navbar-menu" :class="{'is-active': burgerActive}">
        <nuxt-link :to="{name: 'index'}" class="navbar-item" @click.native="closeBurger">Home</nuxt-link>
        <nuxt-link
          :to="{name: 'recensioni'}"
          class="navbar-item"
          @click.native="closeBurger"
        >Recensioni</nuxt-link>
        <nuxt-link
          :to="{name: 'portfolio'}"
          class="navbar-item"
          @click.native="closeBurger"
        >Portfolio</nuxt-link>
        <nuxt-link :to="{name: 'stories'}" class="navbar-item" @click.native="closeBurger">Stories</nuxt-link>
        <nuxt-link :to="{name: 'blog'}" class="navbar-item" @click.native="closeBurger">Blog</nuxt-link>
        <nuxt-link :to="{name: 'contacts'}" class="navbar-item" @click.native="closeBurger">Contacts</nuxt-link>
      </div>
    </nav>

    <nav
      class="navbar level container has-text-centered is-uppercase is-fixed-top is-hidden-mobile"
    >
      <div class="level-item">
        <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{name: 'recensioni'}">Recensioni</nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{name: 'portfolio'}">Portfolio</nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{name: 'index'}">
          <h1 class="is-size-2 has-text-weight-bold is-marginless">GJC</h1>
        </nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{name: 'stories'}">Stories</nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{name: 'blog'}">Blog</nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{name: 'contacts'}">Contacts</nuxt-link>
      </div>
    </nav>

    <nuxt/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s | Giada Joey Cazzola - Fotografa matrimonio Torino'
    }
  },

  data() {
    return {
      burgerActive: false
    }
  },

  mounted() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1953139364946355',
        xfbml: true,
        version: 'v2.12'
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
    }
  }
}
</script>
