<template>
  <section class="container">
    <h1 class="is-size-1 has-text-centered">
      {{ title }}
    </h1>

    <article class="content">
      <p
        class="
          is-size-7 is-italic
          has-text-centered-mobile has-text-right-desktop
        "
      >
        &mdash; {{ date }} &mdash;
      </p>
      <slot>Here goes the article.</slot>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    date: { type: String, default: '' },
  },
}
</script>
