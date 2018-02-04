<template>
<story :title="title" :description="description" :type="type" :base-path="basePath" :image-count="imageCount" />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/danielamichele'
const IMAGE_COUNT = 91

export default {
  components: { Story },

  data() {
    return {
      title: 'Daniela & Michele',
      description:
        'Immersa nel verde delle colline canavesi sorge Villa Merlin, un luogo raffinato ma semplice proprio come Daniela e Michele.',
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
