<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">Portfolio</h1>

    <div class="content has-text-centered">
      <blockquote>
        &ldquo;La fotografia è una cosa semplice, a condizione di avere qualcosa da dire.&rdquo;
        <footer>
          &mdash; <cite>Mario Giacomelli</cite>
        </footer>
      </blockquote>
    </div>

    <div class="content has-text-centered">
      <p>
        Una raccolta di foto che ho scattato in diversi matrimoni. Per vedere le gallery complete clicca <nuxt-link :to="{name: 'stories'}" class="has-text-weight-bold">qui</nuxt-link>.
      </p>
    </div>

    <lightbox :images="images"></lightbox>
  </section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

const BASE_PATH = '/images/portfolio'
const IMAGE_COUNT = 96

export default {
  components: { Lightbox },

  head() {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Raccolta dei migliori lavori di reportage di matrimonio realizzati in location bellissime per matrimoni a Torino, Langhe, Piemonte, Toscana, Puglia, Italia.'
        }
      ]
    }
  },

  data() {
    return {
      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>
