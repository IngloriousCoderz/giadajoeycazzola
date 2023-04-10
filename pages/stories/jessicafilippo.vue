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
        href="https://www.chiaraviarisio.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Chiara Virisio</a
      ><br />
      florist:
      <a
        href="https://www.dufourfiori.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Dufour</a
      ><br />
      catering:
      <a
        href="https://www.laciaudeltornavento.it/"
        target="_blank"
        class="has-text-weight-bold"
        >La Ciau del Tornavento</a
      ><br />
      rental:
      <a
        href="https://modorent.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Modo Rent</a
      ><br />
      dj:
      <a
        href="https://www.instagram.com/noire_eventsolutions/"
        target="_blank"
        class="has-text-weight-bold"
        >Noiresolutions</a
      ><br />
      stationery:
      <a
        href="https://www.moguwedding.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Moguwedding</a
      ><br />
      bride dress:
      <a
        href="https://jennypackham.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Jenny Packham</a
      ><br />
      atelier:
      <a
        href="https://www.antonelladelbrusco.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Antonella Brusco</a
      ><br />
      groom suite:
      <a href="https://www.ysl.it/" target="_blank" class="has-text-weight-bold"
        >Ralph Lauren</a
      >
      //
      <a
        href="https://www.angelominetti.it/"
        target="_blank"
        class="has-text-weight-bold"
        >Atelier Minetti</a
      >
    </p>

    <div v-html="body[$i18n.locale]" />
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/jessicafilippo'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Jessica & Filippo',
      description: {
        en: 'Is there a better place than home to celebrate your wedding? In the splendid villa of the spouses, in the heart of Monferrato, an elegant, refined wedding surrounded by an avalanche of affection!',
        it: 'Esiste un luogo migliore di casa per festeggiare il proprio matrimonio? Nella splendida villa degli sposi, nel cuore del Monferrato, un matrimonio elegante, raffinato e circondato da una valanga di affetto!',
      },
      body: {
        en: `<p>WOW!!!</p>
<p>I could say a thousand things about Jessica and Filippo's wedding but I can't think of a more
exhaustive word to describe this event.</p>
<p>A rare elegance characterizes every nuance of these two guys who have chosen their villa in
Occimiano (Alessandria), in the heart of Monferrato, to celebrate their union.</p>
<p>As soon as I arrive, I am pleasantly surprised to discover all the spaces of this house. The
beautiful transparent staircase stands out in the large living room and takes me to the upper
floor where huge windows allow you to admire the golden hills from all angles.</p>
<p>White walls widen the spaces even more and I finally enter Jessica's room as she is getting
ready. We embrace and I congratulate her: what a crazy taste!</p>
<p>Even the dress and the bouquet fully reflect the refined tastes and so, after a few shots of
the bride, I go to greet Filippo who has just arrived aboard a beautiful Harley Davidson, with
which he will also go to church.</p>
<p>The small and delightful church seems to have come out of a painting and the wonderful
blue sky in which the cypress-lined driveway stands out makes you immediately jump into
my beloved Tuscany.</p>
<p>Enchanted by everything, I immortalize beauty and emotions as much as I can. A few shots
also by the pool could not be missing and then everyone for dinner under the tensile
structure set up for the occasion in the garden of the villa. An imperial table surrounded by
round tables, and then lights, white flowers did the rest, making this scenario extremely
classy.</p>
<p>The warmth of the guests accompanies the spouses until late at night, with wild dancing on
the mirror-effect stage set up in another area of the garden. A real charm!</p>`,
        it: `<p>WOW!!!</p>
<p>Potrei dire mille cose sul matrimonio di Jessica e Filippo ma non mi viene in mente parola
più esaustiva per descrivere questo evento.</p>
<p>Un'eleganza rara caratterizza ogni sfumatura di questi due ragazzi che hanno scelto la
propria villa a Occimiano (Alessandria), nel cuore del Monferrato, per festeggiare la loro
unione.</p>
<p>Appena arrivata rimango piacevolmente colpita nello scoprire tutti gli spazi di questa casa.
La bellissima scala trasparente spicca nel grosso salone e mi porta al piano superiore dove
immense vetrate permettono di ammirare le colline dorate da tutte le angolazioni.</p>
<p>Pareti bianche allargano ancora di più gli spazi e finalmente entro in camera di Jessica che
si sta preparando. Ci abbracciamo e le faccio i complimenti: che gusto pazzesco!</p>
<p>Anche l'abito e il bouquet rispecchiano appieno i gusti raffinati e così, dopo qualche scatto
alla sposa, vado a salutare Filippo che è appena arrivato a bordo di una bellissima Harley
Davidson, con cui si dirigerà anche in chiesa.</p>
<p>La chiesetta, piccola e deliziosa, sembra uscita da un quadro e il meraviglioso cielo azzurro
in cui svetta il vialetto di cipressi fa fare subito un salto nella mia amata Toscana.</p>
<p>Incantata da tutto quanto, immortalo a più non posso bellezza ed emozioni. Qualche scatto
anche a bordo piscina non poteva mancare e poi tutti a cena sotto la tensostruttura allestita
per l'occasione nel giardino della villa. Un tavolo imperiale circondato da tavoli tondi, e poi
luci, fiori bianchi hanno fatto il resto, rendendo questo scenario estremamente di classe.</p>
<p>Il calore degli invitati accompagna gli sposi fino a notte fonda, con danze sfrenate sul palco
a effetto specchio allestito in un'altra area del giardino. Un vero incanto!</p>`,
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/81.png`,
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
