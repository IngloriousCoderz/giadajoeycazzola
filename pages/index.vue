<template>
  <div>
    <nav
      class="navbar is-hidden-desktop"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h2 class="has-text-weight-bold is-marginless">
            GJC
          </h2>
        </nuxt-link>

        <button
          class="button navbar-burger"
          :class="{ 'is-active': burgerActive }"
          @click="onClickBurger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': burgerActive }">
        <nuxt-link
          :to="{ name: 'index' }"
          class="navbar-item"
          @click.native="closeBurger"
        >
          Home &rsaquo;
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'recensioni' }"
          class="navbar-item"
          @click.native="closeBurger"
        >
          Recensioni &rsaquo;
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'portfolio' }"
          class="navbar-item"
          @click.native="closeBurger"
        >
          Portfolio &rsaquo;
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'stories' }"
          class="navbar-item"
          @click.native="closeBurger"
        >
          Stories &rsaquo;
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'blog' }"
          class="navbar-item"
          @click.native="closeBurger"
        >
          Blog &rsaquo;
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'contacts' }"
          class="navbar-item"
          @click.native="closeBurger"
        >
          Contacts &rsaquo;
        </nuxt-link>
      </div>
    </nav>

    <div v-swiper:mySwiper="swiperOptions" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="image in images" :key="image.id" class="swiper-slide">
          <div
            class="is-overlay has-clipped-background swiper-lazy"
            :data-background="image.src"
          />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
        </div>
      </div>
      <div
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
        @click="onClickPrev"
      />
      <div
        slot="button-next"
        class="swiper-button-next swiper-button-white"
        @click="onClickNext"
      />
    </div>

    <nav
      class="navbar level container has-text-centered is-uppercase is-hidden-touch"
    >
      <div class="level-item">
        <nuxt-link :to="{ name: 'index' }" class="has-text-white">
          Home
        </nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{ name: 'recensioni' }" class="has-text-white">
          Recensioni
        </nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{ name: 'portfolio' }" class="has-text-white">
          Portfolio
        </nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{ name: 'index' }" class="has-text-white">
          <h2 class="is-size-2 has-text-weight-bold is-marginless">
            GJC
          </h2>
        </nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{ name: 'stories' }" class="has-text-white">
          Stories
        </nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{ name: 'blog' }" class="has-text-white">
          Blog
        </nuxt-link>
      </div>
      <div class="level-item">
        <nuxt-link :to="{ name: 'contacts' }" class="has-text-white">
          Contacts
        </nuxt-link>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1-desktop is-size-3-mobile has-text-centered">
            GiadaJoeyCazzola
          </h1>

          <div class="content has-text-centered">
            <p>
              Sono Giada e sono una fotografa specializzata in reportage di
              matrimonio.
            </p>

            <p>
              Sono nata a Torino, città d&rsquo;arte e magia. Ed è proprio tra
              le vie di questa città che è nata la mia passione per la
              fotografia. Sono sempre stata una sentimentale, innamorata
              dell&rsquo;amore e di tutto ciò che questo sentimento riesce a
              suscitare nelle persone.
            </p>
            <p />
            <p>
              Sguardi complici, baci fugaci e dettagli impercettibili sono stati
              da sempre la mia massima fonte d&rsquo;ispirazione. Per questo
              motivo, in un susseguirsi di vicende che hanno incrociato il mio
              cammino, ho scelto di dedicarmi alla fotografia di matrimonio e
              nello specifico al reportage.
            </p>

            <p>
              La mia capacità di catturare la spontaneità delle persone non
              poteva che unirsi alla cosa più spontanea che esista:
              l&rsquo;amore.
              <br />Ed è così che racconterò il giorno del vostro matrimonio:
              con discrezione e ricchezza di particolari.
            </p>

            <p>Mi commuoverò e sorriderò con voi.</p>

            <p>
              Il mio è uno studio serio e profondo che da anni mi permette di
              crescere e ampliare il mio bagaglio visivo non solo direttamente
              sul campo dei miei matrimoni ma anche guardando con attenzione
              matrimoni di guru e mentori della fotografia di reportage di tutto
              il mondo.
            </p>

            <p>
              Descriverei il mio lavoro come una ricerca della perfezione
              nell'imperfezione.
              <br />Il racconto dettagliato del giorno più bello per una coppia,
              realizzato con ricchezza di particolari ma anche con discrezione.
              <br />Il miglior complimento che mi fanno gli sposi dopo aver
              visto le foto è che sembra loro di rivivere attraverso i miei
              scatti il giorno del matrimonio con dettagli che nemmeno loro
              ricordavano.
            </p>

            <p>
              Il mio successo, e il motivo per cui vi invito a scegliermi, è
              proprio questo: racconterò la vostra storia, il vostro giorno
              speciale, il vostro amore con un approccio fresco, giovane,
              spontaneo e il più naturale possibile. Per me esistete voi, con i
              vostri pregi e i vostri difetti che vi rendono unici e che sono
              sicura siano quelli che hanno permesso alla vostra metà di
              innamorarsi di voi. Mi interessano i vostri sguardi, i sorrisi
              imbarazzati quando vi guardate dopo aver pronunciato quel "sì"
              all'altare, i baci e le mani che si incrociano mentre camminate
              uno di fianco all'altra. In una parola mi interessate voi, e io e
              la mia macchina fotografica faremo tutto quello che è in nostro
              potere per restituirvi le immagini perfette per descrivere quello
              che siete.
            </p>

            <p>&ctdot;</p>
          </div>
        </div>

        <h1 class="is-size-1 has-text-centered">
          Riconoscimenti
        </h1>

        <!-- // Matrimonio.com -->
        <div class="container">
          <div class="columns is-centered">
            <div id="wp-ratedWA" class="column is-3 has-text-centered">
              <a
                href="https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658"
                title="Giada Joey Cazzola, vincitore Wedding Awards 2020 matrimonio.com"
                target="_blank"
              >
                <img
                  id="wp-ratedWA-img-2020"
                  width="250"
                  height="250"
                  alt="Giada Joey Cazzola, vincitore Wedding Awards 2020 matrimonio.com"
                  src="https://cdn1.matrimonio.com/img/badges/2020/badge-weddingawards_it_IT.jpg"
                />
              </a>
            </div>

            <div id="wp-ratedWA" class="column is-3 has-text-centered">
              <a
                href="https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658"
                title="Giada Joey Cazzola, vincitore Wedding Awards 2019 matrimonio.com"
                target="_blank"
              >
                <img
                  id="wp-ratedWA-img-2019"
                  width="250"
                  height="250"
                  alt="Giada Joey Cazzola, vincitore Wedding Awards 2019 matrimonio.com"
                  src="https://cdn1.matrimonio.com/img/badges/2019/badge-weddingawards_it_IT.jpg"
                />
              </a>
            </div>

            <div id="wp-ratedWA" class="column is-3 has-text-centered">
              <a
                href="https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658"
                title="Giada Joey Cazzola, vincitore Wedding Awards 2018 matrimonio.com"
                target="_blank"
              >
                <img
                  id="wp-ratedWA-img-2018"
                  width="250"
                  height="250"
                  alt="Giada Joey Cazzola, vincitore Wedding Awards 2018 matrimonio.com"
                  src="https://cdn1.matrimonio.com/img/badges/2018/badge-weddingawards_it_IT.jpg"
                />
              </a>
            </div>
          </div>
        </div>
        <!-- // Matrimonio.com -->
      </div>
    </section>
  </div>
</template>

<script>
import zpad from 'zpad'

const BASE_PATH = '/images/home'
const IMAGE_COUNT = 8
const SLIDE_DELAY = 3000
const SLIDE_SPEED = 750
const MANUAL_SPEED = 500

export default {
  layout: 'home',

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.url
        }
      ]
    }
  },

  data() {
    return {
      title: 'Giada Joey Cazzola - Fotografa matrimonio Torino',
      description:
        'Fotografa di matrimonio a Torino, lago di Como, lago Maggiore, Toscana, Roma, Puglia e in tutta Europa. Specializzata in reportage foto e video spontanei.',
      url: 'https://www.giadajoeycazzola.com/',
      image: 'https://www.giadajoeycazzola.com/images/home/01.jpg',

      burgerActive: false,
      images: Array.from(Array(IMAGE_COUNT).keys()).map(index => ({
        id: index + 1,
        src: `${BASE_PATH}/mobile/${zpad(index + 1)}.jpg`
      })),
      swiperOptions: {
        loop: true,
        speed: SLIDE_SPEED,
        lazy: { loadPrevNext: true, loadOnTransitionStart: true },
        keyboard: { enabled: true },
        autoplay: { delay: SLIDE_DELAY, disableOnInteraction: true },
        on: {
          init: () => {
            if (window.matchMedia('(min-width: 1024px)').matches) {
              this.images.forEach(
                image => (image.src = image.src.replace(/\/mobile\//g, '/'))
              )
              this.$nextTick(() => this.mySwiper.lazy.load())
            }
          }
        }
      }
    }
  },

  mounted() {
    window.wpShowRatedWAv3 && window.wpShowRatedWAv3('159658', '2019')
  },

  methods: {
    onClickBurger() {
      this.burgerActive = !this.burgerActive
    },

    closeBurger() {
      this.burgerActive = false
    },

    onClickPrev() {
      this.mySwiper.slidePrev(MANUAL_SPEED)
    },

    onClickNext() {
      this.mySwiper.slideNext(MANUAL_SPEED)
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  height: 100vh;
  overflow: hidden;
  @media (max-width: 1023px) {
    height: 720px;
  }
  @media (max-width: 767px) {
    height: 480px;
  }
  @media (max-width: 479px) {
    height: 240px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.navbar.level.container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: transparent;
  text-shadow: 0 0 0.5em black;
}
</style>
