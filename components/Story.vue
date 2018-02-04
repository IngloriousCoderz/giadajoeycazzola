<template>
<section class="container">
  <lightbox :title="title" :images="images"></lightbox>
</section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

export default {
  props: ['title', 'description', 'type', 'basePath', 'imageCount'],

  components: { Lightbox },

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
  },

  data() {
    return {
      url: `https://www.giadajoeycazzola.com/${this.basePath}/`,
      image: `https://www.giadajoeycazzola.com/images/${this.basePath}/01.jpg`,

      images: Array.from(Array(this.imageCount).keys()).map(index => ({
        id: index + 1,
        src: `/images/${this.basePath}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>
