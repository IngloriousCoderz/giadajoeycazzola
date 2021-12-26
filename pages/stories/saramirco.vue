<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      dress:
      <a
        href="https://www.tullesposatorino.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Tulle Sposa Atelier</a
      >
      <br />location:
      <a
        href="https://www.antico-opificio.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Antico Opificio</a
      >
      <br />makeup artist:
      <a
        href="https://www.facebook.com/saraaresemua/"
        target="_blank"
        class="has-text-weight-bold"
        >Sara Arese Make Up Artist</a
      >
      <br />hair stylist:
      <a
        href="https://www.facebook.com/IdaECParrucchieri/"
        target="_blank"
        class="has-text-weight-bold"
        >Ida e C Parrucchieri</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/saramirco/mobile'
const IMAGE_COUNT = 73

export default {
  components: { Story },

  data() {
    return {
      title: 'Sara & Mirco',
      description: {
        en: "A modern, unconventional, industrial-style wedding that feels like it's set in the USA.",
        it: 'Un matrimonio moderno, non convenzionale e in stile industriale che sembra ambientato negli USA.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/73.jpg`,
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
