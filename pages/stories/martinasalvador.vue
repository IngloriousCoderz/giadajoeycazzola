<template>
<story :title="title" :description="description" :type="type" :base-path="basePath" :image-count="imageCount" />
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
