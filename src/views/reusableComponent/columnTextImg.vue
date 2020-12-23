<template>
  <div class="donazione_">
    <div class="divText">
      <h3 class="text2 color">{{textTitle}}</h3>
      <p class="text2">{{firstText}}</p>
      <p class="text2"><b class="blue"> {{secondText}}</b> {{sndPartTwo}} </p>
      <p class="text2"><b class="darkblue">{{thirdText}}</b>{{trdPartTwo}}</p>
      <p class="text2">{{forthText}} <strong> {{frtPartTwo}} </strong>{{frtPartThree}}</p>
      <p class="text2">{{fiveText}} <b class="darkblue">{{fvPartTwo}}</b>{{fvPartThree}}</p>
    </div>
    <div class="img-div">
      <img class="imgDonazione" src="../../assets/donare.jpg" alt="Donare" style="width:100%"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'columnTextImg',
  props: ['textTitle', 'firstText', 'secondText', 'sndPartTwo', 'thirdText', 'trdPartTwo', 'forthText', 'frtPartTwo', 'frtPartThree', 'fiveText', 
  'fvPartTwo', 'fvPartThree']
}
</script>

<style lang="sass" scoped>
.donazione_
  .divText
    width: 95%
    margin: 0 auto
    padding: 1.5em 0
    .text2
      padding-left: 0
      font-family: 'Montserrat'
      font-size: 1.3em
      text-align: left
      font-weight: 500
    .color
      color: red
      font-size: 1.5em
    .blue
      color: #39F
      font-weight: 600
    .darkblue
      color: #004A7E
  .img-div
    padding: 30px 0 
    .imgDonazione
      width: 100%

@media (min-width: 992px)
  .donazione_
    .divText
      .text2
        padding-left: 1.5em 
</style>
