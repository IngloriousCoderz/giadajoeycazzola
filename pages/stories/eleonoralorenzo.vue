<template>
  <story
    :title="title"
    :description="description"
    :base-path="basePath"
    :image-count="imageCount"
  >
    <p class="is-size-7">
      floral designer:
      <a
        href="https://www.giokidarredo.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Gioki D'Arredo</a
      >
      <br />dress:
      <a
        href=" https://www.pronovias.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Pronovias</a
      >
      <br />location:
      <a
        href="http://castellodirivara.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Castello di Rivara</a
      >
      <br />entertainment:
      <a
        href="http://www.danielepavignano.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Daniele Pavignano</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/eleonoralorenzo/mobile'
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
      title: 'Eleonora & Lorenzo',
      description:
        'Una coppia esplosiva. Eleonora un vulcano e Lorenzo il suo porto sicuro. Li ho amati!',
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/59.jpg`,
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
