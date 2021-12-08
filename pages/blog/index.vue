<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">
      {{ $t('blog.title') }}
    </h1>

    <div class="content has-text-centered">
      {{ $t('blog.body') }}
    </div>

    <div class="content">
      <nuxt-link
        v-for="post in posts"
        :key="post.id"
        :to="localePath(`blog-${post.id}`)"
      >
        <article class="columns card">
          <div class="card-image column is-one-third is-paddingless">
            <div class="image is-4by3">
              <div
                class="is-overlay has-clipped-background clickable"
                :style="{ 'background-image': `url(${post.src})` }"
              />
            </div>
          </div>

          <div class="card-content column">
            <h3 class="title is-5">
              {{ post.title }}
            </h3>
            <small class="is-italic">{{
              $d(new Date(2018, 1, 2), 'short')
            }}</small>
            <p v-html="post.description" />
            <div class="has-text-weight-bold">
              [
              <span class="is-italic">{{ $t('blog.keep-reading') }}</span>
              ]
            </div>
          </div>
        </article>
      </nuxt-link>
    </div>

    <div class="content has-text-centered">
      {{ $t('blog.coming-soon') }}
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: this.$i18n.t('blog.seo.title'),
      description: this.$i18n.t('blog.seo.description'),
      url: 'https://www.giadajoeycazzola.com/blog/',
      image: 'https://www.giadajoeycazzola.com/images/about_me.jpg',

      posts: [
        {
          id: 'matrimoniobohochic',
          src: '/images/blog/matrimoniobohochic/01.jpg',
          title: 'Matrimonio Boho Chic',
          description: `Se stai pensando di organizzare un matrimonio in stile bohemien, questa è la guida che fa per te.
        <br /> &ldquo;Boho wedding&rdquo; è una delle ricerche più frequenti su Google.
        <br /> Ma cosa rende un matrimonio come questo diverso dagli altri?`,
        },
      ],
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
}
</script>

<style scoped>
img {
  max-width: 18rem;
}
</style>
