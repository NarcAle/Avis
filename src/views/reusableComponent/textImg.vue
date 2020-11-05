<template>
  <div class="textImageBlock">
    <div class="uniqueBlock">
      <h3 class="text2 cursive color">{{titleSection}}</h3>
      <br/>
      <p class="text2">{{textSection}}</p>

      <h3 class="text2 cursive color">{{titleSectionTwo}}</p></h3>
      <br/>
      <img class="come_donare" src="../../assets/come_donare1.png"/>
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
    padding-left: 1.5em
    font-family: 'Montserrat'
    font-size: 1.3em
    text-align: left
  .cursive
    font-family: cursive
  .color
    color: red
  .come_donare
    max-width: 100%
</style>