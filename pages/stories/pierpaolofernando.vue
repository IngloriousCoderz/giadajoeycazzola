<template>
  <story
    :title="title"
    :description="description"
    :base-path="basePath"
    :image-count="imageCount"
    :video="video"
  >
    <p class="is-size-7">
      location:
      <a
        href="https://www.facebook.com/principidipiemontetorino/"
        target="_blank"
        class="has-text-weight-bold"
        >Principi di Piemonte</a
      >
      <br />abiti:
      <a
        href="https://www.carlopignatelli.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Carlo Pignatelli</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/pierpaolofernando'
const IMAGE_COUNT = 41

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
      title: 'Pierpaolo & Fernando',
      description:
        'Una caotica ma affascinante Torino fa da sfondo al matrimonio di Pierpaolo e Fernando: una coppia bellissima e molto complice che ha emozionato tutti con la forza della loro unione.',
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/01.jpg`,
      url: `https://www.giadajoeycazzola.com/${BASE_PATH.replace(
        /\/mobile/g,
        ''
      )}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT,
      video: 'https://player.vimeo.com/video/273849529?portrait=0'
    }
  }
}
</script>
