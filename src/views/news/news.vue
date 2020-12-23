<template>
  <div class="home">
    <div style="padding: 30px 0">
      <img alt="Anniversario" src="../../assets/40anniversario2.jpg"/>
      <onlyText :text=text />
    </div>
  </div>
</template>

<script>
import onlyText from '../reusableComponent/onlyText.vue'

export default {
  data() {
    return {
      text: "Il gruppo dirigente ha voluto rendere unico e memorabile questo compleanno lasciando un segno indelebile"+
      " a monito delle generazioni future. \nHa cosi pensato di realizzare e donare alla città di Forlimpopoli un monumento. "+
      "Tale opera che verrà collocata all'ingresso del parcheggio di via Pertini, parcheggio che nell'occasione verrà intitolato "+
      " \"Ai donatori di sangue\". \n Monumento che vuole rappresentare l'albero della vita ed il legame reciproco e indissolubile"+
      " fra vita, dono, sangue, donatori, in un tutt'uno che è la vita."
    }
  },
  components: {
    onlyText
  }
}
</script>
