<template>
  <div class="container home_part">
    <h1 class="donazione"> Perchè Donare </h1>
    <hr>
    <div class="column-div">
        <div class="donazione_div">
            <div class="only">
                <only-text :title=titleOnlyText :text=textOnlyText :coloredText=coloredTextOnlyText
                :text12=text12OnlyText></only-text>
                <b-button class="buttonPrenota" @click="toInfo"> PRENOTA LA VISITA DI IDONEITÀ O DONAZIONE</b-button>
            </div>
            <hr>
            <h3 class="titlePercheDonare">Perchè donare:</h3> <br/>
            <div>
                <only-text :title=titleOnlyText2  :title2=titleOnly2 :text=textOnlyText2></only-text>
                <img class="donare" src="../../assets/donare2.jpg" style="width:100%"/>
            </div>
            <div>
                <only-text :title=titleOnlyText3 :title2=titleOnly22 :text=textOnlyText3></only-text>
                <img class="donare" src="../../assets/donazione-sangue.jpg" style="width:100%"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import onlyText from '../reusableComponent/onlyText.vue'
export default {
    data(){
        return{
            titleOnlyText: "Donare il sangue è un gesto di solidarietà...",
            textOnlyText: "Il dono del sangue è un'esperienza di ",
            coloredTextOnlyText: "vera solidarietà, valore civico ed etico e generosità ",
            text12OnlyText: "che permette di salvare tante vite umane. Il sangue umano è un prodotto naturale non riproducibile" +
                " artificialmente, indispensabile alla vita. La donazione è pertanto un atto volontario, gratuito, anonimo e" + 
                " responsabile da ripetere in modo periodico.",
            titleOnlyText2: "Per gli altri: ",
            titleOnly2: "Un gesto di grande consapevolezza e solidarietà.",
            textOnlyText2: "Il sangue umano è un presidio terapeutico vitale e insostituibile, non riproducibile artificialmente,"+
            " sempre più necessario in ragione del progresso della medicina e dell'aumento della vita media. Donare il sangue può"+
            " davvero salvare una vita: Molti bambini affetti da malattie ematologiche (leucemia, talassemia, ecc) così come le"+ 
            " persone con gravi emorragie per incidente possono essere salvati grazie al sangue donato. Così anche pazienti"+
            " cha subiscono interventi chirurgici possono avere necessità di impiego di globuli rossi concentrati e/o di plasma,"+
            " e/o di piastrine per problemi inerenti il decorso operatorio. Senza i donatori di sangue, non ci sarebbero i "+
            "trapianti di organi.",
            titleOnlyText3: "Per te stesso: ",
            titleOnly22: "Per tenere sotto controllo la tua salute, attraverso le visite e gli esami.",
            textOnlyText3: "Donare sangue periodicamente garantisce un controllo costante del nostro stato di salute,"+
            " attraverso le visite sanitarie e gli accurati esami di laboratorio. Abbiamo così la possibilità di conoscere"+
            " il nostro organismo e di vivere con maggiore tranquillità, sapendo che una buona diagnosi precoce eviterà l'aggravarsi"+
            " di disturbi latenti. L'atto della donazione è un momento di grande valore etico che non comporta alcun sacrificio né"+
            " danneggia in alcun modo la propria salute, essendo velocemente ricostituita dall'organismo la piccola quota di sangue"+
            " sottratta: tra l'altro il donatore gode di un ristoro adeguato dopo ogni donazione e, per i chi è lavoratore dipendente,"+
            " è prevista per legge una giornata di riposo conservando la normale retribuzione."
        }
    },
    methods: {
        toInfo(){
            this.$router.push("/unisciti_a_noi")
        }
    },
    components: {
        onlyText
    },
}
</script>

<style lang="sass">
@import './perchèDonare.sass'
</style>