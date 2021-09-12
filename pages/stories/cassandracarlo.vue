<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount" />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/cassandracarlo'
const IMAGE_COUNT = 73

export default {
  components: { Story },

  data() {
    return {
      title: 'Cassandra & Carlo',
      description: {
        en: 'A sweet yes in a fairytale location!',
        it:
          'Amici, amanti e innamoratissimi. Cassandra e Carlo hanno scelto l’atmosfera incantevole che si respira al castello di Oviglio per promettersi amore eterno.'
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/03.jpg`,
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
