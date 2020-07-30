<template>
  <story
    :title="title"
    :description="description"
    :type="type"
    :base-path="basePath"
    :image-count="imageCount"
  >
    <p class="is-size-7">
      floral designer:
      <a
        href="https://carolinacarbone.it/"
        target="_blank"
        class="has-text-weight-bold"
      >Carolina Carbone</a>
      <br />dress:
      <a
        href="https://linktr.ee/moreabitidasposa"
        target="_blank"
        class="has-text-weight-bold"
      >MORE</a>
      <br />atelier:
      <a
        href="https://www.merrymeroma.com/"
        target="_blank"
        class="has-text-weight-bold"
      >Merry Me Roma</a>
      <br />hair accessory:
      <a
        href="https://www.guineverevines.com/"
        target="_blank"
        class="has-text-weight-bold"
      >Guinevere Vines</a>
      <br />makeup artist:
      <a
        href="https://www.divasmakeup.it/"
        target="_blank"
        class="has-text-weight-bold"
      >DivaS' MakeUp</a>
      <br />shoes:
      <a
        href="https://www.annielshop.com/"
        target="_blank"
        class="has-text-weight-bold"
      >Anniel</a>
      <br />video:
      <a href="https://www.913art.com/" target="_blank" class="has-text-weight-bold">913Art</a>
      <br />model:
      <a
        href="https://www.instagram.com/elisaablasi/"
        target="_blank"
        class="has-text-weight-bold"
      >Elisa Blasi</a>
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/elisajacopo/mobile'
const IMAGE_COUNT = 41

export default {
  components: { Story },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.url
        }
      ]
    }
  },

  data() {
    return {
      title: 'Elisa & Jacopo',
      description:
        'Cose da fare almeno una volta nella vita: perdersi tra le vie di Trastevere, proseguire verso piazza San Pietro e respirare bellezza.',
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/31.jpg`,
      url: `https://www.giadajoeycazzola.com/${BASE_PATH.replace(
        /\/mobile/g,
        ''
      )}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
