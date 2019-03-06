<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">Contattami</h1>

    <div class="content columns">
      <div class="column has-vertically-aligned-content">
        <p>Scrivimi per ricevere maggiori informazioni sui miei servizi. Sarò felice di rispondere alle tue domande e di confermarti la mia disponibiltà per la data del tuo matrimonio.</p>
        <p>Oltre che reportage di matrimonio, offro diversi servizi quali:</p>
        <ul>
          <li>maternità</li>
          <li>newborn photography</li>
          <li>reportage</li>
          <li>book</li>
          <li>servizi di coppia in esterni o in studio</li>
          <li>ritratti</li>
        </ul>
        <p>Per saperne di più:</p>
        <p>
          <a
            href="mailto:giada.cazzola93@gmail.com"
            class="has-text-weight-bold"
          >giada.cazzola93@gmail.com</a>
          //
          <a href="tel:+393475045548" class="has-text-weight-bold">+39 347 5045548</a>
        </p>
      </div>

      <div class="column">
        <div class="box">
          <form action="https://formspree.io/giada.cazzola93@gmail.com" method="POST">
            <div class="field">
              <input class="input" name="name" placeholder="Nome">
            </div>

            <div class="field">
              <input class="input" type="email" name="email" placeholder="Email">
            </div>

            <div class="field">
              <input class="input" name="phone" placeholder="Telefono">
            </div>

            <div class="field">
              <textarea class="textarea" name="message" placeholder="Messaggio"/>
            </div>

            <input
              type="hidden"
              name="subject"
              value="Richiesta di contatto dal sito giadajoeycazzola.com"
            >
            <button class="button" type="submit">Invia</button>
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
      image: 'https://www.giadajoeycazzola.com/images/about_me.jpg'
    }
  }
}
</script>
