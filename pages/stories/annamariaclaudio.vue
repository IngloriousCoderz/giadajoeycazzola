<template>
  <story
    :title="title"
    :description="description"
    :type="type"
    :base-path="basePath"
    :image-count="imageCount"
  />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/annamariaclaudio'
const IMAGE_COUNT = 50

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
          content: this.type
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
      title: 'Annamaria & Claudio',
      description:
        'Cornice della romantica storia di Annamaria e Claudio è il castello Saffarone, suggestiva dimora settecentesca alle porte di Torino.',
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
