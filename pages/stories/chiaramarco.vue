<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      dress:
      <a
        href="https://www.ladymilu.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Lady Mi.Lù.</a
      ><br />
      location:
      <a
        href="https://www.turinpalacehotel.com/it/hotel-torino-centro/1-0.html"
        target="_blank"
        class="has-text-weight-bold"
        >Turin Palace Hotel</a
      ><br />
      music:
      <a
        href="https://matrimonioeasy.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Easy Tempo Set</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/chiaramarco/mobile'
const IMAGE_COUNT = 65

export default {
  components: { Story },

  data() {
    return {
      title: 'Chiara & Marco',
      description: {
        en: 'Two architects with a passion for art and a reportage in the heart of one of the most chaotic markets in Italy.',
        it: 'Torino non è mai stata bella come questa sera: Chiara e Marco, nel cuore della città, hanno scelto di dirsi “sì” per sempre.',
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/50.jpg`,
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
