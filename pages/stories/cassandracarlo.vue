<template>
  <story
    :title="title"
    :description="description"
    :type="type"
    :base-path="basePath"
    :image-count="imageCount"
  />
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/cassandracarlo'
const IMAGE_COUNT = 73

export default {
  components: { Story },

  data() {
    return {
      title: 'Cassandra & Carlo',
      description:
        'Amici, amanti e innamoratissimi. Cassandra e Carlo hanno scelto l’atmosfera incantevole che si respira al castello di Oviglio per promettersi amore eterno.',
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
