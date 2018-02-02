<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">Blog</h1>

  <article class="columns card" v-for="post in posts" :key="post.id">
      <div class="card-image column is-one-third is-paddingless">
        <div class="image is-4by3">
          <nuxt-link :to="{name: post.href}"><div class="is-overlay has-clipped-background clickable" :style="{'background-image': `url(${post.src})`}" /></nuxt-link>
        </div>
      </div>

      <div class="card-content column">
          <nuxt-link :to="{name: post.href}"><h3 class="title is-5">{{post.title}}</h3></nuxt-link>
          <small class="is-italic">2 febbraio 2018</small>
        <p>
          <span v-html="post.description" />
          <br />
          <nuxt-link :to="{name: post.href}" class="has-text-weight-bold">[<span class="is-italic">continua a leggere...</span>]</nuxt-link>
        </p>
      </div>
  </article>

  <div class="content has-text-centered">
    Altri post in arrivo...
  </div>
</section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Una collezione di articoli ricchi di consigli per le future spose: location in Piemonte, tutte le nuove tendenze wedding dell\'anno in corso e molto altro.'
      }]
    }
  },

  data() {
    return {
      posts: [{
        id: 'matrimoniobohochic',
        src: '/images/blog/matrimoniobohochic/01.jpg',
        href: 'blog-matrimoniobohochic',
        title: 'Matrimonio Boho Chic',
        description: `Se stai pensando di organizzare un matrimonio in stile bohemien, questa è la guida che fa per te.
        <br /> &ldquo;Boho wedding&rdquo; è una delle ricerche più frequenti su Google.
        <br /> Ma cosa rende un matrimonio come questo diverso dagli altri?`
      }]
    }
  }
}
</script>

<style scoped>
img {
  max-width: 18rem;
}
</style>
