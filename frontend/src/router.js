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
import Book from './views/Book.vue'
import Attraction from './views/ActivityViews/Attraction.vue'
import Restaurant from './views/ActivityViews/Restaurant.vue'
import Game from './views/ActivityViews/Game.vue'

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
      path: '/entrance/book',
      name: 'book',
      component: Book
    },
    {
      path: '/ticketsprices/entrance',
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
      path: '/ticketsprices/singleticket',
      name: 'singleticket',
      component: SingleTicket
    },
    {
      path: '/ticketsprices/bundleticket',
      name: 'bundleticket',
      component: BundleTicket
    },
    {
      path: '/ticketprices',
      name: 'ticketprices',
      component: TicketPrice
    }
  ]
})
