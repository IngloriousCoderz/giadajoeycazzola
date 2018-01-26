<template>
<section class="container">
  <lightbox :title="title" :images="images"></lightbox>
</section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

const BASE_PATH = '/images/stories/martinasalvador'
const IMAGE_COUNT = 92

export default {
  scrollToTop: true,

  components: { Lightbox },

  head() {
    return {
      title: 'Martina & Salvador',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Magico matrimonio tra i vigneti dell\'astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all\'amore di Martina e Salvador.'
        }
      ]
    }
  },

  data() {
    return {
      title: 'Martina & Salvador',
      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>
