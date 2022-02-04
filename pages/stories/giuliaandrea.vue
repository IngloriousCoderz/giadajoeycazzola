<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="https://www.castellosansebastiano.it"
        target="_blank"
        class="has-text-weight-bold"
        >Castello di San Sebastiano</a
      ><br />
      dress:
      <a
        href="https://www.lesposediamelie.com"
        target="_blank"
        class="has-text-weight-bold"
        >Le spose di Amélie</a
      ><br />
      makeup artist:
      <a
        href="https://www.monicacena.com/make-up-artist/"
        target="_blank"
        class="has-text-weight-bold"
        >Monica Cena</a
      ><br />
      florist:
      <a
        href="http://www.eventifiori.it"
        target="_blank"
        class="has-text-weight-bold"
        >Eventi Fiori</a
      ><br />
      hair accessories:
      <a
        href="https://cristinasignorina.it/index.html"
        target="_blank"
        class="has-text-weight-bold"
        >Cristina Signorina</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/giuliaandrea/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Giulia & Andrea',
      description: {
        en: 'Giulia and Andrea have lived in London for many years but have chosen a Piedmontese castle to swear eternal love. Elegance, nature and passion: these are the key words of their wedding.',
        it: 'Giulia e Andrea abitano a Londra da tanti anni ma hanno scelto un castello piemontese per giurarsi amore eterno. Eleganza, natura e passione: queste le parole chiave del loro matrimonio.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/90.jpg`,
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
