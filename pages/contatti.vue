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
        <form action="https://formspree.io/giada.cazzola93@gmail.com" method="POST">
          <div class="field">
            <input class="input" name="name" placeholder="Nome" />
          </div>

          <div class="field">
            <input class="input" type="email" name="email" placeholder="Email" />
          </div>

          <div class="field">
            <input class="input" name="phone" placeholder="Telefono" />
          </div>

          <div class="field">
            <textarea class="textarea" name="message" placeholder="Messaggio" />
          </div>

          <input type="hidden" name="subject" value="Richiesta di contatto dal sito giadajoeycazzola.com" />
          <button class="button" type="submit">Invia</button>
        </form>
      </div>
    </div>
  </div>
</section>
</template>
