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

const BASE_PATH = 'stories/danielamichele'
const IMAGE_COUNT = 91

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
      title: 'Daniela & Michele',
      description:
        'Immersa nel verde delle colline canavesi sorge Villa Merlin, un luogo raffinato ma semplice proprio come Daniela e Michele.',
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/53.jpg`,
      url: `https://www.giadajoeycazzola.com/${BASE_PATH.replace(/\/mobile/g, '')}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
