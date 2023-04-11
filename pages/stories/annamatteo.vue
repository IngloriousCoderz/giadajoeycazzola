<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="http://www.villascheibler.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Villa Scheibler</a
      ><br />
      dress:
      <a
        href="https://www.pronovias.com/it/abiti-sposa-milano"
        target="_blank"
        class="has-text-weight-bold"
        >Pronovias Milano</a
      ><br />
      catering:
      <a
        href="http://www.topparties.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Top Parties</a
      ><br />
      florist:
      <a
        href="http://www.fagnanifiori.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Fagnani Fiori</a
      ><br />
      accessories:
      <a
        href="https://stylishbrideaccs.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Stylish bride accs</a
      ><br />
      entertainment:
      <a
        href="https://www.instagram.com/ondasonora_events/"
        target="_blank"
        class="has-text-weight-bold"
        >Ondasonora Events</a
      ><br />
      makeup artist:
      <a
        href="https://www.instagram.com/lbs.anna/"
        target="_blank"
        class="has-text-weight-bold"
        >Anna Poliakova</a
      ><br />
      jewelry:
      <a
        href="https://www.oreficeriamollica.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Oreficeria Mollica</a
      ><br />
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/annamatteo/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Anna & Matteo',
      description: {
        en: 'A fiveteenth-century residence on the outskirts of Milan. A very sweet couple and authentic emotions.',
        it: 'Una dimora cinquecentesca a due passi da Milano, una coppia dolcissima e tante emozioni autentiche. Cosa volere di più?',
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/39.jpg`,
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
