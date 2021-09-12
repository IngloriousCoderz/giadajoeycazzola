<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">
      {{ $t('contacts.title') }}
    </h1>

    <div class="content columns">
      <div class="column has-vertically-aligned-content">
        <div v-html="$t('contacts.body')" />

        <p>
          <a
            href="mailto:giada.cazzola93@gmail.com"
            class="has-text-weight-bold"
            >giada.cazzola93@gmail.com</a
          >
          //
          <a href="tel:+393475045548" class="has-text-weight-bold"
            >+39 347 5045548</a
          >
        </p>
      </div>

      <div class="column">
        <div class="box">
          <form
            ref="form"
            action="https://formspree.io/f/giada.cazzola93@gmail.com"
            method="POST"
          >
            <div class="field">
              <input
                class="input"
                name="name"
                :placeholder="$t('contacts.name')"
              />
            </div>

            <div class="field">
              <input
                class="input"
                type="email"
                name="email"
                :placeholder="$t('contacts.email')"
              />
            </div>

            <div class="field">
              <input
                class="input"
                name="phone"
                :placeholder="$t('contacts.phone')"
              />
            </div>

            <div class="field">
              <textarea
                class="textarea"
                name="message"
                :placeholder="$t('contacts.message')"
              />
            </div>

            <div class="field">
              <b-switch v-model="privacyAccepted">
                {{ $t('contacts.privacy-policy') }}
                <a
                  href="https://www.iubenda.com/privacy-policy/10318033"
                  target="_blank"
                  class="has-text-weight-bold"
                  >{{ $t('contacts.privacy-policy.link') }}</a
                >
              </b-switch>
            </div>

            <input
              type="hidden"
              name="subject"
              value="Richiesta di contatto dal sito giadajoeycazzola.com"
            />
            <button class="button" type="submit" @click.prevent="onClick">
              {{ $t('contacts.send') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
      title: 'Contatti',
      description:
        'Compila la form per contattare Giada Joey Cazzola. Disponibile anche per altri tipi di servizi fotografici a Torino.',
      url: 'https://www.giadajoeycazzola.com/contacts/',
      image: 'https://www.giadajoeycazzola.com/images/about_me.jpg',
      privacyAccepted: false
    }
  },

  methods: {
    onClick(event) {
      if (!this.privacyAccepted) {
        alert('Per favore, accetta la privacy policy prima di continuare')
        return
      }

      this.$refs.form.submit()
    }
  }
}
</script>
