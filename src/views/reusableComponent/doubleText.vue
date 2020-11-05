<template>
  <div class="container onlyTextBlock">
    <h1 class="textTitleGlogal">{{titleDT}}</h1>
    <div class="uniqueBlock">
      <h3 class="textSectionOne text2 color">{{titleSO}}</h3>
      <h3 class="textSubtitleSO text2 blue">{{subtitleSO}}</h3>
      <p class="text2" style="white-space: pre-wrap">{{textSO}}</p>
    </div>
    <div class="uniqueBlock">
      <h3 class="textSectionOne text2 color">{{titleST}}</h3>
      <h3 class="textSubtitleSO text2 blue">{{subtitleST}}</h3>
      <p class="text2" style="white-space: pre-wrap">{{textST}}</p>
    </div>
  </div>  
</template>


<script>
export default {
  name: 'onlyTextBlock',
  props: ['titleDT', 'titleSO', 'subtitleSO', 'textSO', 'titleST', 'subtitleST', 'textST']
}
</script>

<style lang="sass" scoped>
.onlyTextBlock
  .textTitleGlogal
    padding-left: 1.5em
    font-family: 'Montserrat'
    font-size: 1.5em
    text-align: left
    color: darkblue
  .uniqueBlock
    width: 95%
    margin: 0 auto
    padding: 1.5em 0
    text-align: left
    .text2
      padding-left: 1.5em
      font-family: 'Montserrat'
      font-size: 1.3em
      text-align: justify
    .color
      color: red
      font-weight: 500
    .blue
     color: #39F 
    .darkblue
      color: #004A7E
</style>