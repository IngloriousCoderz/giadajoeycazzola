<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      abito da sposa:
      <a
        href="https://www.ideasposatorino.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Idea Sposa Atelier</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/montainejonathan/mobile'
const IMAGE_COUNT = 52

export default {
  components: { Story },

  data() {
    return {
      title: 'Montaine & Jonathan',
      description: {
        en: 'A couple of dancers meet and fall in love in the streets of Paris.',
        it: 'Una coppia di ballerini si conosce e si innamora fra le vie di Parigi.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/22.jpg`,
      url: `https://www.giadajoeycazzola.com/${BASE_PATH.replace(
        /\/mobile/g,
        ''
      )}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT,
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description[this.$i18n.locale],
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description[this.$i18n.locale],
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.url,
        },
      ],
    }
  },
}
</script>
