<template>
  <div class="sede_page">
    <h1 class="sede"> {{titleDoveSiamo}} </h1>
    <hr>
    <div class="map_and_description">
      <div>
        <h3 class="title">{{title}}</h3>
        <p class="titleODV">{{titleODV}}</p> <br/>
        <p class="address">{{address}}<br/>
          {{CAP}}, {{city}}  <br/>
          {{TEL}}: {{number}} <br/>
          {{CEL}}: {{cellNum}} <br/><br/>
          {{ORARIO}}:<br/> {{ora}}<br/><br/>
          {{MAIL}}: <a href="mailto:avisforlimpopoli@gmail.com"> {{mail}}</a><br/>
          {{PEC}}: <a href="mailto:forlimpopoli.comunale@pec.avis.it"> {{pec}}</a>
        </p>
      </div>
      <div class="containerMap">
          <iframe class="mapForlimpopoli" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.8661010324686!2d12.125305715385162!3d44.18922547910666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca6377c7e2acb%3A0x37ecb1c0cee96a99!2sCasa%20della%20Salute%20-%20Forlimpopoli%20e%20Bertinoro!5e0!3m2!1sit!2sit!4v1587142939745!5m2!1sit!2sit" 
          height="350" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      title: "Sede Avis Comunale Forlimpopoli",
      titleODV: "Organizzazione di volontariato ODV",
      address: "Via Duca D'Aosta,33",
      CAP: "47034",
      city: "Forlimpopoli (FC)",
      TEL: "Tel.",
      CEL: "Cel.",
      MAIL: "Email.",
      ORARIO: "Orario di apertura",
      ora: "Ogni mercoledì \ndalle 17.00  alle 19.00",
      number: "0543 733265",
      cellNum: "3888033323",
      mail: "avisforlimpopoli@gmail.com",
      PEC: "Pec.",
      pec: "forlimpopoli.comunale@pec.avis.it",
      titleDoveSiamo: "Dove ci troviamo"
    }
  }
}
</script>

<style lang="sass">
@import './sede.sass'
</style>