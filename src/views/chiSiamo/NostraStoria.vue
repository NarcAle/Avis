<template>
  <div class="chi_siamo">
    <h1 class="sede">{{titleNostraStoria}}</h1>
    <hr/>
    <div>
      <only-text :text=onlyText coloredText="40 anni" :text12=text12 ></only-text>
      <only-text coloredText="Grazie " :text12=text12_2 ></only-text>
      <only-text coloredText="Grazie " :text12=text12_3 ></only-text>
    </div>
  </div>
</template>

<script>
import onlyText from '../reusableComponent/onlyText.vue'
  export default {
    data() {
      return {
        onlyText: "Un percorso di ",
        text12: " è molto lungo e se ci pensiamo un bambino in un periodo simile diventa adulto, forma una famiglia,"+
        " si costruisce una carriera lavorativa, ha dei figli... anche la nostra sezione cresciuta, ha creato relazioni,"+
        " ha fa to notare la sua presenza sul territorio, ha organizzato eventi, iniziative, partecipato e collaborato con"+
        " altre organizzazioni di volontariato, con istituzioni civili, religiose per il raggiungimento di obiettivi comuni"+
        " e sempre volti a portare beneficio alla comunità nella quale operiamo.",
        text12_2: "alla volontà del gruppo dirigente, ma sempre e in primo luogo grazie al sostegno ed all'impegno dei donatori"+
        " che tutto questo è stato possibile",
        text12_3: "alla assidua presenza in eventi e manifestazioni, grazie all'impegno per far conoscere l'importanza del dono"+
        " del sangue che la sezione ha raggiunto traguardi importanti. Ma questa non vuole essere una cronaca, ma solo episodi"+
        " e frammenti, derivanti dalla volontà di persone che nel tempo hanno cercato di dare un contributo alla comunità.",
        titleNostraStoria: "La nostra storia",
      }
    },
    components: {
      onlyText,
    },
  }
</script>

<style lang="sass">
@import './chiSiamo'
</style>