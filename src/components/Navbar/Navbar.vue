<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" >
      <b-navbar-brand v-if="this.$store.state.widthWindow <= 992" to="/">{{navhome2}}</b-navbar-brand>
      <b-navbar-brand v-if="this.$store.state.widthWindow > 992" to="/">{{navhome}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="chi_siamo"></b-nav-item>  
          <b-nav-item-dropdown text="Chi siamo" right>
            <b-dropdown-item to="i_soci_fondatori">I soci fondatori</b-dropdown-item>
            <b-dropdown-item to="la_nostra_storia">La nostra storia</b-dropdown-item>
            <b-dropdown-item to="mission">Mission</b-dropdown-item>
            <b-dropdown-item to="consiglio_direttivo">Consiglio Direttivo</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Donazione" right>
            <b-dropdown-item to="la_donazione">La donazione</b-dropdown-item>
            <b-dropdown-item to="perchè_donare">Perchè Donare</b-dropdown-item>
            <b-dropdown-item to="come_donare">Come Donare</b-dropdown-item>
            <b-dropdown-item to="dove_donare">Dove Donare</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="unisciti_a_noi">Unisciti a noi</b-nav-item> 
          <b-nav-item to="news_media">News e media</b-nav-item>
          <b-nav-item to="sede">La nostra sede</b-nav-item> 
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data() {
    return {
      navhome: 'AVIS Comunale Forlimpopoli - ODV',
      navhome2: "AVIS Comunale Forlimpopoli",
    };
  }
};
</script>
