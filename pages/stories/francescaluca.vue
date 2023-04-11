<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="https://www.palazzolamarmora.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Palazzo La Marmora</a
      ><br />
      dress:
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

const BASE_PATH = 'stories/francescaluca/mobile'
const IMAGE_COUNT = 83

export default {
  components: { Story },

  data() {
    return {
      title: 'Francesca & Luca',
      description: {
        en: 'The dream of Francesca and Luca is crowned in one of the most historic and elegant buildings in Piedmont.',
        it: 'In uno dei palazzi più storici ed eleganti del Piemonte si corona il sogno di Francesca e Luca.',
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/54.jpg`,
      url: `https://giadajoeycazzola.com/${BASE_PATH.replace(
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
