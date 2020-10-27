<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">
      Portfolio
    </h1>

    <div class="content has-text-centered">
      <blockquote>
        &ldquo;La fotografia è una cosa semplice, a condizione di avere qualcosa
        da dire.&rdquo;
        <footer>
          &mdash;
          <cite>Mario Giacomelli</cite>
        </footer>
      </blockquote>
    </div>

    <div class="content has-text-centered">
      <p>
        Una raccolta di foto e video realizzati in diversi matrimoni. Per vedere
        le gallery complete clicca
        <nuxt-link :to="{ name: 'stories' }" class="has-text-weight-bold">
          qui </nuxt-link
        >.
      </p>
    </div>

    <h2 class="is-size-2 has-text-centered">
      Foto
    </h2>

    <lightbox :images="images" />

    <h2 class="is-size-2 has-text-centered">
      Video
    </h2>

    <lightbox :images="videos" />
  </section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

const BASE_PATH = '/images/portfolio'
const IMAGE_COUNT = 84

export default {
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
      title: 'Portfolio',
      description:
        'Raccolta dei migliori lavori di reportage di matrimonio realizzati in location bellissime per matrimoni a Torino, Langhe, Piemonte, Roma, Toscana, Puglia, Italia.',
      url: 'https://www.giadajoeycazzola.com/portfolio/',
      image: 'https://www.giadajoeycazzola.com/images/portfolio/01.jpg',

      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/mobile/${zpad(index + 1)}.jpg`
      })),

      videos: [
        // http://vimeo.com/api/v2/video/286857992.xml
        {
          id: 1,
          src: 'https://player.vimeo.com/video/389582661',
          thumb: 'https://i.vimeocdn.com/video/853298583_640.jpg'
        },
        {
          id: 2,
          src: 'https://player.vimeo.com/video/351338696',
          thumb: 'https://i.vimeocdn.com/video/802901548_640.jpg'
        },
        {
          id: 3,
          src: 'https://player.vimeo.com/video/286857992',
          thumb: 'https://i.vimeocdn.com/video/721857555_640.jpg'
        },
        {
          id: 4,
          src: 'https://player.vimeo.com/video/273849529',
          thumb: 'https://i.vimeocdn.com/video/705748390_640.jpg'
        },
        {
          id: 5,
          src: 'https://player.vimeo.com/video/319229237',
          thumb: 'https://i.vimeocdn.com/video/761746985_640.jpg'
        }
      ]
    }
  },

  mounted() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.images.forEach(
        image => (image.src = image.src.replace(/\/mobile\//g, '/'))
      )
    }
  }
}
</script>
