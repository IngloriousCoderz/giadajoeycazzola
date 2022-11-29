<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount" />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/sunheederek/mobile'
const IMAGE_COUNT = 69

export default {
  components: { Story },

  data() {
    return {
      title: 'Sunhee & Derek',
      description: {
        en: "What's the biggest craziest thing you've ever done? Make a marriage proposal and, in less than 24 hours, take a plane and fly from Texas to the Dolomites for a romantic elopement and to celebrate your love in a small mountain chapel!",
        it: "Qual è la pazzia più grande che tu abbia mai fatto? Fare una proposta di matrimonio e, in meno di 24 ore, prendere un aereo e volare dal Texas alle Dolomiti per una romantica fuga d'amore e per celebrare in una piccola cappella di montagna le proprie nozze!",
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/49.jpg`,
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
