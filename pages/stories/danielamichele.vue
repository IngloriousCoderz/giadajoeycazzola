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
      title: 'Daniela & Michele',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Immersa nel verde delle colline canavesi sorge Villa Merlin, un luogo raffinato ma semplice proprio come Daniela e Michele.'
        }
      ]
    }
  },

  data() {
    return {
      title: 'Daniela & Michele',
      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>
