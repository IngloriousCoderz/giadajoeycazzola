<template>
<story :title="title" :description="description" :type="type" :base-path="basePath" :image-count="imageCount" :video="video">
  <p class="is-size-7">
    location: <a href="https://www.facebook.com/principidipiemontetorino/" target="_blank" class="has-text-weight-bold">Principi di Piemonte</a>
    <br />
    abiti: <a href="https://www.carlopignatelli.com/" target="_blank" class="has-text-weight-bold">Carlo Pignatelli</a>
  </p>
</story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/pierpaolofernando'
const IMAGE_COUNT = 41

export default {
  components: { Story },

  data() {
    return {
      title: 'Pierpaolo & Fernando',
      description:
        'Una caotica ma sempre affascinante Torino fa da sfondo al matrimonio di Pierpaolo e Fernando: due ragazzi bellissimi e molto complici che hanno emozionato tutti coloro che hanno avuto la fortuna di partecipare alla loro unione.',
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT,
      video: 'https://player.vimeo.com/video/273849529?portrait=0'
    }
  }
}
</script>
