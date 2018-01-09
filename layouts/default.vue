<template>
<div>
  <nav class="navbar level has-text-centered">
    <div class="level-item">
      <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'about'}">About</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'photo'}">Photo</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'index'}">Logo</nuxt-link>
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

  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          &copy; Copyright 2017 Giada Joey Cazzola | Tutti i diritti riservati
        </p>
      </div>
    </div>
  </footer>
</div>
</template>
