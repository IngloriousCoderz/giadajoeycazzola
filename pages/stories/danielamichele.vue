<template>
<section class="container">
  <lightbox :title="title" :images="images"></lightbox>
</section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

const BASE_PATH = '/images/stories/danielamichele'
const IMAGE_COUNT = 91

export default {
  scrollToTop: true,

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
      title: 'Daniela & Michele',
      description:
        'Immersa nel verde delle colline canavesi sorge Villa Merlin, un luogo raffinato ma semplice proprio come Daniela e Michele.',
      url: 'https://www.giadajoeycazzola.com/stories/danielamichele/',
      image:
        'https://www.giadajoeycazzola.com/images/stories/danielamichele/01.jpg',

      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>
