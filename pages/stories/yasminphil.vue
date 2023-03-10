<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="https://castelloilpalagio.eu/"
        target="_blank"
        class="has-text-weight-bold"
        >Castello Il Palagio</a
      ><br />
      coordinator:
      <a
        href="https://www.wedinflorence.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Wed in Florence</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/yasminphil/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Yasmin & Phil',
      description: {
        en: 'From Munich to a beautiful castle near Florence to celebrate an intimate and glamour wedding.',
        it: 'Da Monaco a un bellissimo castello vicino Firenze per celebrare un matrimonio intimo e glamour.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/67.jpg`,
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
