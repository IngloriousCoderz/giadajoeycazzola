<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">Storie</h1>

  <div class="content has-text-centered">
    <blockquote>
      &ldquo;Credo davvero che ci siano cose che nessuno riesce a vedere prima che vengano fotografate.&rdquo;
      <footer>
        &mdash; <cite>Diane Arbus</cite>
      </footer>
    </blockquote>
  </div>

  <div class="content columns is-centered is-multiline">
    <div v-for="image in images" :key="image.id" class="column is-one-third">
      <nuxt-link :to="{ name: image.href }">
        <div class="card">
          <div class="card-image">
            <div class="image is-4by3">
              <div class="is-overlay has-clipped-background clickable" :style="{'background-image': `url(${image.src})`}" />
            </div>
          </div>
          <div class="card-content has-text-centered">
            <h3 class="title is-5">{{image.title}}</h3>
            <p>{{image.description}}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>

  <div class="content has-text-centered">
    Altri album in arrivo...
  </div>
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
          id: 'martinasalvador',
          src: '/images/stories/martinasalvador/01.jpg',
          href: 'stories-martinasalvador',
          title: 'Martina & Salvador',
          description:
            "Magico matrimonio tra i vigneti dell'astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all'amore di Martina e Salvador."
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
          src: '/images/stories/cassandracarlo/01.jpg',
          href: 'stories-cassandracarlo',
          title: 'Cassandra & Carlo',
          description:
            "Amici, amanti e innamoratissimi. Cassandra e Carlo hanno scelto l'atmosfera incantevole che si respira al castello di Oviglio per promettersi amore eterno."
        },
        {
          id: 'danielamichele',
          src: '/images/stories/danielamichele/01.jpg',
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
