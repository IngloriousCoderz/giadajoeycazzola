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
        href="https://www.cantineluzi.com/"
        target="_blank"
        class="has-text-weight-bold"
      >Cantine Luzi Donadei</a>
      <br />wedding planner:
      <a
        href="https://www.matrimonio.com/wedding-planner/manuela-mantovani-weddings-&-special-events--e167814"
        target="_blank"
        class="has-text-weight-bold"
      >Manuela Mantovani</a> &
      <a
        href="https://www.matrimonio.com/wedding-planner/martina-filomena--e167432"
        target="_blank"
        class="has-text-weight-bold"
      >Martina Filomena</a>
      <br />fiori:
      <a
        href="http://www.maisondesfleurs.it/"
        target="_blank"
        class="has-text-weight-bold"
      >Maison des fleurs</a>
      <br />abito da sposa:
      <a
        href="https://www.matrimonio.com/abiti-da-sposa/stefania-e-le-sue-spose--e152389"
        target="_blank"
        class="has-text-weight-bold"
      >Stefania e le sue spose</a>
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/vittorialuigi'
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
      title: 'Vittoria & Luigi',
      description:
        'La bellezza e l’eleganza di questa coppia ha reso senza dubbio questo matrimonio una vera favola. Vittoria e Luigi, questa è la loro storia. Le parole non servono, lascio parlare le immagini.',
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
