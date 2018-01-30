<template>
<section class="container">
  <lightbox :title="title" :images="images"></lightbox>
</section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

const BASE_PATH = '/images/stories/cassandracarlo'
const IMAGE_COUNT = 73

export default {
  scrollToTop: true,

  components: { Lightbox },

  head() {
    return {
      title: 'Cassandra & Carlo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Amici, amanti e innamoratissimi. Cassandra e Carlo hanno scelto l\'atmosfera incantevole che si respira al castello di Oviglio per promettersi amore eterno.'
        }
      ]
    }
  },

  data() {
    return {
      title: 'Cassandra & Carlo',
      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>
