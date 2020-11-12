<template>
  <div id="app">
    <div id="nav">
      <Header />
      <navbar class="nav-bar"></navbar>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Navbar from './components/Navbar/Navbar.vue';
export default {
  name: 'app',
  components: {
    Header,
    navbar: Navbar,
    Footer,
  },
}
</script>

<style lang="sass">
  @import './components/Navbar/navbar.sass'
</style>
