<template>
<section class="container">
  <lightbox :title="title" :images="images"></lightbox>
</section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

const BASE_PATH = '/images/stories/annamariaclaudio'
const IMAGE_COUNT = 50

export default {
  scrollToTop: true,

  components: { Lightbox },

  head() {
    return {
      title: 'Annamaria & Claudio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Cornice della romantica storia di Annamaria e Claudio è il castello Saffarone, suggestiva dimora settecentesca alle porte di Torino.'
        }
      ]
    }
  },

  data() {
    return {
      title: 'Annamaria & Claudio',
      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>
