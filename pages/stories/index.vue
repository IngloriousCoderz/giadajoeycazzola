<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">Le mie storie</h1>

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
      title: 'Stories',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog realizzato per raccontare i migliori reportage di matrimonio realizzati a Torino, Piemonte, Langhe, Toscana, Puglia, Italia. Location bellissime immerse nella natura, abiti da sposa unici.'
        }
      ]
    }
  },

  data() {
    return {
      images: [
        {
          id: 'martinasalvador',
          src: '/images/stories/martinasalvador/01.jpg',
          href: 'stories-martinasalvador',
          title: 'Martina & Salvador',
          description: 'Magico matrimonio tra i vigneti dell\'astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all\'amore di Martina e Salvador.'
        },
        {
          id: 'annamariaclaudio',
          src: '/images/stories/annamariaclaudio/01.jpg',
          href: 'stories-annamariaclaudio',
          title: 'Annamaria & Claudio',
          description: 'Cornice della romantica storia di Annamaria e Claudio è il castello Saffarone, suggestiva dimora settecentesca alle porte di Torino.'
        }
      ]
    }
  }
}
</script>
