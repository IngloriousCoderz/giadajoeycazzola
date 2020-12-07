<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">Storie</h1>

    <div class="content has-text-centered">
      <blockquote>
        &ldquo;Credo davvero che ci siano cose che nessuno riesce a vedere prima
        che vengano fotografate.&rdquo;
        <footer>
          &mdash;
          <cite>Diane Arbus</cite>
        </footer>
      </blockquote>
    </div>

    <div class="content columns is-centered is-multiline">
      <div v-for="image in images" :key="image.id" class="column is-one-third">
        <nuxt-link :to="{ name: image.href }">
          <div class="card">
            <div class="card-image">
              <div class="image is-4by3">
                <div
                  class="is-overlay has-clipped-background clickable"
                  :style="{ 'background-image': `url(${image.src})` }"
                />
              </div>
            </div>
            <div class="card-content has-text-centered">
              <h3 class="title is-5">{{ image.title }}</h3>
              <p>{{ image.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="content has-text-centered">Altri album in arrivo...</div>
  </section>
</template>

<script>
export default {
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
      title: 'Stories',
      description:
        'Blog realizzato per raccontare i migliori reportage di matrimonio realizzati a Torino, Piemonte, Langhe, Toscana, Puglia, Italia. Location bellissime immerse nella natura, abiti da sposa unici.',
      url: 'https://www.giadajoeycazzola.com/stories/',
      image: 'https://www.giadajoeycazzola.com/images/slides/02.jpg',

      images: [
        {
          id: 'eleonoralorenzo',
          src: '/images/stories/eleonoralorenzo/59.jpg',
          href: 'stories-eleonoralorenzo',
          title: 'Eleonora & Lorenzo',
          description:
            'Una coppia esplosiva. Eleonora un vulcano e Lorenzo il suo porto sicuro. Li ho amati!'
        },
        {
          id: 'elisajacopo',
          src: '/images/stories/elisajacopo/34.jpg',
          href: 'stories-elisajacopo',
          title: 'Elisa & Jacopo',
          description:
            'Cose da fare almeno una volta nella vita: perdersi tra le vie di Trastevere, proseguire verso piazza San Pietro e respirare bellezza.'
        },
        {
          id: 'eleonoravalentino',
          src: '/images/stories/eleonoravalentino/56.jpg',
          href: 'stories-eleonoravalentino',
          title: 'Eleonora & Valentino',
          description:
            'Un matrimonio emozionante che ha fatto commuovere anche il cielo di Taormina. Eleonora e Valentino, questa è la loro storia sotto la pioggia di un’estate siciliana.'
        },
        {
          id: 'alessandraattilio',
          src: '/images/stories/alessandraattilio/63.jpg',
          href: 'stories-alessandraattilio',
          title: 'Alessandra & Attilio',
          description:
            '“Gli incontri più importanti sono già combinati dalle anime prima che i corpi si vedano.” Come quello tra Alessandra e Attilio. Una coppia così rende splendido qualsiasi contesto.'
        },
        {
          id: 'elenaluca',
          src: '/images/stories/elenaluca/59.jpg',
          href: 'stories-elenaluca',
          title: 'Elena & Luca',
          description:
            'L’aria è frizzante, si percepisce l’affetto sincero degli invitati. È una bellissima festa. Elena e Luca scelgono Villa Fiorita e in questa location immersa nel verde creiamo scatti di vero e puro reportage.'
        },
        {
          id: 'alessiamatteo',
          src: '/images/stories/alessiamatteo/96.jpg',
          href: 'stories-alessiamatteo',
          title: 'Alessia & Matteo',
          description:
            'Siamo in tre nella sala di Villa Bria ma in realtà intorno ad Alessia e Matteo c’è il silenzio di chi non ha bisogno di parlare per trasmettere ciò che sente. Dico sempre alle mie coppie di godersi quel momento per celebrare l’amore. Loro l’hanno fatto benissimo.'
        },
        {
          id: 'martinasalvador',
          src: '/images/stories/martinasalvador/01.jpg',
          href: 'stories-martinasalvador',
          title: 'Martina & Salvador',
          description:
            'Magico matrimonio tra i vigneti dell’astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all’amore di Martina e Salvador.'
        },
        {
          id: 'irenedavide',
          src: '/images/stories/irenedavide/96.jpg',
          href: 'stories-irenedavide',
          title: 'Irene & Davide',
          description:
            "Fotografare Irene e Davide è stato un privilegio: mi sono divertita tantissimo! Sono una coppia genuina e l'empatia tra di noi era davvero molto forte. Location e allestimenti eccezionali hanno fatto il resto."
        },
        {
          id: 'vittorialuigi',
          src: '/images/stories/vittorialuigi/58.jpg',
          href: 'stories-vittorialuigi',
          title: 'Vittoria & Luigi',
          description:
            'La bellezza e l’eleganza di questa coppia ha reso senza dubbio questo matrimonio una vera favola. Vittoria e Luigi, questa è la loro storia. Le parole non servono, lascio parlare le immagini.'
        },
        {
          id: 'pierpaolofernando',
          src: '/images/stories/pierpaolofernando/01.jpg',
          href: 'stories-pierpaolofernando',
          title: 'Pierpaolo & Fernando',
          description:
            'Una caotica ma affascinante Torino fa da sfondo al matrimonio di Pierpaolo e Fernando: una coppia bellissima e molto complice che ha emozionato tutti con la forza della loro unione.'
        },
        {
          id: 'chiaramarco',
          src: '/images/stories/chiaramarco/mobile/50.jpg',
          href: 'stories-chiaramarco',
          title: 'Chiara & Marco',
          description:
            'Torino non è mai stata bella come questa sera: Chiara e Marco, nel cuore della città, hanno scelto di dirsi “sì” per sempre.'
        },
        {
          id: 'annamariaclaudio',
          src: '/images/stories/annamariaclaudio/01.jpg',
          href: 'stories-annamariaclaudio',
          title: 'Annamaria & Claudio',
          description:
            'Cornice della romantica storia di Annamaria e Claudio è il castello Saffarone, suggestiva dimora settecentesca alle porte di Torino.'
        },
        {
          id: 'cassandracarlo',
          src: '/images/stories/cassandracarlo/03.jpg',
          href: 'stories-cassandracarlo',
          title: 'Cassandra & Carlo',
          description:
            'Amici, amanti e innamoratissimi. Cassandra e Carlo hanno scelto l’atmosfera incantevole che si respira al castello di Oviglio per promettersi amore eterno.'
        },
        {
          id: 'danielamichele',
          src: '/images/stories/danielamichele/53.jpg',
          href: 'stories-danielamichele',
          title: 'Daniela & Michele',
          description:
            'Immersa nel verde delle colline canavesi sorge Villa Merlin, un luogo raffinato ma semplice proprio come Daniela e Michele.'
        }
      ]
    }
  }
}
</script>
