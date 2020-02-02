<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">{{title}}</h1>

    <section class="content has-text-centered-mobile">
      <slot></slot>
    </section>

    <section v-if="video" class="content has-text-centered">
      <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          :src="video"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <lightbox :images="images"></lightbox>
  </section>
</template>

<script>
import zpad from 'zpad'

import Lightbox from '@/components/Lightbox'

export default {
  props: ['title', 'description', 'type', 'basePath', 'imageCount', 'video'],

  components: { Lightbox },

  data() {
    return {
      url: `https://www.giadajoeycazzola.com/${this.basePath}/`,
      image: `https://www.giadajoeycazzola.com/images/${this.basePath}/01.jpg`,

      images: Array.from(Array(this.imageCount).keys()).map(index => ({
        id: index + 1,
        src: `/images/${this.basePath}/${zpad(index + 1)}.jpg`
      }))
    }
  },

  mounted() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.images.forEach(
        image => (image.src = image.src.replace(/\/mobile\//g, '/'))
      )
    }
  }
}
</script>
