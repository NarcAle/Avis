<template>
  <div class="container">
    <div class="bannerVaccino">
      <div><p class="textBanner">Media Avis Forlimpopoli</p></div>
      <hr/>
      <div class="fiori">
        <img src="../../assets/vaccinoR.jpg" alt="vaccino" @click="redirectVaccino" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli1.jpeg" alt="vaccino" @click="redirectVaccino" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli2.jpeg" alt="vaccino" @click="redirectVaccino" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli3.jpeg" alt="vaccino" @click="redirectVaccino" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli4.jpeg" alt="vaccino" @click="redirectVaccino" class="hoverImg"/> 
      </div>
    </div>
    <hr/>

    <!--<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Under_construction_icon-blue.svg" />-->
  </div>
  
  
</template>

<script>
export default {
  methods: {
    redirectVaccino() {
      this.$router.push('/news-vaccino')
    }
  }
}
</script>

<style lang="sass" scoped>
.fiori
  display: flex
  flex-wrap: wrap
 
.hoverImg
  width: 100%
  border: 1px solid black

@media screen and (min-width: 992px)
  .hoverImg
    width: 50%
   

</style>