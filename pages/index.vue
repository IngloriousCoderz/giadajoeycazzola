<template>
<div>
  <nav class="navbar is-hidden-desktop" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{name: 'index'}" class="navbar-item has-text-white">
        <h1 class="has-text-weight-bold is-marginless">GJC</h1>
      </nuxt-link>

      <button class="button navbar-burger" :class="{'is-active': burgerActive}" @click="onClickBurger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar-menu" :class="{'is-active': burgerActive}">
      <nuxt-link :to="{name: 'index'}" class="navbar-item has-text-white">Home</nuxt-link>
      <nuxt-link :to="{name: 'about'}" class="navbar-item has-text-white">About</nuxt-link>
      <nuxt-link :to="{name: 'photo'}" class="navbar-item has-text-white">Photo</nuxt-link>
      <nuxt-link :to="{name: 'stories'}" class="navbar-item has-text-white">Stories</nuxt-link>
      <nuxt-link :to="{name: 'film'}" class="navbar-item has-text-white">Film</nuxt-link>
      <nuxt-link :to="{name: 'contatti'}" class="navbar-item has-text-white">Contatti</nuxt-link>
    </div>
  </nav>

  <div v-swiper:mySwiper="swiperOptions">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides" :key="slide">
        <div class="is-overlay" :style="{'background-image': `url(/images/slides/${slide}.jpg)`}" />
        <div class="is-overlay dark"></div>
      </div>
    </div>
  </div>

  <nav class="navbar level has-text-centered is-hidden-mobile">
    <div class="level-item">
      <nuxt-link :to="{name: 'index'}" class="has-text-white">Home</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'about'}" class="has-text-white">About</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'photo'}" class="has-text-white">Photo</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'index'}" class="has-text-white">
        <h1 class="is-size-2 has-text-weight-bold is-marginless">GJC</h1>
      </nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'stories'}" class="has-text-white">Stories</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'film'}" class="has-text-white">Film</nuxt-link>
    </div>
    <div class="level-item">
      <nuxt-link :to="{name: 'contatti'}" class="has-text-white">Contatti</nuxt-link>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="is-size-1-desktop is-size-3-mobile has-text-centered">GiadaJoeyCazzola</h1>

        <div class="content has-text-centered">
          <p>
            Sono Giada e sono una fotografa specializzata in reportage di matrimonio.
          </p>
          <p>
            Descriverei il mio lavoro come una ricerca della perfezione nell’imperfezione.
          <br />
            Il racconto dettagliato del giorno più bello per una coppia, realizzato con ricchezza di particolari ma anche con discrezione.
          <br />
            Il miglior complimento che mi fanno gli sposi dopo aver visto le foto è che sembra loro di rivivere attraverso i miei scatti il giorno del loro matrimonio con dettagli che nemmeno loro ricordavano.
          </p>
          <p>
            Il mio successo e il motivo per cui vi invito a scegliermi, è proprio questo: racconterò la VOSTRA storia, il VOSTRO giorno speciale, il VOSTRO amore con un approccio fresco, giovane, spontaneo e il più naturale possibile. Per me non esistono foto impostate, sorrisi di circostanza, pose plastiche.
            Per me esistete voi, con i vostri pregi e i vostri difetti che vi rendono unici e che sono sicura siano quelli che hanno permesso alla vostra metà di innamorarsi di voi. Mi interessano i vostri sguardi, i sorrisi imbarazzati quando vi guardate
            dopo aver pronunciato quel sì all’altare, i baci e le mani che si incrociano mentre camminate uno di fianco all’altra. in una parola mi interessate voi e io e la mia macchina fotografica faremo tutto quello che è in nostro potere per restituirvi
            le immagini perfette per descrivere quello che siete.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  layout: 'home',

  data() {
    return {
      burgerActive: false,
      slides: ['jpg1', 'jpg2', 'jpg3', 'jpg4', 'jpg5', 'jpg6', 'jpg7', 'jpg8'],
      swiperOptions: {
        loop: true,
        speed: 3000,
        keyboard: {
          enabled: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },

  methods: {
    onClickBurger() {
      this.burgerActive = !this.burgerActive
    }
  }
}
</script>

<style scoped>
.navbar.is-mobile,
.navbar-brand,
.navbar-menu {
  background-color: #504c49;
}

.swiper-container {
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 240px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-slide>.is-overlay {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.swiper-slide>.is-overlay.dark {
  /*background: rgba(0, 0, 0, 0.5);*/
}

.navbar.level {
  position: absolute;
  width: 100vw;
  bottom: 0;
  z-index: 1;
  background: transparent;
}
</style>
