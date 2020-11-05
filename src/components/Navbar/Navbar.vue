<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" >
      <b-navbar-brand href="/">{{navhome}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="chi_siamo"></b-nav-item>  
          <b-nav-item-dropdown text="Chi siamo" right>
            <b-dropdown-item href="i_soci_fondatori">I soci fondatori</b-dropdown-item>
            <b-dropdown-item href="la_nostra_storia">La nostra storia</b-dropdown-item>
            <b-dropdown-item href="mission">Mission</b-dropdown-item>
            <b-dropdown-item href="consiglio_direttivo">Consiglio Direttivo</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Donazione" right>
            <b-dropdown-item href="la_donazione">La donazione</b-dropdown-item>
            <b-dropdown-item href="perchè_donare">Perchè Donare</b-dropdown-item>
            <b-dropdown-item href="come_donare">Come Donare</b-dropdown-item>
            <b-dropdown-item href="dove_donare">Dove Donare</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="unisciti_a_noi">Unisciti a noi</b-nav-item> 
          <b-nav-item href="news_media">News e media</b-nav-item> 
          <b-nav-item href="sede">La nostra sede</b-nav-item> 
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
    };
  },
};
</script>
