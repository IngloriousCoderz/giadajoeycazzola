<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">{{title}}</h1>

  <small class="is-italic">&mdash; {{date}} &mdash;</small>

  <article class="content">
    <slot>Here goes the article.</slot>
  </article>
</section>
</template>

<script>
export default {
  props: ['title', 'description', 'url', 'image', 'type', 'date'],

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
          content: this.type
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
  }
}
</script>
