<template>
  <div class="container home_part">
    <h1 class="donazione"> La Donazione </h1>
    <hr>
    <div class="donazione_div">
      <div>
        <columnTextImg :textTitle=textTitle :firstText=firstText
                      :secondText=secondText :sndPartTwo=sndPartTwo
                      :thirdText=thirdText :trdPartTwo=trdPartTwo
                      :forthText=forthText :frtPartTwo=frtPartTwo :frtPartThree=frtPartThree
                      :fiveText=fivePart :fvPartTwo=fvPartTwo :fvPartThree=fvPartThree>
        </columnTextImg>
      </div>
    </div>
  </div>
</template>

<script>
import columnTextImg from '../reusableComponent/columnTextImg.vue'

export default {
  name:"laDonazione",
   data: function(){
    return{
      textTitle: "Donazione di sangue anonima, gratuita, periodica e responsabile.",
      firstText: "Il sangue umano è un prodotto naturale, indispensabile alla vita e soprattutto non riproducibile artificialmente.",
      secondText: "Ma non ce n'è mai abbastanza.",
      sndPartTwo: "Ogni giorno, per tutti i giorni dell'anno, il sangue è una necessità per molti uomini, donne e bambini, "+
                  "alle prese con interventi delicati.",
      thirdText: "L'Avis si impegna per promuovere la donazione di sangue ",
      trdPartTwo: "anonima, gratuita, periodica e responsabile.",
      forthText: "Nessun ente od organismo istituzionale può provvedere in questo delicato settore. L'unica risposta possibile,"+
                 " seria e responsabile, può venire solamente dalla ",
      frtPartTwo: "solidarietà dei cittadini, cioè da tutti noi",
      frtPartThree: ", che siamo fornitori ed utenti di questo indispensabile mezzo terapeutico.",
      fivePart: "In questo senso",
      fvPartTwo: "la donazione è un dovere civico",
      fvPartThree: ": nessuno può essere obbligato a donare, ma la consapevolezza che il sangue è un farmaco non sintetizzabile"+
                  " artificialmente deve spingere a donare tutti coloro che sono in buona salute per poterlo fare e hanno i "+
                  "requisiti di idoneità."
    }
  },
  components: {
    columnTextImg
  },
}
</script>
