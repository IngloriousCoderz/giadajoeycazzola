<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">
      {{ $t('portfolio.title') }}
    </h1>

    <div class="content has-text-centered">
      <blockquote>
        &ldquo;{{ $t('portfolio.quote') }}&rdquo;
        <footer>
          &mdash;
          <cite>Mario Giacomelli</cite>
        </footer>
      </blockquote>
    </div>

    <div class="content has-text-centered">
      <p>
        {{ $t('portfolio.body') }}
        <nuxt-link :to="localePath('stories')" class="has-text-weight-bold">
          {{ $t('portfolio.body.link') }}</nuxt-link
        >.
      </p>
    </div>

    <h2 class="is-size-2 has-text-centered">
      {{ $t('portfolio.photos') }}
    </h2>

    <lightbox :images="images" />

    <h2 class="is-size-2 has-text-centered">
      {{ $t('portfolio.videos') }}
    </h2>

    <lightbox :images="videos" />
  </section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

const BASE_PATH = '/images/portfolio'
const IMAGE_COUNT = 96

export default {
  components: { Lightbox },

  data() {
    return {
      title: this.$i18n.t('portfolio.seo.title'),
      description: this.$i18n.t('portfolio.seo.description'),
      url: 'https://www.giadajoeycazzola.com/portfolio/',
      image: 'https://www.giadajoeycazzola.com/images/portfolio/01.jpg',

      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
        // src: `${BASE_PATH}/mobile/${zpad(index + 1)}.jpg`
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

  mounted() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.images.forEach(
        image => (image.src = image.src.replace(/\/mobile\//g, '/'))
      )
    }
  }
}
</script>
