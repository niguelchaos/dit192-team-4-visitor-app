import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Camels from './views/Camels.vue'
import Activity from './views/Activities.vue'
import Reservation from './views/Reservations.vue'
import TicketPrice from './views/TicketPrices.vue'
import Entrance from './views/Entrance.vue'
import SingleTicket from './views/SingleTicket.vue'
import Book from './views/Book.vue'

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
      component: Activity
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
      path: '/ticketprices',
      name: 'ticketprices',
      component: TicketPrice
    }
  ]
})
