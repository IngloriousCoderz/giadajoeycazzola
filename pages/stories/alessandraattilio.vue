<template>
  <story :title="title" :description="description" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="http://tamburnin.it/"
        target="_blank"
        class="has-text-weight-bold"
      >Tenuta Tamburnin</a>
      <br />abito da sposa:
      <a
        href="https://www.atelier-eme.it/atelier-torino/?IDstore=23"
        target="_blank"
        class="has-text-weight-bold"
      >Atelier Emé Torino</a>
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/alessandraattilio/mobile'
const IMAGE_COUNT = 93

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
      title: 'Alessandra & Attilio',
      description:
        '“Gli incontri più importanti sono già combinati dalle anime prima che i corpi si vedano.” Come quello tra Alessandra e Attilio. Una coppia così rende splendido qualsiasi contesto.',
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/63.jpg`,
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
