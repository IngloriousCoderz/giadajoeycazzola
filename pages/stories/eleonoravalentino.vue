<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="https://www.sanpietrotaormina.com"
        target="_blank"
        class="has-text-weight-bold"
        >San Pietro - Taormina</a
      ><br />
      wedding planner:
      <a
        href="https://www.enjoysicilianevents.com"
        target="_blank"
        class="has-text-weight-bold"
        >Enjoy Sicilian Events</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/eleonoravalentino/mobile'
const IMAGE_COUNT = 85

export default {
  components: { Story },

  data() {
    return {
      title: 'Eleonora & Valentino',
      description: {
        en: 'This is the story of a day of rain and tears of joy. Because even the sky of Taormina was moved by watching this splendid wedding.',
        it: 'Un matrimonio emozionante che ha fatto commuovere anche il cielo di Taormina. Eleonora e Valentino, questa è la loro storia sotto la pioggia di un’estate siciliana.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/56.jpg`,
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
