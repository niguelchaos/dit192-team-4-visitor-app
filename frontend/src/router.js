import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Camels from "./views/Camels.vue";
import Activities from "./views/Activities.vue";
import Reservation from "./views/Reservations.vue";
import TicketPrice from "./views/TicketPrices.vue";
import Activity from "./views/Activity.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/camels",
      name: "camels",
      component: Camels
    },
    {
      path: "/activities",
      name: "activities",
      component: Activities
    },
    {
      path: "/activities/:id",
      name: "activity",
      component: Activity,
      props: true
    },
    {
      path: "/reservations",
      name: "reservations",
      component: Reservation
    },
    {
      path: "/ticketprices",
      name: "ticketprices",
      component: TicketPrice
    }
  ]
});
