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
      <div class="holder">
        <div v-if="images[currentImage].thumb" style="padding:56.25% 0 0 0;">
          <iframe
            :src="images[currentImage].src"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
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

        <div v-if="nav" class="nav">
          <a class="close" nohref @click="closeOverlay">
            <span>&times;</span>
          </a>
          <a class="prev" nohref @click="prevImage">
            <!-- <span>&#8592;</span> -->
            <div
              slot="button-prev"
              data-v-2a183b29
              class="swiper-button-prev swiper-button-white"
            />
          </a>
          <a class="next" nohref @click="nextImage">
            <!-- <span>&#8594;</span> -->
            <div
              slot="button-next"
              data-v-2a183b29
              class="swiper-button-next swiper-button-white"
            />
          </a>
        </div>
        <p v-if="caption && images[currentImage].caption">
          {{ images[currentImage].caption }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resetstyles: {
      default: false,
      type: Boolean
    },
    title: {
      type: String
    },
    images: {
      type: Array
    },
    loop: {
      default: true,
      type: Boolean
    },
    nav: {
      default: true,
      type: Boolean
    },
    caption: {
      deftault: true,
      type: Boolean
    }
  },

  data() {
    return {
      currentImage: null,
      overlayActive: false
    }
  },

  mounted() {
    window.addEventListener('keydown', e => this.handleGlobalKeyDown(e))
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
    }
  }
}
</script>

<style scoped lang="scss">
.vue-lightbox ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: block;
  // max-width: 780px;
  text-align: center;

  li {
    display: inline-block;
    padding: 5px;
    background: ghostwhite;
    margin: 10px;

    img {
      display: block;
      width: 182px;
      // width: 200px;
    }
  }
}

.lightbox-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 31;

  .holder {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    max-height: 100vh;

    img {
      width: 100%;
      max-width: 600px;
      cursor: pointer;
      box-sizing: border-box;
      display: block;
      max-height: 100vh;
    }

    p {
      color: #ffffff;
      margin: 0;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      box-sizing: border-box;
      padding: 10px;
    }
    .nav {
      max-width: 600px;
      margin: 0 auto;
      font-size: 14px;

      a {
        color: white !important;
        opacity: 0.3;
        -webkit-user-select: none;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }

      .next,
      .prev {
        position: absolute;
        top: 120px;
        bottom: 120px;
        padding: 10px;
        width: 20%;
        box-sizing: border-box;
        font-size: 40px;
        display: flex;
        align-items: center;

        // span {
        // top: 50%;
        // transform: translateY(50%);
        // position: relative;
        // }
      }

      .next {
        right: 0;
        // text-align: right;
        justify-content: flex-end;
      }

      .prev {
        left: 0;
        // text-align: left;
        justify-content: flex-start;
      }
      .close {
        right: 10px;
        top: 0;
        font-size: 30px;
        opacity: 0.6;
        z-index: 1;
        position: absolute;
        text-align: left;
        box-sizing: border-box;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
