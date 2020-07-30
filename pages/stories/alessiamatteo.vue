<template>
  <story :title="title" :description="description" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="https://www.villabria.com"
        target="_blank"
        class="has-text-weight-bold"
      >Villa Bria</a>
      <br />abito da sposa:
      <a
        href="https://www.pronovias.com/"
        target="_blank"
        class="has-text-weight-bold"
      >Pronovias</a>
      <br />fiorista:
      <a
        href="https://www.ifioridisaradue.it"
        target="_blank"
        class="has-text-weight-bold"
      >I Fiori Di Sara Due</a>
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/alessiamatteo/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

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
      title: 'Alessia & Matteo',
      description:
        'Siamo in tre nella sala di Villa Bria ma in realtà intorno ad Alessia e Matteo c’è il silenzio di chi non ha bisogno di parlare per trasmettere ciò che sente. Dico sempre alle mie coppie di godersi quel momento per celebrare l’amore. Loro l’hanno fatto benissimo.',
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/96.jpg`,
      url: `https://www.giadajoeycazzola.com/${BASE_PATH.replace(
        /\/mobile/g,
        ''
      )}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
