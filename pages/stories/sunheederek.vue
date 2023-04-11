<template>
  <story :title="title" :base-path="basePath" :image-count="imageCount">
    <div v-html="body[$i18n.locale]" />
  </story>
</template>

<script>
import Story from '@/components/Story'

const BASE_PATH = 'stories/sunheederek/mobile'
const IMAGE_COUNT = 69

export default {
  components: { Story },

  data() {
    return {
      title: 'Sunhee & Derek',
      description: {
        en: "What's the biggest craziest thing you've ever done? Make a marriage proposal and, in less than 24 hours, take a plane and fly from Texas to the Dolomites for a romantic elopement and to celebrate your love in a small mountain chapel!",
        it: "Qual è la pazzia più grande che tu abbia mai fatto? Fare una proposta di matrimonio e, in meno di 24 ore, prendere un aereo e volare dal Texas alle Dolomiti per una romantica fuga d'amore e per celebrare in una piccola cappella di montagna le proprie nozze!",
      },
      body: {
        en: `<p>"Hi Giada, we are leaving from Texas and the day after tomorrow we will be in the Dolomites
to get married! ALONE!"</p>
<p>This was the message I got from Sunhee and Derek!</p>
<p>Shocked and excited, I immediately gave my availability and ran to Alta Badia, near Ortisei.</p>
<p>The intimate and delicate ceremony, their sincere and unsettling tears, the hands that
intertwined like those of two actors in a classic film made me fall in love with this couple.</p>
<p>After the ceremony celebrated in a chapel inside the Freudenstein Castle, we headed to
Ortisei to take the helicopter that took us on a tour of the marvelous mountain range whose
beating heart is Monte Seceda.</p>
<p>Flying in a helicopter is fantastic, it was my first time and I was very excited but I couldn't
stop taking pictures! We had a privileged view over the whole valley, it felt like we could
touch the mountains with a finger! I thank Elikos for the professionalism with which he
accompanied us.</p>
<p>And here is the Seceda, who was looking at us and waiting for us!</p>
<p>We landed right there, next to Baita Sofie, the restaurant at the highest point of Val Gardena
and started a wonderful couple photo session, accompanied by a champagne toast at 2500
meters! What unforgettable moments.</p>
<p>I always thank my work for making me live similar experiences.</p>`,
        it: `<p>"Ciao Giada, noi stiamo partendo dal Texas e dopodomani saremo sulle Dolomiti per
sposarci! DA SOLI!"</p>
<p>Questo è stato il messaggio che ho ricevuto da Sunhee e Derek!</p>
<p>Io sconvolta ed eccitata, ho subito dato la mia disponibilità e sono corsa in Alta Badia, vicino
ad Ortisei.</p>
<p>La cerimonia intima e delicata, le loro lacrime sincere e spiazzanti, le mani che si
intrecciavano come quelle di due attori in un classico del cinema mi hanno fatto innamorare
di questa coppia.</p>
<p>Dopo la cerimonia celebrata in una cappella all'interno del Castello Freudenstein, ci siamo
diretti a Ortisei per prendere l'elicottero che ci ha fatto fare un giro sulla meravigliosa catena
montuosa che ha come cuore pulsante il Monte Seceda.</p>
<p>Volare in elicottero è fantastico, per me era la prima volta ed ero molto emozionata ma non
riuscivo a smettere di scattare fotografie! Avevamo una vista privilegiata su tutta la valle,
sembrava di poter toccare le montagne con un dito! Ringrazio Elikos per la professionalità
con cui ci ha accompagnati.</p>
<p>Ed ecco il Seceda, che imponente ci osservava e ci aspettava!</p>
<p>Siamo atterrati proprio lì, accanto alla Baita Sofie, il ristorante nel punto più alto della Val
Gardena e abbiamo iniziato una magnifica sessione fotografica di coppia, accompagnata da
un brindisi con champagne a 2500 metri! Che momenti indimenticabili.</p>
<p>Ringrazio sempre il mio lavoro per farmi vivere esperienze simili.</p>`,
      },
      image: `https://giadajoeycazzola.com/images/${BASE_PATH}/49.jpg`,
      url: `https://giadajoeycazzola.com/${BASE_PATH.replace(
        /\/mobile/g,
        ''
      )}/`,
      basePath: BASE_PATH,
      imageCount: IMAGE_COUNT,
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description[this.$i18n.locale],
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description[this.$i18n.locale],
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.url,
        },
      ],
    }
  },
}
</script>
