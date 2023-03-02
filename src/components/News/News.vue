<template>
  <div class="container">
    <div class="bannerVaccino">
      <div><p class="textBanner">Media Avis Forlimpopoli</p></div>
      <hr/>
      <div class="fiori">
        <img src="../../assets/vaccinoR.jpg" alt="vaccino" @click="redirectVaccino()" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli2.jpeg" alt="fiorimpopoli" class="hoverImg fiorimpopoli" @click="gotoGallery()"/>  
        <img src="../../assets/1.png" alt="FAQ" class="hoverImg fiorimpopoli" @click="gotoGallery2()"/>  
        <img src="../../assets/dictionary/1.png" alt="FAQ" class="hoverImg fiorimpopoli" @click="gotoGallery3()"/>  
        <img src="../../assets/knowThat/1.png" alt="FAQ" class="hoverImg fiorimpopoli" @click="gotoGallery4()"/>  
      </div>
    </div>
    <hr/>

    <!--<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Under_construction_icon-blue.svg" />-->
  </div>
</template>

<style lang="sass" scoped>
.fiori
  display: flex
  flex-wrap: wrap
  padding: 10px
  max-width: fit-content
 
.hoverImg
  width: 100%
  border-radius: 5px
  margin: 10px

.gallery1
  width: 50%
  .fiorimpopoli
    transform: rotate(180deg)
    

.middle 
  transition: .5s ease
  opacity: 0
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  text-align: center



@media screen and (min-width: 992px)
  .hoverImg
    width: 40%
</style>

<script>
export default {
  methods: {
    gotoGallery() {
      this.$router.push('/fiorimpopoli-gallery')
    },
    gotoGallery2(){
      this.$router.push('/faq')
    },
    gotoGallery3(){
      this.$router.push('/dictionary')
    },
    gotoGallery4(){
      this.$router.push('/know-that')
    },
    redirectVaccino() {
      this.$router.push('/news-vaccino')
    }
  }
}
</script>
