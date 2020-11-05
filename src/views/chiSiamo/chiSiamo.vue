<template>
  <div class="chi_siamo">
    <!--<h1 class="sede">{{titleSoci}}</h1>
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
    <h1 class="sede">{{titleNostraStoria}}</h1>
    <hr/>
    <div>
      <only-text :text=onlyText coloredText="40 anni" :text12=text12 ></only-text>
      <only-text coloredText="Grazie " :text12=text12_2 ></only-text>
      <only-text coloredText="Grazie " :text12=text12_3 ></only-text>
    </div>
    <h1 class="sede">{{titleMission}}</h1>
    <hr/>-->
    <h1 class="sede">{{titleChiSiamo}}</h1>
    <hr/>
    <div class="container we-are">
      <table style="width:100%">
        <tr v-for = "rolesWithMember in roles" >
          <th>{{rolesWithMember.Ruolo}}</th>
          <td>{{rolesWithMember.Nome}}</td>
        </tr>
      </table>
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
        roles: [
          { Ruolo: "Presidente", Nome: 'Daniele Boccali' },
          { Ruolo: "Vice Presidente", Nome: '' },
          { Ruolo: "Tesoriere", Nome: 'Sergio Morelli' },
          { Ruolo: "Segretario", Nome: 'Dario Cerami' },
          { Ruolo: "Consigliere", Nome: 'Diana Dall\'Agata' },
          { Ruolo: "Consigliere", Nome: 'Vittorio Bagattoni' },
          { Ruolo: "Consigliere", Nome: 'Giuliano Sansolini' },
          { Ruolo: "Consigliere", Nome: 'Bruno Matteucci' },
          { Ruolo: "Consigliere", Nome: 'Riccardo Bacchi' },
          { Ruolo: "Consigliere", Nome: 'Franco Mauro Matteucci' },
          { Ruolo: "Consigliere", Nome: 'Capacci Valter' },
        ],
        titleSoci: "I soci fondatori",
        titleDati: "I dati della raccolta sangue nel 1977 a Forlimpopoli",
        titleChiSiamo: " Il nostro Consiglio Direttivo",
        titleNostraStoria: "La nostra storia", 
        titleMission: "La nostra missione"
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