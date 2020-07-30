<template>
  <story :title="title" :description="description" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      abito da sposa:
      <a
        href="https://www.ladymilu.it/"
        target="_blank"
        class="has-text-weight-bold"
      >Lady Mi.Lù.</a>
      <br />location:
      <a
        href="https://www.turinpalacehotel.com/it/hotel-torino-centro/1-0.html"
        target="_blank"
        class="has-text-weight-bold"
      >Turin Palace Hotel</a>
      <br />musica:
      <a
        href="https://matrimonioeasy.it/"
        target="_blank"
        class="has-text-weight-bold"
      >Easy Tempo Set</a>
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/chiaramarco/mobile'
const IMAGE_COUNT = 65

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
      title: 'Chiara & Marco',
      description:
        'Torino non è mai stata bella come questa sera: Chiara e Marco, nel cuore della città, hanno scelto di dirsi “sì” per sempre.',
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/50.jpg`,
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
