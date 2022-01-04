<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount" />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/martinaalessandro/mobile'
const IMAGE_COUNT = 69

export default {
  components: { Story },

  data() {
    return {
      title: 'Martina & Alessandro',
      description: {
        en: 'Simplicity, for me, wins over everything. Martina and Alessandro chose an intimate party in the Piedmont countryside to celebrate their pure and sincere love.',
        it: 'La semplicità, per me, vince su tutto. Martina e Alessandro hanno scelto una festa intima nella campagna piemontese per celebrare il loro amore puro e sincero.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/36.jpg`,
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
