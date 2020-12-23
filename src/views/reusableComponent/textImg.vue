<template>
  <div class="textImageBlock">
    <div class="uniqueBlock">
      <h3 class="text2 color">{{titleSection}}</h3>
      <br/>
      <p class="text2">{{textSection}}</p>

      <h3 class="text2 color">{{titleSectionTwo}}</p></h3>
      <br/>
      <img class="come_donare" src="../../assets/come_donare1.png" alt="Come Donare" style="width:100%"/>
      <!--<img class="come_donare" :src="imgPath"/>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'textImg',
  props: ['titleSection','textSection','titleSectionTwo','imgPath']
}
</script>

<style lang="sass" scoped>
.textImageBlock
  .uniqueBlock
    width: 95%
    margin: 0 auto
    padding: 1.5em 0
  .text2
    padding-left: 0
    font-family: 'Montserrat'
    font-size: 1.3em
    text-align: left
  .color
    color: red
    font-size: 1.5em
  .come_donare
    max-width: 100%

@media (min-width: 992px)
  .textImageBlock
    .text2
      padding-left: 1.5em
</style>