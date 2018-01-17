<template>
<section class="container">
  <lightbox :title="title" :images="images"></lightbox>
</section>
</template>

<script>
import zpad from 'zpad'

const BASE_PATH = '/images/photos/martina_salvador'
const IMAGE_COUNT = 92

export default {
  data() {
    return {
      title: 'Martina & Salvador',
      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/${zpad(index + 1)}.jpg`
      }))
    }
  }
}
</script>

<style>
.vue-lightbox > h1 {
  font-size: 3em;
  text-align: center;
}

.vue-lightbox > ul > li {
  vertical-align: middle;
}

.vue-lightbox > ul > li:hover {
  opacity: 0.5;
}

.vue-lightbox > .lightbox-overlay {
  @media (min-width: 1024px) {
    margin-top: 5rem;
  }
}

.vue-lightbox > .lightbox-overlay > .holder,
.vue-lightbox > .lightbox-overlay > .holder > img {
  max-width: 100% !important;
  @media (min-width: 1024px) {
    max-height: calc(100vh - 7.5rem) !important;
  }
  width: initial !important;
  margin: 0 auto;
}
</style>
