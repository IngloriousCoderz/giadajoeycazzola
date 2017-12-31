<template>
<section class="container">
  <h1 class="is-size-1 has-text-centered">Contattami</h1>

  <div class="columns">
    <div class="column content has-vertically-aligned-content has-margin">
      <p>
        Se vuoi qualche informazione non esitare a contattarmi!
      </p>
      <p>
        Sono disponibile per:
      </p>
      <ul>
        <li>
          Lorem
        </li>
        <li>
          ipsum
        </li>
        <li>
          dolor
        </li>
        <li>
          e anche sit amet!
        </li>
      </ul>
    </div>

    <div class="column has-margin">
      <div class="box">
        <form@submit="onSubmit">
          <div class="field">
            <input class="input" v-model="name" placeholder="Nome" />
          </div>

          <div class="field">
            <input class="input" type="email" v-model="email" placeholder="Email" />
          </div>

          <div class="field">
            <input class="input" v-model="phone" placeholder="Telefono" />
          </div>

          <div class="field">
            <textarea class="textarea" v-model="message" placeholder="Messaggio" />
          </div>

          <button class="button" type="submit">Invia</button>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      message: null
    }
  },

  methods: {
    onSubmit(event) {
      event.preventDefault()

      const subject = `Richiesta di contatto dal sito giadajoeycazzola.com`

      const body =
        `${this.message}

-- ${this.name}
Email: ${this.email}
Telefono: ${this.phone}
`

      window.location.href = `mailto:giada.cazzola93@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
    }
  }
}
</script>
