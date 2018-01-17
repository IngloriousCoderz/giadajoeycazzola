<template>
<div class="has-navbar-fixed-top">
  <nav class="navbar is-hidden-desktop" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{name: 'index'}" class="navbar-item has-text-white">
        <h1 class="has-text-weight-bold is-marginless">GJC</h1>
      </nuxt-link>

      <button class="button navbar-burger" :class="{'is-active': burgerActive}" @click="onClickBurger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar-menu" :class="{'is-active': burgerActive}">
      <nuxt-link :to="{name: 'index'}" class="navbar-item has-text-white" @click.native="closeBurger">Home</nuxt-link>
      <nuxt-link :to="{name: 'about'}" class="navbar-item has-text-white" @click.native="closeBurger">About</nuxt-link>
      <nuxt-link :to="{name: 'photos'}" class="navbar-item has-text-white" @click.native="closeBurger">Photos</nuxt-link>
      <nuxt-link :to="{name: 'stories'}" class="navbar-item has-text-white" @click.native="closeBurger">Stories</nuxt-link>
      <nuxt-link :to="{name: 'film'}" class="navbar-item has-text-white" @click.native="closeBurger">Film</nuxt-link>
      <nuxt-link :to="{name: 'contatti'}" class="navbar-item has-text-white" @click.native="closeBurger">Contatti</nuxt-link>
    </div>
  </nav>

  <nav class="navbar level container has-text-centered is-uppercase is-fixed-top is-hidden-mobile">
    <div class="level-item">
      <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'about'}">About</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'photos'}">Photos</nuxt-link>
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
      <nuxt-link :to="{name: 'film'}">Film</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'contatti'}">Contatti</nuxt-link>
    </div>
  </nav>

  <nuxt/>
</div>
</template>

<script>
export default {
  data() {
    return {
      burgerActive: false
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

<style scoped>
.navbar.is-mobile,
.navbar-brand,
.navbar-menu {
  background-color: #504c49;
}
</style>
