import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Camels from './views/Camels.vue'
import Activities from './views/Activities.vue'
import Reservation from './views/Reservations.vue'
import TicketPrice from './views/TicketPrices.vue'
import Entrance from './views/Entrance.vue'
import SingleTicket from './views/SingleTicket.vue'
import BundleTicket from './views/BundleTicket.vue'
import FullPackage from './views/FullPackage.vue'
import Book from './views/Book.vue'
import Signin from './views/Signin.vue'
import Attraction from './views/ActivityViews/Attraction.vue'
import Restaurant from './views/ActivityViews/Restaurant.vue'
import Game from './views/ActivityViews/Game.vue'
import Reserve from './views/Reserve.vue'
import GetReservation from './components/GetReservation.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/camels',
      name: 'camels',
      component: Camels
    },
    {
      path: '/ticketprices/entrance/book',
      name: 'entrancebook',
      component: Book
    },
    {
      path: '/ticketprices/singleticket/book',
      name: 'singlebook',
      component: Book
    },
    {
      path: '/ticketprices/bundleticket/book',
      name: 'bundlebook',
      component: Book
    },
    {
      path: '/ticketprices/fullpackage/registerandbook',
      name: 'registerandbook',
      component: Signin
    },
    {
      path: '/ticketprices/entrance',
      name: 'entrance',
      component: Entrance
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/activities/attractions/:id',
      name: 'attractions',
      component: Attraction,
      props: true
    },
    {
      path: '/activities/restaurants/:id',
      name: 'restaurants',
      component: Restaurant,
      props: true
    },
    {
      path: '/activities/games/:id',
      name: 'games',
      component: Game,
      props: true
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: Reservation
    },
    {
      path: '/reservations/reserve',
      name: 'reserve',
      component: Reserve
    },
    {
      path: '/reservations/reserve/getreservation',
      name: 'getreservation',
      component: GetReservation
    },
    {
      path: '/ticketprices/singleticket',
      name: 'singleticket',
      component: SingleTicket
    },
    {
      path: '/ticketprices/bundleticket',
      name: 'bundleticket',
      component: BundleTicket
    },
    {
      path: '/ticketprices/fullpackage',
      name: 'fullpackage',
      component: FullPackage
    },
    {
      path: '/ticketprices',
      name: 'ticketprices',
      component: TicketPrice
    }
  ]
})
