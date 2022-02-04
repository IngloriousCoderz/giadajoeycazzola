<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      fiori &amp; bouquet:
      <a
        href="https://www.facebook.com/ilpoderelerocche/"
        target="_blank"
        class="has-text-weight-bold"
        >Ilpoderelerocche</a
      ><br />
      catering:
      <a
        href="http://www.ristorantespazio7.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Spazio7</a
      ><br />
      dress:
      <a
        href="https://www.celiadragouni.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Celia Dragouni</a
      >
      -
      <a
        href="http://www.whitelesposetorino.com/"
        target="_blank"
        class="has-text-weight-bold"
        >White Le Spose</a
      ><br />
      location:
      <a
        href="http://tamburnin.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Tenuta Tamburnin</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/martinasalvador/mobile'
const IMAGE_COUNT = 92

export default {
  components: { Story },

  data() {
    return {
      title: 'Martina & Salvador',
      description: {
        en: 'Magical marriage in the vineyards of the Asti area. Breathtaking views and suggestive settings are the setting for the love of Martina and Salvador.',
        it: 'Magico matrimonio tra i vigneti dell’astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all’amore di Martina e Salvador.',
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
