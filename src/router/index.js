import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SociFondatori from '../views/chiSiamo/SociFondatori.vue'
import NostraStoria from '../views/chiSiamo/NostraStoria.vue'
import Mission from '../views/chiSiamo/Mission.vue'
import ConsiglioDirettivo from '../views/chiSiamo/chiSiamo.vue'
import Donazione from '../views/Donazione/laDonazione.vue'
import PerchèDonare from '../views/Donazione/perchèDonare.vue'
import ComeDonare from '../views/Donazione/comeDonare.vue'
import DoveDonare from '../views/Donazione/doveDonare.vue'
import Sede from '../views/doveSiamo/sede.vue'
import UniscitiA_Noi from '../views/unisciti/uniscitiAnoi.vue'
import news from '../views/news/news.vue'
import newsVaccino from '../views/news/newsVaccino.vue'
import newsBurioni from '../views/news/newsBurioni.vue'
import newsMedia from '../components/News/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/i_soci_fondatori',
    name: 'i_soci_fondatori',
    component: SociFondatori
  },
  {
    path: '/la_nostra_storia',
    name: 'la_nostra_storia',
    component: NostraStoria
  },
  {
    path: '/mission',
    name: 'mission',
    component: Mission
  },{
    path: '/consiglio_direttivo',
    name: 'consiglio_direttivo',
    component: ConsiglioDirettivo
  },
  {
    path: '/la_donazione',
    name: 'la_donazione',
    component: Donazione
  },
  {
    path: '/perchè_donare',
    name: 'perchè_donare',
    component: PerchèDonare
  },
  {
    path: '/come_donare',
    name: 'come_donare',
    component: ComeDonare
  },
  {
    path: '/dove_donare',
    name: 'dove_donare',
    component: DoveDonare
  },
  {
    path: '/sede',
    name: 'Sede',
    component: Sede
  },
  {
    path: '/unisciti_a_noi',
    name: 'unisciti_a_noi',
    component: UniscitiA_Noi
  },
  {
    path: '/news_media',
    name: 'news_e_media',
    component: newsMedia
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/news-vaccino',
    name: 'news-vaccino',
    component: newsVaccino
  },
  {
    path: '/news-burioni',
    name: 'news-burioni',
    component: newsBurioni
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
