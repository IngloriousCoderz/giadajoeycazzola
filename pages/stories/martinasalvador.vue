<template>
<story :title="title" :description="description" :type="type" :base-path="basePath" :image-count="imageCount">
  <p class="is-size-7">
    fiori &amp; bouquet: <a href="https://www.facebook.com/ilpoderelerocche/" target="_blank" class="has-text-weight-bold">Ilpoderelerocche</a>
    <br />
    catering: <a href="http://www.ristorantespazio7.it/" target="_blank" class="has-text-weight-bold">Spazio7</a>
    <br />
    abito da sposa: <a href="https://www.celiadragouni.com/" target="_blank" class="has-text-weight-bold">Celia Dragouni</a> - <a href="http://www.whitelesposetorino.com/" target="_blank" class="has-text-weight-bold">White Le Spose</a>
    <br />
    location: <a href="http://tamburnin.it/" target="_blank" class="has-text-weight-bold">Tenuta Tamburnin</a>
  </p>
</story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/martinasalvador'
const IMAGE_COUNT = 92

export default {
  components: { Story },

  data() {
    return {
      title: 'Martina & Salvador',
      description:
        "Magico matrimonio tra i vigneti dell'astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all'amore di Martina e Salvador.",
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
