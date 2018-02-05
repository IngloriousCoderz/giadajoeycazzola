<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">{{title}}</h1>


  <article class="content">
    <p class="is-size-7 is-italic has-text-centered-mobile has-text-right-desktop">&mdash; {{date}} &mdash;</p>
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
