<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      dress:
      <a
        href="https://www.crusz.de/"
        target="_blank"
        class="has-text-weight-bold"
        >Crusz Berlin</a
      ><br />
      location:
      <a
        href="https://www.marriott.it/hotels/travel/vcejw-jw-marriott-venice-resort-and-spa/"
        target="_blank"
        class="has-text-weight-bold"
        >JW Marriott Venice Resort & Spa</a
      ><br />
      wedding planner:
      <a
        href="https://makedaweddingplanner.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Makeda</a
      ><br />
      makeup artist:
      <a
        href="https://www.letiziacordellamakeup.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Letizia Cordella</a
      ><br />
      florist:
      <a
        href="https://www.centrofiori.net/"
        target="_blank"
        class="has-text-weight-bold"
        >Centrofiori</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/annamark/mobile'
const IMAGE_COUNT = 87

export default {
  components: { Story },

  data() {
    return {
      title: 'Anna & Mark',
      description: {
        en: 'The elegance of Venice meets the Nordic charm of Budapest. From Hungary to Italy to say yes in front of the lagoon of the most romantic city in the world.',
        it: "L'eleganza di Venezia incontra il fascino nordico di Budapest. Dall'Ungheria in Italia per dire sì davanti alla laguna della città più romantica del mondo.",
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/61.jpg`,
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
