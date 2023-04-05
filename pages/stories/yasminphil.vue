<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <p class="is-size-7">
      location:
      <a
        href="https://castelloilpalagio.eu/"
        target="_blank"
        class="has-text-weight-bold"
        >Castello Il Palagio</a
      ><br />
      coordinator:
      <a
        href="https://www.wedinflorence.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Wed in Florence</a
      >
    </p>

    <div v-html="body[$i18n.locale]" />
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/yasminphil/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Yasmin & Phil',
      description: {
        en: 'From Munich to a beautiful castle near Florence to celebrate an intimate and glamour wedding.',
        it: 'Da Monaco a un bellissimo castello vicino Firenze per celebrare un matrimonio intimo e glamour.',
      },
      body: {
        en: `<p>A message on instagram allows me to meet Yasmin and Phil who enthusiastically contact
me from Munich announcing that they were getting married in Florence and absolutely
wanted to have me as a photographer!</p>
<p>What to say? After the initial joy, we organized an appointment in Italy to define the details
and in July we are all in the beautiful Il Palagio Castle, in San Casciano in Val di Pesa, to
celebrate their union.</p>
<p>The Castle rises in the Tuscan countryside, a few kilometers from Florence. A magical place
where history and authenticity meet to give life to a location that immediately makes you fall
in love.</p>
<p>The wonderful internal courtyard hosted the dinner, where international guests can enjoy an
ancient atmosphere that allows them to savor a new aspect of the Tuscan territory. In fact,
the castle was built in the 13th century and retains the peculiar characteristics of that period
that make it unique in its kind.</p>
<p>For lovers of history (and also of series like Game of Thrones) getting married here is really
fantastic!</p>
<p>The day gave us a splendid sun, a dream sunset and we took advantage of both the interior
and the exterior to create romantic shots with a touch of editorial fashion. The bride, an
esthete and very attentive to the photographic aspect, was a perfect model and we had a lot
of fun!</p>
<p>The evening ended with wild dancing and a pizza party for everyone!</p>
<p>Thanks Tuscany for the usual welcome and thanks to you who choose Italy to celebrate your
love!</p>`,
        it: `<p>Un messaggio su instagram mi permette di conoscere Yasmin e Phil che con entusiasmo mi
contattano da Monaco di Baviera annunciandomi che si sarebbero sposati a Firenze e
volevano assolutamente avermi come fotografa!</p>
<p>Che dire? Dopo la gioia iniziale, abbiamo organizzato un appuntamento in Italia per definire i
dettagli e a luglio eccoci tutti nel bellissimo Castello Il Palagio, a San Casciano in Val di
Pesa, per festeggiare la loro unione.</p>
<p>Il Castello sorge nella campagna toscana, a pochi chilometri da Firenze. Un luogo magico
dove storia e autenticità si incontrano per dare vita a una location che fa subito innamorare.
La meravigliosa corte interna ha ospitato la cena, in cui gli ospiti internazionali si possono
godere un'atmosfera antica che permette di assaporare un aspetto inedito del territorio
toscano. Il castello infatti fu costruito nel XIII secolo e conserva le caratteristiche peculiari di
quel periodo che lo rendono unico nel suo genere.</p>
<p>Per gli amanti della storia (e anche di serie come Game of Thrones) sposarsi qui è davvero
fantastico!</p>
<p>La giornata ci ha regalato un sole splendido, un tramonto da sogno e abbiamo sfruttato sia
l'interno che l'esterno per realizzare scatti romantici con un tocco di fashion editoriale. La
sposa, un'esteta e molto attenta all'aspetto fotografico, è stata una modella perfetta e ci
siamo divertite tantissimo!</p>
<p>La serata si è conclusa con danze scatenate e pizza party per tutti!</p>
<p>Grazie Toscana per la solita accoglienza e grazie a voi che scegliete l'Italia per celebrare il
vostro amore!</p>`,
      },
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/67.jpg`,
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
