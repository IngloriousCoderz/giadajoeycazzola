<template>
  <div :class="{ 'vue-lightbox': !resetstyles }">
    <h1 v-if="title">
      {{ title }}
    </h1>

    <ul v-if="images">
      <li v-for="(image, index) in images" :key="image.src">
        <img
          :src="image.thumb || image.src"
          :alt="image.caption"
          @click="clickImage(index)"
        />
      </li>
    </ul>

    <div
      v-if="overlayActive"
      class="lightbox-overlay"
      @click.self="closeOverlay"
    >
      <a class="close" nohref @click="closeOverlay"> &times; </a>

      <a class="prev" nohref @click="prevImage">
        <div class="swiper-button-prev swiper-button-white" />
      </a>

      <div class="main">
        <div v-if="images[currentImage].thumb">
          <iframe
            :src="images[currentImage].src"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>

        <img
          v-if="!images[currentImage].thumb"
          :src="images[currentImage].src"
        />

        <p v-if="caption && images[currentImage].caption">
          {{ images[currentImage].caption }}
        </p>
      </div>

      <a class="next" nohref @click="nextImage">
        <div
          slot="button-next"
          data-v-2a183b29
          class="swiper-button-next swiper-button-white"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resetstyles: { type: Boolean, default: false },
    title: { type: String, default: '' },
    images: { type: Array, default: () => [] },
    loop: { type: Boolean, default: true },
    nav: { type: Boolean, default: true },
    caption: { type: Boolean, default: true },
  },

  data() {
    return {
      currentImage: null,
      overlayActive: false,
    }
  },

  mounted() {
    window.addEventListener('keydown', (e) => this.handleGlobalKeyDown(e))
  },

  methods: {
    clickImage(index) {
      this.currentImage = index
      this.overlayActive = true
    },

    nextImage() {
      if (this.currentImage === this.images.length - 1) {
        if (this.loop) {
          this.currentImage = 0
        }
      } else {
        this.currentImage += 1
      }
    },

    prevImage() {
      if (this.currentImage === 0) {
        if (this.loop) {
          this.currentImage = this.images.length - 1
        }
      } else {
        this.currentImage -= 1
      }
    },

    closeOverlay() {
      this.overlayActive = false
    },

    handleGlobalKeyDown(e) {
      switch (e.keyCode) {
        case 37:
          this.prevImage()
          break
        case 39:
          this.nextImage()
          break
        case 27:
          this.closeOverlay()
          break
        default:
          break
      }
    },
  },
}
</script>

<style scoped lang="scss">
.vue-lightbox ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: block;
  text-align: center;

  li {
    display: inline-block;
    padding: 5px;
    background: ghostwhite;
    margin: 10px;

    img {
      display: block;
      width: 160px;
      cursor: pointer;
    }
  }
}

.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 31;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: '. . close' 'prev main next';

  .close,
  .prev,
  .next {
    z-index: 1;
    color: white !important;
    user-select: none;
    width: 4rem;
    line-height: 1;
    opacity: 0.6;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 1;
    }
  }

  .close {
    grid-area: close;
    font-size: 4rem;
  }

  .prev,
  .next {
    & > div {
      position: initial;
    }
  }

  .prev {
    grid-area: prev;
  }

  .next {
    grid-area: next;
  }

  .main {
    grid-area: main;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      position: absolute;
      max-height: calc(100vh - 4rem);
    }

    & > div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
