<template>
  <div class="container">
    <!-- BANNER NATALE
    <div>
      <h1 class="titleBanner"> Dalla Nostra associazione </h1>
      <img src="../assets/BabboNatale.png" class="hoverImg imgNatale" alt="Babbo Natale"/>  
    </div>-->
    <div class="bannerVaccino">
      <div><p class="textBanner">Notizie in evidenza</p></div>
      <hr/>
      <div class="styleImg">
        <img src="../assets/Natale.jpeg" class="hoverImg Natale" alt="dona"/>    
        <img src="../assets/vaccinoR.jpg" @click="redirectVaccino" class="hoverImg Natale" alt="vaccino"/>  
      </div>
    </div>
    <hr/>
    <div class="banner5X1000">
      <img src="../assets/Banner-5x1000.png" class="hoverImg" style="width:100%" alt="5x1000"/>
      <only-text :title2=titleBanner :text=onlyText :coloredText=colored :text12=text12
      :coloredText2=coloredText2 :text3=text13></only-text>     
    </div>
    <hr/>
    <only-text title2="IL PROBLEMA" :text=textHomeText></only-text>  
    <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>   
    <only-text title2="LA SOLUZIONE"></only-text> 
    <h1 class="titleBanner">Dona sangue o plasma</h1>
    <h3 class="titleTextBanner">Per iniziare a donare è sufficiente rispettare alcuni semplici requisiti</h3><br/><br/>
    <div class="flipflop">
      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <div>
              <img class="vc_single_image-img " src="../assets/name.svg" alt="Donatore" title="Donatore" /><br/><br/>
              <h1 class="titleBanner">18 - 60 anni</h1><br/><br/>
              <p class="infoFlip">Età necessaria per iniziare a donare.</p>
            </div>
          </div>
          <div class="back" >
            <!-- back content -->
            <div class="text">
              <h1 class="titleBanner">PER I DONATORI PERIODICI</h1><br/><br/>
              <p class="infoFlip">La donazione può essere consentita fino a 60 anni, previa valutazione clinica del medico.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <!-- front content -->
            <div>
              <img class="vc_single_image-img " src="../assets/weight-scale.svg" alt="Peso Donatore" title="Peso Donatore" /><br/><br/>
              <h1 class="titleBanner">50 kg</h1><br/><br/>
              <p class="infoFlip">Peso minimo necessario del donatore per effettuare una donazione.</p>
            </div>
          </div>
          <div class="back">
            <!-- back content -->
            <div class="text">
              <h1 class="titleBanner">PER UOMINI E DONNE</h1>
              <p class="infoFlip">Questa regola è valida per qualunque donatore, indipendentemente dal suo sesso.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <!-- front content -->
            <div>
              <img class="vc_single_image-img " src="../assets/heart.svg" alt="Donatore" title="Donatore" /><br/>
              <h1 class="titleBanner">Buono stato di salute</h1><br/><br/>
              <p class="infoFlip">Il donatore deve godere di un buono stato di salute per iniziare a donare.</p>
            </div>
          </div>
          <div class="back">
            <!-- back content -->
            <div class="text">
              <h1 class="titleBanner">VALORI NELLA NORMA</h1><br/><br/>
              <p class="infoFlip">La pressione arteriosa del donatore deve essere nella norma, la sua frequenza cardiaca tra i 50 e 100 battiti al minuto ed 
                emoglobina con valori minimi necessari. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div class="news">
      <div class="innerNews">
        <div>
          <div class="relatedNews">
            <p class="title">News correlate</p>
          </div>
          <div class="event">
            <b-carousel
              id="carousel-1"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              
            >
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100 hoverImg"
                    width="0"
                    height="0"
                    src="../assets/40anniversario2.jpg"
                    alt="image slot"
                    @click="redirect"
                  >
                </template>
              </b-carousel-slide>

              <!--<b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="0"
                    height="0"
                    src="../assets/40anniversario2.jpg"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>-->
            </b-carousel>
          </div>
        </div>
    </div>

    <div class="innerNews">
      <div class="relatedNews">
        <p class="title">Eventi sul territorio</p>
      </div>
      <div class="event">
        <p style="max-width:95%; margin:10px auto; text-align:justify">Al momento gli eventi sono sospesi a seguito delle recenti restrizioni COVID-19. </br>
          Speriamo di poter ritornare il prima possibile e di poter organizzare nuovi eventi.
        </p>
      </div>
    </div>
      
    </div>
  </div>
</template>

<script>
import onlyText from '../views/reusableComponent/onlyText.vue'

export default {
  data() {
    return {
      titleBanner: "Dona il tuo 5x1000 ad AVIS Forlimpopoli",
      onlyText: "Anche quest'anno potrai sostenere con la tua dichiarazione dei redditi",
      colored: " AVIS COMUNALE FORLIMPOPOLI. ",
      text12: "È facile e non comporta alcuna spesa aggiuntiva.\n"+
      "I modelli per la dichiarazione dei redditi CU, 730 e UNICO hanno uno spazio dedicato al 5 per mille, in cui puoi "+
      "firmare indicando il codice fiscale di",
      coloredText2: "AVIS Forlimpopoli 80014660403",
      text13: "nella sezione relativa al Sostegno degli enti"+ 
      "di volontariato. Anche chi non compila la dichiarazione dei redditi, ovvero chi ha solo il modello CU fornito dal "+
      "datore di lavoro o dall’ente erogatore della pensione, può destinare il 5 per mille.\n\nGrazie da AVIS Forlimpopoli!",
      textHomeText: "Il sangue umano è un prodotto naturale, non riproducibile artificialmente e indispensabile alla vita.\n"+
      "Indispensabile nei servizi di primo soccorso, in chirurgia nella cura di alcune malattie tra le quali quelle oncologiche e nei trapianti.\n"+
      "Pensa di essere tu al loro posto."
    }
  },
  components: {
    onlyText
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    redirect() {
      this.$router.push('/news')
    },
    redirectVaccino() {
      this.$router.push('/news-vaccino')
    }
  }
}

</script>

<style lang="sass">
@import './Home' 

</style>