<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">Le mie fotografie</h1>

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
    Altre foto in arrivo...
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          src: '/images/photos/martina_salvador/01.jpg',
          href: 'photos-martinasalvador',
          title: 'Martina & Salvador',
          description: 'Magico matrimonio tra i vigneti dell\'astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all\'amore di Martina e Salvador.'
        }
      ]
    }
  }
}
</script>
