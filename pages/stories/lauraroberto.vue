<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount" />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/lauraroberto/mobile'
const IMAGE_COUNT = 48

export default {
  components: { Story },

  data() {
    return {
      title: 'Laura & Roberto',
      description: {
        en: 'The sea in your hair, the smell of summer in your veins and bougainvillea in your eyes: and here comes Portofino, nestled between the sea and the mountains. She looks just like a cat who has made herself comfortable and plays a bit precious, aware of her beauty.',
        it: "Il mare nei capelli, l'odore dell'estate nelle vene e la bouganville negli occhi: ed ecco spuntare Portofino, accoccolata fra mare e montagna. Pare proprio una gatta che si è messa comoda e fa un po' la preziosa, consapevole della sua bellezza.",
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/20.jpg`,
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
