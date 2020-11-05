<template>
  <div class="onlyTextBlock">
    <div class="uniqueBlock">
      <h3 class="text2 color">{{title}} <p class="darkblue">{{title2}}</p></h3>
      <h3 class="text2 color center">{{titleX}}</h3>
      <p class="text2" style="white-space: pre-wrap">{{text}} <b class="darkblue">{{coloredText}}</b>{{text12}} 
      <b class="darkblue">{{coloredText2}}</b> {{text3}} <b class="darkblue">{{coloredText3}}</b> {{text4}} </p>
      <p class="text2">{{text5}}</p>
    </div>
  </div>  
</template>


<script>
export default {
  name: 'onlyTextBlock',
  props: ['title', 'title2', 'titleX', 'text', 'coloredText', 'text12', 'coloredText2', 'text3', 'coloredText3', 'text4', 'text5']
}
</script>

<style lang="sass" scoped>
.onlyTextBlock
  .uniqueBlock
    width: 95%
    margin: 0 auto
    padding: 1.5em 0
    .center
      text-align: center !important
    .text2
      padding-left: 1.5em
      font-family: 'Montserrat'
      font-size: 1.3em
      text-align: justify
    .color
      font-size: 1.5em
      color: red
      font-weight: 500
    .darkblue
      color: #004A7E
    .title2
      color: lightblue
</style>