import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './custom.sass';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    widthWindow: window.screen.width
  }
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
