<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      concept and planning:
      <a
        href="http://casettawedding.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Casetta Wedding</a
      ><br />

      venue:
      <a
        href="https://realcastello.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Real Castello di Verduno</a
      ><br />

      flowers:
      <a
        href="https://ilgermogliobra.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Il Germoglio</a
      ><br />

      furniture:
      <a
        href="https://antichitaalessio.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Alessio Antichità & Home Decor</a
      ><br />

      stationery:
      <a
        href="https://www.behance.net/mariangelaiacobellis"
        target="_blank"
        class="has-text-weight-bold"
        >Mariangela Iacobellis</a
      ><br />

      bride dress:
      <a
        href="https://loretree.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Lore Tree</a
      ><br />

      groom suite:
      <a
        href="https://www.atelierglamour.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Atelier Glamour</a
      ><br />

      hmua:
      <a
        href="https://rosannacurcimakeup.wordpress.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Rosanna Curci</a
      ><br />

      cake:
      <a
        href="http://www.torteriatasti.it/"
        target="_blank"
        class="has-text-weight-bold"
        >t.asti Food Lab</a
      ><br />

      bridal headpieces:
      <a
        href="https://cristinasignorina.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Cristina Signorina</a
      ><br />
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/lauraeldar'
const IMAGE_COUNT = 83

export default {
  components: { Story },

  data() {
    return {
      title: 'Laura & Eldar',
      description: {
        en: 'An intimate ceremony immersed in a heavenly atmosphere with a Caribbean touch while being in the heart of the Langhe.',
        it: 'Una cerimonia intima immersi in un’atmosfera paradisiaca e dal tocco caraibico pur essendo nel cuore delle Langhe.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/01.jpg`,
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
