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

    <div v-html="body[$i18n.locale]" />
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
      body: {
        en: `<p>Portugal: I love it from the first time I set foot there. What a wonderful land, what food and
atmosphere, and then the music, the scent of the ocean. I love it almost as much as Italy!</p>
<p>When Monika and Rick called me to photograph their mini-wedding at the Marriott resort in
Praia del Rey, near Obidos, I was thrilled! When do we leave?</p>
<p>And so I land in Lisbon in the company of my boyfriend who accompanied me on this
business trip. We rent the car and off to the sea. We arrive at the resort in the early
afternoon, the crisp air of the end of September teases us but it is not the air that gives us
goosebumps, but the scenario that opens up before us.</p>
<p>I had seen some pictures on the internet but I didn't think it could exceed my expectations so
much.</p>
<p>A sandy driveway, dunes rich in vegetation, a few fences and very few meters separated us
from the ocean. Open, immense, stormy, defiant, beautiful. It was there and I was shaking.
The following evening I rolled in the sand to photograph Monika and Rick who, in love and
beautiful as the sun, had just sworn eternal love.</p>
<p>The Marriott in Praia del Rey is one of the places that I hold dearest in my heart because it
was able to host one of the most beautiful weddings I've ever photographed (and attended)
with intimacy and elegance.</p>
<p>Thank you Portugal, you are always in my heart!</p>`,
        it: `<p>Il Portogallo: lo amo dalla prima volta in cui ci ho messo piede. Che terra meravigliosa, che
cibo e atmosfera, e poi la musica, il profumo dell'oceano. Lo amo quasi quanto l'Italia!</p>
<p>Quando Monika e Rick mi hanno chiamata per fotografare il loro mini-wedding nel resort
Marriott a Praia del Rey, vicino Obidòs, ero emozionatissima! Quando si parte?</p>
<p>E così atterro a Lisbona in compagnia del mio ragazzo che mi ha accompagnato in questo
viaggio di lavoro. Noleggiamo l'auto e via verso il mare. Arriviamo nel resort che nel primo
pomeriggio, l'aria frizzantina di fine settembre ci stuzzica ma non è lei a farci venire la pelle
d'oca, bensì lo scenario che si apre davanti a noi.</p>
<p>Avevo visto qualche immagine su internet ma non pensavo potesse superare così tanto le
mie aspettative.</p>
<p>Un vialetto di sabbia, le dune ricche di vegetazione, qualche staccionata e pochissimi metri
ci separavano dall'Oceano. Aperto, immenso, tempestoso, spavaldo, bellissimo. Era lì e io
tremavo. La sera successiva mi rotolavo tra la sabbia per fotografare Monika e Rick che,
innamorati e belli come il sole, si erano appena giurati amore eterno.</p>
<p>Il Marriott di Praia del Rey è uno dei luoghi che ho più nel cuore perchè ha saputo ospitare
con intimità ed eleganza uno dei matrimoni più belli che abbia mai fotografato (e a cui abbia
mai partecipato).</p>
<p>Grazie Portogallo, sei sempre nel mio cuore!</p>`,
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/99.jpg`,
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
