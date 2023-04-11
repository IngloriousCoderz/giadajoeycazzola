<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      wedding planner:
      <a
        href="https://www.instagram.com/paolacasettaweddingplanner/"
        target="_blank"
        class="has-text-weight-bold"
        >Paola Casetta Wedding Planner</a
      ><br />
      location:
      <a
        href="https://www.instagram.com/castello_di_villar_dora/"
        target="_blank"
        class="has-text-weight-bold"
        >Castello di Villar Dora</a
      ><br />
      catering:
      <a
        href="https://www.instagram.com/strattatorino/"
        target="_blank"
        class="has-text-weight-bold"
        >Stratta Torino</a
      ><br />
      wedding stationery:
      <a
        href="https://www.instagram.com/mogu.wedding/"
        target="_blank"
        class="has-text-weight-bold"
        >Mogu Wedding</a
      ><br />
      bridal headpieces:
      <a
        href="https://www.instagram.com/cristinasignorina/"
        target="_blank"
        class="has-text-weight-bold"
        >Cristina Signorina</a
      ><br />
      makeup artist:
      <a
        href="https://www.instagram.com/monicacenamua/"
        target="_blank"
        class="has-text-weight-bold"
        >Monica Cena Mua</a
      ><br />
      hair stylist:
      <a
        href="https://www.instagram.com/ganna_hairstyle/"
        target="_blank"
        class="has-text-weight-bold"
        >Ganna Hairstyle</a
      ><br />
      florist:
      <a
        href="https://www.instagram.com/eventi_floral_designers/"
        target="_blank"
        class="has-text-weight-bold"
        >Eventi di Mara e Mauro</a
      ><br />
      bride dress:
      <a
        href="https://www.instagram.com/ideasposa_atelier/"
        target="_blank"
        class="has-text-weight-bold"
        >Idea Sposa Atelier</a
      ><br />
      groom suite:
      <a
        href="https://www.instagram.com/atelierglamoursposi/"
        target="_blank"
        class="has-text-weight-bold"
        >Atelier Glamour Sposi</a
      ><br />
      bridesmaids dress:
      <a
        href="https://www.instagram.com/amaranto_atelier/"
        target="_blank"
        class="has-text-weight-bold"
        >Amaranto Atelier Antonella Ciancio</a
      ><br />
      jewels:
      <a
        href="https://www.instagram.com/efjewelrydesign/"
        target="_blank"
        class="has-text-weight-bold"
        >Federica Pedretti</a
      ><br />
      lights:
      <a
        href="https://www.instagram.com/lightshade___/"
        target="_blank"
        class="has-text-weight-bold"
        >Luca Boneri</a
      ><br />
      ceremony:
      <a
        href="https://www.instagram.com/unconventional_ceremony/"
        target="_blank"
        class="has-text-weight-bold"
        >Unconventional Ceremony</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/francescamarco/mobile'
const IMAGE_COUNT = 62

export default {
  components: { Story },

  data() {
    return {
      title: 'Francesca & Marco',
      description: {
        en: 'When dreams and reality come together to create a cozy, intimate but spectacular wedding.',
        it: 'Quando sogno e realtà si fondono per dare vita a un matrimonio raccolto, intimo ma spettacolare.',
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/01.jpg`,
      url: `https://giadajoeycazzola.com/${BASE_PATH.replace(
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
