<template>
  <story
    :title="title"
    :description="description"
    :type="type"
    :base-path="basePath"
    :image-count="imageCount"
  >
    <p class="is-size-7">
      location:
      <a
        href="http://www.lafederica.it/"
        target="_blank"
        class="has-text-weight-bold"
      >La Federica</a>
      <br />abito da sposa:
      <a
        href="http://www.whitelesposetorino.com/"
        target="_blank"
        class="has-text-weight-bold"
      >White Le Spose Torino</a>
      <br />abito da sposo:
      <a
        href="https://www.carlopignatelli.com/"
        target="_blank"
        class="has-text-weight-bold"
      >Carlo Pignatelli</a>
      <br />musica:
      <a
        href="http://www.ambaradanpartyband.it/"
        target="_blank"
        class="has-text-weight-bold"
      >Ambaradan Party Band</a>
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/irenedavide/mobile'
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
      title: 'Irene & Davide',
      description:
        "Fotografare Irene e Davide è stato un privilegio: mi sono divertita tantissimo! Sono una coppia genuina e l'empatia tra di noi era davvero molto forte. Location e allestimenti eccezionali hanno fatto il resto.",
      type: 'website',
      url: `https://www.giadajoeycazzola.com/${BASE_PATH.replace(/\/mobile/g, '')}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
