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
    <div v-html="body[$i18n.locale]" />
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
      body: {
        en: `<p>Choosing Tuscany to get married means making a winning move. A land full of colors,
scents, flavors. Every curve, every gentle slope, every beach of this land makes it one of a
kind.</p>
<p>Signe and Brian, from Norway, decided to get married right here, in Pienza, in the Val
d'Orcia.</p>
<p>I admit that the first time I set foot in this area, I was moved. I still remember the hair in the
wind, the window rolled down, an old Italian song on the radio and the last lights of the
sunset making the gentle slopes of this valley even more picturesque.</p>
<p>On Signe and Brian's wedding day we arrive in the early afternoon at Villa Apparita, the
location chosen for the event and we say that the weather was not exactly as we had
imagined. It poured. Bad. And it didn't seem to want to stop.</p>
<p>A few minutes were enough for me to give a totally different meaning to that pouring rain.
Entering the room of the bride who was getting ready, I see her. Radiant, smiling, a blonde
angel. And there I realized that the sun probably wasn't needed because she was already in
that room!</p>
<p>From there it was a succession of inconveniences due to the sudden changes of plans
caused by the storm and at the same time a lot of laughter, love, sharing.</p>
<p>And then I love the rain. It won't be the ideal scenario for your dream wedding but I assure
you that from a photographic point of view it is nothing short of crazy! We have created a
romantic, nostalgic but also extremely spontaneous and loving reportage.</p>
<p>The Tuscan charm has remained intact, despite the fog and clouds hiding the magnificent
colors that the Val d'Orcia is customary to give to those who travel many kilometers to come
and visit it.</p>
<p>And so, wet and cold but enthusiastic, we danced in the rain bringing home some shots that
the couple loved and that I will always carry in my heart.</p>`,
        it: `<p>Scegliere la Toscana per sposarsi significa fare una mossa vincente. Una terra ricca di
colori, profumi, sapori. Ogni curva, ogni dolce pendio, ogni spiaggia di questa terra la
rendono unica nel suo genere.</p>
<p>Signe e Brian, dalla Norvegia hanno deciso di sposarsi proprio qui, a Pienza, in Val d'Orcia.</p>
<p>Ammetto che la prima volta che ho messo piede in questa zona, mi sono commossa. Ricordo ancora i capelli al vento, il finestrino abbassato, una vecchia canzone italiana alla
radio e le ultime luci del tramonto che rendevano i dolci pendii di questa valle ancora più
pittoreschi.</p>
<p>Il giorno del matrimonio di Signe e Brian arriviamo nel primo pomeriggio a Villa Apparita, la
location scelta per l'evento e diciamo che il meteo non era esattamente come lo avevamo
immaginato. Diluviava. Di brutto. E non sembrava voler smettere.</p>
<p>Sono bastati pochi minuti per farmi dare un significato totalmente diverso a quella pioggia
battente. Entrando nella stanza della sposa che si stava preparando, la vedo. Raggiante,
sorridente, un angelo biondo. E lì ho capito che probabilmente il sole non serviva perchè era
già in quella stanza!</p>
<p>Da lì è stato un susseguirsi di disagi dovuti ai repentini cambi di programma causati dal
temporale e al contempo un sacco di risate, amore, condivisione.</p>
<p>E poi io amo la pioggia. Non sarà lo scenario ideale per il matrimonio dei sogni ma vi
assicuro che dal punti di vista fotografico è a dir poco pazzesca! Abbiamo realizzato un
reportage romantico, nostalgico ma anche estremamente spontaneo e amorevole.</p>
<p>Il fascino toscano è rimasto intatto, nonostante la nebbia e le nuvole nascondessero i
magnifici colori che la val d'Orcia è consueta regalare a chi fa tanti chilometri per venire a
visitarla.</p>
<p>E così, bagnati e infreddoliti ma entusuasti, abbiamo ballato sotto la pioggia portando a casa
degli scatti che gli sposi hanno amato e che porterò sempre nel cuore.</p>`,
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/66.png`,
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
