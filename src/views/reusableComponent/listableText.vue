<template>
  <div class="listableText">
    <div class="uniqueBlock">
      <h3 class="text2 color">{{textTitle}}</h3><br/>
      <p class="text2">{{coloredText}} {{firstText}} <br/>{{secondText}}<br/> {{thirdText}} <br/> {{forthText}}</p>
      <p class="text2"> {{textBfList}}</p>
      <ul class="text2">
        <li>{{l1}}</li>
        <li>{{l2}}</li>
        <li>{{l3}}</li>
        <li>{{l4}}</li>
        <li>{{l5}}</li>
        <li>{{l6}}</li>
        <li>{{l7}} </li>
      </ul>
      <p class="text2">{{endText}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listableText',
  props: ['textTitle', 'coloredText', 'firstText', 'secondText', 'thirdText', 'forthText', 'textBfList', 'endText', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7']
}
</script>

<style lang="sass" scoped>
.listableText
  .uniqueBlock
    width: 95%
    margin: 0 auto
    padding: 1.5em 0
    .text2
      padding-left: 1.5em
      font-family: 'Montserrat'
      font-size: 1.3em
      text-align: justify
    .color
      color: red
</style>