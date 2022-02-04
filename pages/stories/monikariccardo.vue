<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="https://www.marriott.com/en-us/hotels/lisdr-praia-del-rey-marriott-golf-and-beach-resort/"
        target="_blank"
        class="has-text-weight-bold"
        >Marriott Praia D'El Rey</a
      ><br />
      dress:
      <a
        href="https://www.atelier-eme.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Atelier Emé</a
      ><br />
      makeup artist:
      <a
        href="https://www.instagram.com/catarinaduque.mua/"
        target="_blank"
        class="has-text-weight-bold"
        >Catarina Duque</a
      >
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/monikariccardo/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Monika & Riccardo',
      description: {
        en: 'A romantic and modern overseas elopement, Monika and Rick have chosen a beautiful resort in Portugal to celebrate their love.',
        it: 'Un romantico e moderno elopement oltreoceano, Monika e Rick hanno scelto un bellissimo resort in Portogallo per celebrare il loro amore',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/99.jpg`,
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
