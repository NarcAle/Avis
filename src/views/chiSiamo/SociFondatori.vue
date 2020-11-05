<template>
  <div class="chi_siamo">
    <h1 class="sede">{{titleSoci}}</h1>
    <hr/>
    <only-text :text=onlyMyText ></only-text>
    <h3 class="dati">{{titleDati}}</h3>
    <div class="list">
      <p class="textList">Al momento della fondazione la sezione contava:</p>
      <ul class="startList">
        <li ><b style="color: red">Donatori: </b> <b style="color: darkblue">n. 70</b></li>
        <li><b style="color: red">Donazioni: </b> <b style="color: darkblue">n. 280</b></li>
        <li><b style="color: red">Sangue raccolto: </b> <b style="color: darkblue">70 litri circa</b></li>
      </ul>
      <p class="textList">Dati dell'epoca riportano che il fabbisogno dell'ospedale di Forlimpopoli era di 200 lt. di sangue, 25 lt. 
        di plasma ed altri emoderivati.</p>
    </div>
  </div>
</template>

<script>
import onlyText from '../reusableComponent/onlyText.vue'
  export default {
    data() {
      return {
        onlyMyText: "In questo momento commemorativo il primo ricordo e riconoscimento va a quelle ventiquattro persone,"+
        " o meglio, ad essere precisi erano ventiquattro donatori che firmarono la richiesta per la costituzione della AVIS"+
        " Comunale di Forlimpopoli. \n\nFu Così Che grazie all'impegno di questi donatori e di altri volontari, "+
        "il giorno 27/03/1977, presso la sala convegni dell'Ospedale Civile di Forlimpopoli, fu costituita la nostra "+
        "sezione Comunale. In quell'occasione erano presenti 46 donatori volontari. \n\nFurono poi avviate le pratiche "+
        "di omologazione e riconoscimento, e la gestione della neonata sezione fu affidata al Sig. Mariani Piero quale Commissario. "+
        "Solo ad operazioni ultimate di riconoscimento della sezione venne eletto il primo Consiglio di Amministrazione e "+
        "lo stesso Mariani ne fu eletto Presidente.",
        
        titleSoci: "I soci fondatori",
        titleDati: "I dati della raccolta sangue nel 1977 a Forlimpopoli"
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