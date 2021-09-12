<template>
  <post
    :title="title"
    :description="description"
    :url="url"
    :image="image"
    :type="type"
    :date="date"
  >
    <p class="is-size-7 has-text-centered-mobile">
      fiori &amp; bouquet:
      <a
        href="https://www.facebook.com/ilpoderelerocche/"
        target="_blank"
        class="has-text-weight-bold"
        >Ilpoderelerocche</a
      >
      <br />abito da sposa:
      <a
        href="https://www.celiadragouni.com/"
        target="_blank"
        class="has-text-weight-bold"
        >Celia Dragouni</a
      >
      -
      <a
        href="http://www.whitelesposetorino.com/"
        target="_blank"
        class="has-text-weight-bold"
        >White Le Spose</a
      >
    </p>

    <p>
      Se stai pensando di organizzare un matrimonio in stile bohemien, questa è
      la guida che fa per te.
      <br />&ldquo;Boho wedding&rdquo; è una delle ricerche più frequenti su
      Google. <br />Ma cosa rende un matrimonio come questo diverso dagli altri?
    </p>

    <h3 class="title is-4 has-text-centered has-text-weight-bold">
      Decorazioni e dettagli
    </h3>

    <p>
      Un mix eclettico di dettagli vintage immersi nel verde della natura.
      Nastri, lanterne e lucine che fanno capolino dagli alberi, vecchie
      macchine da scrivere, piccoli scrigni di vetro in cui un letto d’erba
      accoglie le fedi, coni fatti con fogli di giornale per contenere il riso
      da lanciare dopo la cerimonia, una vecchia altalena artigianale legata a
      un ramo, cuscini e coperte sull’erba fresca che accolgono gli invitati per
      un momento di relax.
    </p>

    <p>
      E per dare un tocco retrò anche al servizio fotografico, il polaroid
      photobooth: a disposizione dei tuoi ospiti ci sarà una polaroid con cui
      possono divertirsi scattandosi istantanee da appendere a dei fili
      posizionati tra gli alberi o da inserire in un diario con una dedica per
      voi sposi.
    </p>

    <lightbox :images="images.decorations" class="lightbox-small" />

    <h3 class="title is-4 has-text-centered has-text-weight-bold">
      Bouquet
    </h3>

    <p>
      La parola d’ordine è &ldquo;selvaggio&rdquo;. Il bouquet deve essere
      bello, grande e chic nel suo...disordine! Colorato o a tinta unita,
      l&rsquo;importante è che esprima la sua natura quindi via libera a fiori
      di campo, girasoli, baccelli, cardi, il tutto arricchito con elementi
      naturali come bacche, erbe profumate e felci.
    </p>

    <lightbox :images="images.bouquet" />

    <h3 class="title is-4 has-text-centered has-text-weight-bold">
      Abito da sposa, capelli e scarpe
    </h3>

    <p>
      L&rsquo;abito da sposa bohemien deve essere adatto al contesto in cui lo
      si indossa, per cui bando a strascichi lunghi e gonne ampie. Semplice ma
      raffinata, la sposa boho chic può scegliere un abito vintage oppure dalle
      linee morbide tipiche dello stile anni &lsquo;70. I tessuti sono leggeri e
      decorati da pizzi, merletti e frange.
    </p>

    <p>
      Il richiamo hippie suggerisce un sandalo basso e informale, per non
      rinunciare alla femminilità e a qualche punto luce ti suggerisco un tacco
      basso ma impreziosito di strass che danno personalità al look.
    </p>

    <p>
      L&rsquo;acconciatura ideale vuole i capelli sciolti ma è perfetto anche un
      raccolto morbido con qualche ciocca che incornicia il viso; via libera a
      fiori e merletti tra i capelli e coroncine da portare sulla fronte.
    </p>

    <lightbox :images="images.dress" />

    <h3 class="title is-4 has-text-centered has-text-weight-bold">
      Torta nuziale, tableau mariage e bomboniere
    </h3>

    <p>
      Il tableau mariage può essere creato con le erbe aromatiche o con fogli di
      carta grezza appesi a vecchie persiane posate sull&rsquo;erba, la torta
      nuziale ideale è a piani e impreziosita di fiori mentre le bomboniere
      hanno il compito di lasciare agli invitati un ricordo dell&rsquo;essenza
      della festa e quindi perché non affidarsi alle bomboniere
      enogastronomiche, come vasetti di vetro o di bambù che contengono
      marmellate artigianali, piccoli sacchetti di juta con all&rsquo;interno
      legumi o cereali e cosa ne dite delle spezie? Pepe di Penja, sale rosa,
      curcuma da distribuire in simpatici barattolini personalizzati. Oppure
      scatoline che contengono germogli da piantare.
    </p>

    <lightbox :images="images.cake" />

    <h3 class="title is-4 has-text-centered has-text-weight-bold">
      Location
    </h3>

    <p>
      L&rsquo;ambientazione deve essere bucolica e probabilmente il luogo ideale
      per celebrare un matrimonio boho è il bosco, in cui alberi e natura
      selvaggia la fanno da padroni. Non tutti sono disposti tuttavia a essere
      così &ldquo;wild&rdquo;, e ci si può affidare a una soluzione più comoda
      in cui poter ricreare un ambiente rurale ma allo stesso tempo accessibile
      a tutti.
    </p>

    <p>
      Una location che si presta perfettamente per questo tipo di wedding è
      Tenuta Tamburnin, a Castelnuovo Don Bosco. Immersa nei vigneti del Basso
      Monferrato Astigiano, questa struttura vanta 20 ettari di terreno di cui 9
      di vigneto, 2 di noccioleto, prati, boschi e una pregiata cantina, tutti
      luoghi in cui è possibile ricreare l&rsquo;atmosfera del matrimonio
      bohemien senza rinunciare alla presenza di una cucina, un&rsquo;ampia sala
      in cui consumare il pasto e un luogo coperto in cui ballare anche in caso
      di pioggia. (Per saperne di più visita il sito
      <a href="http://tamburnin.it/">tamburnin.it</a>).
    </p>

    <lightbox :images="images.location" />

    <p>
      Guarda
      <nuxt-link
        :to="localePath('stories-martinasalvador')"
        class="has-text-weight-bold"
      >
        qui </nuxt-link
      >le foto scattate durante il matrimonio boho chic celebrato alla Tenuta
      Tamburnin.
    </p>
  </post>
</template>

<script>
import zpad from 'zpad'

import Post from '@/components/Post'
import Lightbox from '@/components/Lightbox'

const BASE_PATH = 'blog/matrimoniobohochic'
const IMAGE_COUNT = {
  decorations: 17,
  bouquet: 7,
  dress: 9,
  cake: 10,
  location: 7
}

export default {
  components: { Post, Lightbox },

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
      title: 'Matrimonio Boho Chic',
      description:
        'Scopri tutti i segreti per organizzare un matrimonio bohemien, con foto boho chic e vintage polaroid e location adatte ai bohemian wedding.',
      url: `https://www.giadajoeycazzola.com/${BASE_PATH}/`,
      image: `https://www.giadajoeycazzola.com/images/${BASE_PATH}/01.jpg`,
      type: 'website',
      date: '2 febbraio 2018',

      images: Object.entries(IMAGE_COUNT).reduce((acc, [section, count]) => {
        acc[section] = Array.from(Array(count).keys()).map(index => ({
          id: index + 1,
          src: `/images/${BASE_PATH}/${section}/${zpad(index + 1)}.jpg`
        }))
        return acc
      }, {})
    }
  }
}
</script>
