import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Camels from './views/Camels.vue'
import Activities from './views/Activities.vue'
import Reservation from './views/Reservations.vue'
import Tickets from './views/Tickets.vue'
import Entrance from './views/Entrance.vue'
import SingleTicket from './views/SingleTicket.vue'
import BundleTicket from './views/BundleTicket.vue'
import FullPackage from './views/FullPackage.vue'
import Book from './views/Book.vue'
import Activity from './views/ActivityViews/Activity.vue'
import Account from './views/Account.vue'
import Attraction from './views/ActivityViews/Attraction.vue'
import Restaurant from './views/ActivityViews/Restaurant.vue'
import Game from './views/ActivityViews/Game.vue'
import Reserve from './views/Reserve.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import GetReservation from './components/GetReservation.vue'
import Confirmation from './views/Confirmation.vue'
import Policies from './views/Policies.vue'
import { Api } from './Api'
Vue.use(Router)

function verifyUser(to, from, next) {
  let target = to.name || 'account'
  if (localStorage.accessToken) {
    let authorization = {
      'Authorization': `Bearer ${localStorage.accessToken}` 
    }
  
    Api.get('auth/me', {headers: authorization})
      .then(res => {
        to.params.userData = res.data.data
        next()
      })
      .catch(err => {
        localStorage.removeItem('accessToken');
        next({name: 'login', params: { target: target }})
      })
  } else {
    next({name: 'login', params: { target: target }})
  }
}

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
      path: '/login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: true
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      props: true,
      beforeEnter: verifyUser
    },
    {
      path: '/camels',
      name: 'camels',
      component: Camels
    },
    {
      path: '/tickets/book',
      name: 'book',
      component: Book,
      props: true
    },
    {
      path: '/tickets/entrance',
      name: 'entrance',
      component: Entrance
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/activities/:id',
      name: 'activity',
      component: Activity,
      props: true
    },
    {
      path: '/activities/attractions/:id',
      name: 'attractions',
      component: Activity,
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
      component: Reservation,
      beforeEnter: verifyUser,
      props: true
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
      path: '/tickets/singleticket',
      name: 'singleticket',
      component: SingleTicket
    },
    {
      path: '/tickets/bundleticket',
      name: 'bundleticket',
      component: BundleTicket
    },
    {
      path: '/tickets/fullpackage',
      name: 'fullpackage',
      component: FullPackage
    },
    {
      path: '/confirmation/:id',
      name: 'confirmation',
      component: Confirmation,
      props: true
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets,
      beforeEnter: verifyUser
    },
    {
      path: '/home/policies',
      name: 'policies',
      component: Policies
    }
  ]
})
