<template>
  <div class="home_part container">
    <h1 class="donazione"> Unità di raccolta Avis </h1>
    <hr>
    <div class="map_and_descriptionX">
      <div class="divMiddle">
        <p class="divVieni">Vieni a donare in:</p>
        <p class="text2">Via C. Forlanini, 34<br/> 47121 Vecchiazzano - Forlì<br/>
          Padiglione nuovo Morgagni – Medicina Trasfusionale <br/>
          Tel. 0543 735070 - 0543 735071 </p>
        <br/>
        <p class="text2">E-mail: <a class="text hoverable" href="mailto:puntoavis.fo@auslromagna.it">puntoavis.fo@auslromagna.it</a></p>
        <p class="text2">Quesiti sanitari: <a class="text hoverable" href="mailto:lineadirettaconilmedico@avisforli.it">lineadirettaconilmedico@avisforli.it </a></p>
      </div>

      <div class="divMiddle">
        <h3 class="titleBig"><b>Dal lunedì al sabato ed esclusi i festivi</b></h3><br/>
        <p class="text2">APERTURA DEL SERVIZIO:
          <br/>
        dalle 7.15 alle 13.15 </p>
        <br/>
        <p class="text2">SEGRETERIA UDR:<br/>
          dalle 7.15 alle 13.15 <br/>
          Prenotazioni donazioni: dalle 11,00 alle 13,00 <br/>
          o tramite mail almeno 3 giorni prima scrivendo a: <a class="text hoverable" href="mailto:puntoavis.fo@auslromagna.it">puntoavis.fo@auslromagna.it</a></p>
        <br/>
        <p class="text2">DONAZIONI:<br/>
          dalle 7.30 alle 12.00 <br/>
          Giovedì pomeriggio*: dalle 15.00 alle 17.00
        <br/><br/>
        TRASFUSIONALE:<br/>
          Lunedì pomeriggio: dalle 13:00 alle 16.00 <br/>
          Giovedì pomeriggio*: dalle 15.00 alle 18.00
        <br/></p>
        <p class="text2">VISITE ASPIRANTI DONATORI:<br/>
          dalle 11.00 alle 12.00 <br/>
          Giovedì pomeriggio* dalle 16.30 alle 18.00</p>
        <br/>
        <p class="text2"> MEDICO PER DONATORI:<br/>
          (colloqui extra donazione) <br/>
          dalle 11.00 alle 12.30 (dal lunedì al venerdì) <br/>
          dalle 11.00 alle 12.00 (al sabato)<br/>
          Giovedì pomeriggio* dalle 16.30 alle 18.00</p>
        <br/>
        <p class="text2"><b> Per le donazioni al pomeriggio: sono esclusi i periodi dal 15/06 al 15/09.</b></p><br/><br/>
        <p class="text2"> Per INFO e PRENOTAZIONI:<br/>
          Segreteria  <b>0543-735070/735071 </b><br/>
          Prenotazioni donazioni: dalle 11.00 alle 13.00<br/>
          o tramite mail almeno 3 giorni prima scrivendo a: <a class="text hoverable" href="mailto:puntoavis.fo@auslromagna.it">puntoavis.fo@auslromagna.it</a></p>
        <br/>
      </div>
    </div>
    
    <only-text :text=text :text5=otherText></only-text>

    <only-text title="ASPIRANTI DONATORI" :text=textOnlyText></only-text>
  </div>
</template>

<style lang="sass">
@import './doveDonare.sass'
</style>

<script>
import onlyText from '../reusableComponent/onlyText.vue'
export default {
  data() {
    return {
      text: "Nel caso si doni al pomeriggio è possibile consumare anche il pranzo purché sia leggero, ovvero senza"+
      " latticini né grassi. È pertanto indicato mangiare pasta condita in modo semplice (olio, pomodoro), carne,"+
      " pesce, verdura, frutta, pane. È sempre bene presentarsi ben idratati bevendo acqua abbondantemente dal giorno precedente.",
      otherText: "Consigliatissimo, come anche per le donazioni mattutine, evitare attività faticose e allenamenti"+
      " sportivi il giorno precedente alla donazione e anche il giorno stesso.",
      textOnlyText: "Dopo aver compilato la modulistica prevista, l'aspirante donatore, se idoneo alla visita medica,"+
      " sarà inviato a fare un prelievo per esami di laboratorio (è quindi necessario il digiuno da almeno 3 ore e non"+
      " aver assunto latticini). Contestualmente si effettuerà anche l'elettrocardiogramma. E' necessario portare con sè"+
      " la propria tessera sanitaria."
    }
  },
  components: {
    onlyText
  }
}
</script>