<template>
  <story
    :title="title"
    :base-path="basePath"
    :image-count="imageCount"
    type="png"
  >
    <p class="is-size-7">
      wedding planner:
      <a
        href="https://www.chiaraviarisio.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Chiara Virisio</a
      ><br />
      florist:
      <a
        href="https://www.dufourfiori.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Dufour</a
      ><br />
      catering:
      <a
        href="https://www.laciaudeltornavento.it/"
        target="_blank"
        class="has-text-weight-bold"
        >La Ciau del Tornavento</a
      ><br />
      rental:
      <a
        href="https://modorent.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Modo Rent</a
      ><br />
      dj:
      <a
        href="https://www.instagram.com/noire_eventsolutions/"
        target="_blank"
        class="has-text-weight-bold"
        >Noiresolutions</a
      ><br />
      stationery:
      <a
        href="https://www.moguwedding.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Moguwedding</a
      ><br />
      bride dress:
      <a
        href="https://jennypackham.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Jenny Packham</a
      ><br />
      atelier:
      <a
        href="https://www.antonelladelbrusco.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Antonella Brusco</a
      ><br />
      groom suite:
      <a href="https://www.ysl.it/" target="_blank" class="has-text-weight-bold"
        >Ralph Lauren</a
      >
      //
      <a
        href="https://www.angelominetti.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Atelier Minetti</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/jessicafilippo'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Jessica & Filippo',
      description: {
        en: 'Is there a better place than home to celebrate your wedding? In the splendid villa of the spouses, in the heart of Monferrato, an elegant, refined wedding surrounded by an avalanche of affection!',
        it: 'Esiste un luogo migliore di casa per festeggiare il proprio matrimonio? Nella splendida villa degli sposi, nel cuore del Monferrato, un matrimonio elegante, raffinato e circondato da una valanga di affetto!',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/81.png`,
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
