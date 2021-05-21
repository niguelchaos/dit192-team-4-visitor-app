import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Camels from './views/Camels.vue'
import Activities from './views/Activities.vue'
import Reservations from './views/Reservations.vue'
import Tickets from './views/Tickets.vue'
import Entrance from './views/Entrance.vue'
import SingleTicket from './views/SingleTicket.vue'
import BundleTicket from './views/BundleTicket.vue'
import FullPackage from './views/FullPackage.vue'
import Book from './views/Book.vue'
import Activity from './views/ActivityViews/Activity.vue'
import Account from './views/Account.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Confirmation from './views/Confirmation.vue'
import Policies from './views/Policies.vue'
import GetReservation from './views/GetReservation.vue'
import { Api } from './Api'
Vue.use(Router)

function verifyUser(to, from, next) {
  let target = to.name || 'account'
  if (localStorage.accessToken) {
    let authorization = {
      'Authorization': `Bearer ${localStorage.accessToken}`
    }

    Api.get('auth/me', { headers: authorization })
      .then(res => {
        to.params.userData = res.data.data
        next()
      })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('accessToken')
        next({ name: 'login', params: { target: target } })
      })
  } else {
    next({ name: 'login', params: { target: target } })
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: true,
      meta: {
        title: 'Sign in'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: true,
      meta: {
        title: 'Sign up'
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      props: true,
      beforeEnter: verifyUser,
      meta: {
        title: 'Account'
      }
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
      props: true,
      meta: {
        title: 'Tickets & Prices'
      }
    },
    {
      path: '/tickets/entrance',
      name: 'entrance',
      component: Entrance,
      meta: {
        title: 'Tickets & Prices'
      }
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities,
      meta: {
        title: 'Activities'
      }
    },
    {
      path: '/activities/:id',
      name: 'activity',
      component: Activity,
      props: true,
      meta: {
        title: 'Activities'
      }
    },
    {
      path: '/reservations',
      name: 'reserve',
      component: Reservations,
      beforeEnter: verifyUser,
      props: true,
      meta: {
        title: 'Reservations'
      }
    },
    {
      path: '/reservations/reserve/getreservation/:id',
      name: 'getreservation',
      component: GetReservation,
      props: true,
      meta: {
        title: 'Reservations'
      }
    },
    {
      path: '/tickets/singleticket',
      name: 'singleticket',
      component: SingleTicket,
      meta: {
        title: 'Tickets & Prices'
      }
    },
    {
      path: '/tickets/bundleticket',
      name: 'bundleticket',
      component: BundleTicket,
      meta: {
        title: 'Tickets & Prices'
      }
    },
    {
      path: '/tickets/fullpackage',
      name: 'fullpackage',
      component: FullPackage,
      meta: {
        title: 'Tickets & Prices'
      }
    },
    {
      path: '/confirmation/:id',
      name: 'confirmation',
      component: Confirmation,
      props: true,
      meta: {
        title: 'Confirmation'
      }
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets,
      beforeEnter: verifyUser,
      meta: {
        title: 'Tickets & Prices'
      }
    },
    {
      path: '/home/policies',
      name: 'policies',
      component: Policies,
      meta: {
        title: 'Policies'
      }
    }
  ]
})
