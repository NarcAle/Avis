<template>
  <div class="twoBlocks">
    <div class="leftBlock">
      <h3 class="text2 darkblue">{{title}}</h3>
      <br/>
      <p class="text2" style="white-space: pre-wrap">{{textRL}}</p>
    </div>
    
    <div class="rightBlock">
      <h3 class="text2 darkblue">{{titleSectionTwoRL}}</h3>
      <br/>
      <p class="text2" style="white-space: pre-wrap">{{textSectionTwoRL}}</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'twoBlocksComp',
  props: ['title','textRL','titleSectionTwoRL','textSectionTwoRL']
}
</script>

<style lang="sass" scoped>
.twoBlocks
  display: flex
  flex-direction: column
  .leftBlock
    width: 90%
    padding: 1em 0
    text-align: justify
    .text2
      font-family: 'Montserrat'
      font-size: 1.3em
    .darkblue
      color: #004A7E
  .rightBlock
    width: 90%
    padding: 1em 0
    text-align: justify
    .text2
      font-family: 'Montserrat'
      font-size: 1.3em
    .darkblue
      color: #004A7E

@media (min-width: 600px)
  .twoBlocks
    display: flex
    flex-direction: column
    .leftBlock
      width: 50%
      padding: 1em 0
      text-align: justify
      .text2
        font-family: 'Montserrat'
        font-size: 1.3em
      .darkblue
        color: #004A7E
    .rightBlock
      width: 50%
      padding: 1em 0
      text-align: justify
      margin: 0 55%
      .text2
        font-family: 'Montserrat'
        font-size: 1.3em
      .darkblue
        color: #004A7E
        
</style>

