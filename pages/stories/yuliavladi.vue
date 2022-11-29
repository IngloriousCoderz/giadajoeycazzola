<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount" />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/yuliavladi/mobile'
const IMAGE_COUNT = 40

export default {
  components: { Story },

  data() {
    return {
      title: 'Yulia & Vladi',
      description: {
        en: 'How about waking up at dawn and going dancing in a deserted Rome? This is the story of Yulia and Vladi.',
        it: "Che ne dici di svegliarci all'alba e andare a ballare in una Roma deserta? Questa è la storia di Yulia e Vladi.",
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/11.jpg`,
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
