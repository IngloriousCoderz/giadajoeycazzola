<template>
  <story
    :title="title"
    :base-path="basePath"
    :image-count="imageCount"
    type="png"
  >
    <div v-html="body[$i18n.locale]" />
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/yanaomri'
const IMAGE_COUNT = 65

export default {
  components: { Story },

  data() {
    return {
      title: 'Yana & Omri',
      description: {
        en: 'In the heart of Puglia, between the Mandurian countryside with its beautiful Potenti farm, the trulli of Alberobello and the suggestive Polignano, a reportage worthy of the most romantic love story is born: the one to be lived in Italy, the undisputed queen of charm and traditions. Meet Yana and Omri.',
        it: "Nel cuore della Puglia, tra la campagna manduriana con la sua bellissima masseria Potenti, i trulli di Alberobello e la suggestiva Polignano nasce un reportage degno della più romantica storia d'amore: quella da vivere in Italia, regina indiscussa di fascino e tradizioni. Ecco a voi Yana e Omri.",
      },
      body: {
        en: `<p>Puglia stole my heart.</p>
<p>If you don't know where to get married, I have no doubts: I recommend southern Italy!</p>
<p>And Puglia in particular, which has expressed its full potential in recent years.</p>
<p>Land of the sea, good food, expanses of olive trees, farms that seem to belong to another era.</p>
<p>Falling in love in Puglia is easy and if you already are, like Yana and Omri, you will go home even more infatuated than before!</p>
<p>This story unfolds between Polignano with a photo session on the beach, Alberobello for a romantic walk and to end the day, an aperitif at sunset in the magnificent Masseria Potenti in Manduria.</p>
<p>The day after an intimate ceremony, to finally celebrate this beautiful union.</p>`,
        it: `<p>La Puglia mi ha rubato il cuore.</p>
<p>Se non sapete dove sposarvi, non ho dubbi: vi consiglio il sud Italia!</p>
E in particolar modo la Puglia che negli ultimi anni ha espresso tutto il suo potenziale.
<p>Terra di mare, buon cibo, distese di ulivi, masserie che sembrano appartenere a un'altra epoca.</p>
<p>Innamorarsi in puglia è facile e se lo siete già, come Yana e Omri, tornerete a casa ancora più infatuati di prima!</p>
<p>Questa storia si snoda tra Polignano con una sessione di foto in spiaggia, Alberobello per una passeggiata romantica e per concludere la giornata, un aperitivo al tramonto nella magnifica Masseria Potenti a Manduria.</p>
<p>Il giorno dopo una cerimonia intima, per celebrare finalmente questa bellissima unione.</p>`,
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/64.png`,
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
