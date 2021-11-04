<template>
  <div class="container">
    <div class="bannerVaccino">
      <div class="fiori">
        <img src="../../assets/fiorimpopoli1.jpeg" alt="vaccino" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli2.jpeg" alt="vaccino" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli3.jpeg" alt="vaccino" class="hoverImg"/>  
        <img src="../../assets/fiorimpopoli4.jpeg" alt="vaccino" class="hoverImg"/>  
      </div>
    </div>
    <hr/>
  </div>
</template>

<style lang="sass" scoped>
.fiori
  display: flex
  flex-wrap: wrap
  padding: 10px
 
.hoverImg
  width: 100%
  border-radius: 5px
  margin: 10px

@media screen and (min-width: 992px)
  .hoverImg
    width: 40%
   

</style>

