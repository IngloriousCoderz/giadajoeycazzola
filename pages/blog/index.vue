<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">Blog</h1>

  <div class="content has-text-centered">
    Dall&rsquo;unione di due passioni, scrittura e fotografia, nasce questo blog: uno spazio in cui i futuri sposi, alle prese con l&rsquo;organizzazione del matrimonio, possono trovare spunti interessanti. Un viaggio tra parole e immagini che insieme compongono articoli riguardanti vari argomenti: dallo stile alle location, dagli abiti alle bomboniere. Buona lettura!
  </div>

  <div class="content">
    <nuxt-link :to="{name: post.href}" v-for="post in posts" :key="post.id">
      <article class="columns card">
          <div class="card-image column is-one-third is-paddingless">
            <div class="image is-4by3">
              <div class="is-overlay has-clipped-background clickable" :style="{'background-image': `url(${post.src})`}" />
            </div>
          </div>

          <div class="card-content column">
            <h3 class="title is-5">{{post.title}}</h3>
            <small class="is-italic">2 febbraio 2018</small>
            <p>
              <span v-html="post.description" />
              <br />
              <div class="has-text-weight-bold">[<span class="is-italic">continua a leggere...</span>]</div>
            </p>
          </div>
      </article>
    </nuxt-link>
  </div>

  <div class="content has-text-centered">
    Altri post in arrivo...
  </div>
</section>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.url
        }
      ]
    }
  },

  data() {
    return {
      title: 'Blog',
      description:
        "Una collezione di articoli ricchi di consigli per le future spose: location in Piemonte, tutte le nuove tendenze wedding dell'anno in corso e molto altro.",
      url: 'https://www.giadajoeycazzola.com/blog/',
      image: 'https://www.giadajoeycazzola.com/images/about_me.jpg',

      posts: [
        {
          id: 'matrimoniobohochic',
          src: '/images/blog/matrimoniobohochic/01.jpg',
          href: 'blog-matrimoniobohochic',
          title: 'Matrimonio Boho Chic',
          description: `Se stai pensando di organizzare un matrimonio in stile bohemien, questa è la guida che fa per te.
        <br /> &ldquo;Boho wedding&rdquo; è una delle ricerche più frequenti su Google.
        <br /> Ma cosa rende un matrimonio come questo diverso dagli altri?`
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
  max-width: 18rem;
}
</style>
