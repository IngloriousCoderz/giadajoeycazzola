<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="http://www.villafiorita.net"
        target="_blank"
        class="has-text-weight-bold"
        >Villa Fiorita</a
      >
      <br />wedding planner:
      <a
        href="http://www.organizzazionematrimoniotorino.it"
        target="_blank"
        class="has-text-weight-bold"
        >Manuela Mantovani - Martina Filomena</a
      >
      <br />abito da sposa:
      <a
        href="http://www.whitelesposetorino.com"
        target="_blank"
        class="has-text-weight-bold"
        >White Le Spose Torino</a
      >
      <br />fiorista:
      <a
        href="https://www.danielledesign.it"
        target="_blank"
        class="has-text-weight-bold"
        >Danielle Wedding Design</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/elenaluca/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Elena & Luca',
      description: {
        en:
          'A young and colorful wedding, a villa in the countryside and many friends. What else?',
        it:
          'L’aria è frizzante, si percepisce l’affetto sincero degli invitati. È una bellissima festa. Elena e Luca scelgono Villa Fiorita e in questa location immersa nel verde creiamo scatti di vero e puro reportage.'
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/59.jpg`,
      url: `https://www.giadajoeycazzola.com/${BASE_PATH.replace(
        /\/mobile/g,
        ''
      )}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description[this.$i18n.locale]
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description[this.$i18n.locale]
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
  }
}
</script>
