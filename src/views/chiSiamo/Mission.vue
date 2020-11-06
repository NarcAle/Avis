<template>
  <div class="chi_siamo container">
    <h1 class="sede">{{titleMission}}</h1>
    <hr/>
     <div class="listableText">
      <div class="uniqueBlock">
        <p class="text2">{{coloredText}} {{firstText}} </p>
        <ul class="text2">
          <li>{{l1}}</li>
          <li>{{l2}}</li>
          <li>{{l3}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import listable from '../reusableComponent/listableText.vue'
  export default {
    data() {
      return {
        titleMission: "Mission",
        coloredText: "L'AVIS Comunale di Forlimpopoli ",
        firstText: "condivide con il resto del sistema AVIS la missione ed i valori: ",
        l1: "L'AVIS persegue la promozione della donazione del sangue intero o di una sua frazione, volontaria, periodica,"+
        " associata, non remunerata, anonima e consapevole..",
        l2: "AVIS è un'organizzazione di volontariato (ODV) ONLUS, costituita sia da soci persone fisiche, volontari,"+
        " che da soci persone giuridiche, società. AVIS è un'associazione apartitica, aconfessionale che non opera"+
        " discriminazione di razza, sesso, religione, lingua, nazionalità, che persegue finalità di solidarietà umana"+
        " ed esclude qualsiasi fine di lucro.",
        l3: "AVIS diffonde nella comunità locale di appartenenza i valori della solidarietà, della gratuità, della"+
        " partecipazione sociale e civile e della tutela del diritto alla salute"
      }
    },
    components: {
      listable,
    },
  }
</script>

<style lang="sass">
@import './chiSiamo'

.listableText
  .uniqueBlock
    width: 95%
    margin: 0 auto
    padding: 1.5em 0
    .text2
      padding-left: 0
      font-family: 'Montserrat'
      font-size: 1.3em
      text-align: justify
    .color
      color: red
@media (min-width: 992px)
  .listableText
    .uniqueBlock
      .text2
        padding-left: 1.5em
</style>