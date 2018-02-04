<template>
<story :title="title" :description="description" :type="type" :base-path="basePath" :image-count="imageCount" />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/annamariaclaudio'
const IMAGE_COUNT = 50

export default {
  components: { Story },

  data() {
    return {
      title: 'Annamaria & Claudio',
      description:
        'Cornice della romantica storia di Annamaria e Claudio è il castello Saffarone, suggestiva dimora settecentesca alle porte di Torino.',
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
