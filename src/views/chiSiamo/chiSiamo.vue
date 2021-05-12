<template>
  <div class="chi_siamo container">
    <h1 class="sede">{{titleChiSiamo}}</h1>
    <hr/>
    <img class="fotoconsiglio" src="../../assets/consiglio.jpeg" alt="Il nuovo consiglio direttivo"/>
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
          { Ruolo: "Vice Presidente Vicario", Nome: 'Giuliano Santolini' },
          { Ruolo: "Vice Presidente", Nome: 'Stefania Forti' },
          { Ruolo: "Tesoriere", Nome: 'Sergio Morelli' },
          { Ruolo: "Tesoriere Vicario", Nome: 'Elisa Leoni' },
          { Ruolo: "Segretario", Nome: 'Vittorio Bagattoni' },
          { Ruolo: "Segretario Vicario", Nome: 'Dario Cerami' },
          { Ruolo: "Consigliere Provinciale", Nome: 'Riccardo Bacchi' },
          { Ruolo: "Rappresentante della Consulta", Nome: 'Valter Capacci' },
          { Ruolo: "Consigliere", Nome: 'Bruno Matteucci' },
          { Ruolo: "Consigliere", Nome: 'Elisa Berni' },
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