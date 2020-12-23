<template>
  <div class="container">
    <div class="bannerVaccino">
      <div><p class="textBanner">Notizie in evidenza</p></div>
      <hr/>
      <img src="../../assets/vaccinoR.jpg" alt="vaccino" @click="redirectVaccino" class="hoverImg" style="width: 50%: "/>    
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
.hoverImg
  width: 100%
  border: 1px solid black
  display: flex
  flex-wrap: wrap
@media screen and (min-width: 992px)
  .hoverImg
    width: 50%
   

</style>