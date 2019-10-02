<template>
  <story
    :title="title"
    :description="description"
    :type="type"
    :base-path="basePath"
    :image-count="imageCount"
  >
    <p class="is-size-7">
      location:
      <a
        href="http://www.villafiorita.net"
        target="_blank"
        class="has-text-weight-bold"
      >Villa Fiorita</a>
      <br />wedding planner:
      <a
        href="http://www.organizzazionematrimoniotorino.it"
        target="_blank"
        class="has-text-weight-bold"
      >Manuela Mantovani - Martina Filomena</a>
      <br />abito da sposa:
      <a
        href="http://www.whitelesposetorino.com"
        target="_blank"
        class="has-text-weight-bold"
      >White Le Spose Torino</a>
      <br />fiorista:
      <a
        href="https://www.danielledesign.it"
        target="_blank"
        class="has-text-weight-bold"
      >Danielle Wedding Design</a>
    </p>
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/elenaluca/mobile'
const IMAGE_COUNT = 99

export default {
  components: { Story },

  data() {
    return {
      title: 'Elena & Luca',
      description:
        'L’aria è frizzante, si percepisce l’affetto sincero degli invitati. È una bellissima festa. Elena e Luca scelgono Villa Fiorita e in questa location immersa nel verde creiamo scatti di vero e puro reportage.',
      type: 'website',
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT
    }
  }
}
</script>
