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
        href="https://www.kathrinebrenne.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Kathrine Brenne</a
      ><br />
      location:
      <a
        href="http://www.villaapparita.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Villa Apparita</a
      ><br />
      mua:
      <a
        href="https://www.beautyonfleekit.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Beauty On Fleek</a
      ><br />
      sax:
      <a
        href="https://www.enzobuonauriosax.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Enzo Buonaurio</a
      >
      <a
        href="https://www.instagram.com/enzobuonaurio_sax/"
        target="_blank"
        class="has-text-weight-bold"
        >(IG)</a
      ><br />
      stationery:
      <a
        href="https://shop.heypaperie.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Hey Paperie</a
      ><br />
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/signebrian'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Signe & Brian',
      description: {
        en: 'A rainy day among the gentle Tuscan slopes is the backdrop to the wedding of Signe and Brian, two wonderful guys who from Norway have chosen to get married in romantic Pienza.',
        it: 'Una giornata di pioggia tra i dolci pendii toscani fa da sfondo al matrimonio di Signe e Brian, due ragazzi meravigliosi che dalla Norvegia hanno scelto di sposarsi nella romantica Pienza.',
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/66.png`,
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
