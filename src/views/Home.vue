<template>
  <div class="home">
    <div>
      <!--<img src="../assets/banner.jpg" style="margin: 0 auto; max-width:99%"/>-->
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
