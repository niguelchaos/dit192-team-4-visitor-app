<template>
  <div id="attractions" class="wrapper">
    <div class="pageTop">
      <p class="text-center">Here you can purchase tickets for entrance and other activities.</p>
    </div>
    <b-tabs align="ticket-tabs center" v-model="activeTab" >
      <b-tab title="Buy Tickets" active>
        <b-button to= "/tickets/entrance" class="ticketButton">Entrance</b-button>
        <b-button to="/tickets/singleticket" class="ticketButton">Single Ticket</b-button>
        <br />
        <b-button to="/tickets/bundleticket" class="ticketButton">Bundle Ticket</b-button>
        <b-button to="/tickets/fullpackage" class="ticketButton">Full Package</b-button>
      </b-tab>
      <b-tab title="My Tickets">
        <div class="my-ticket-main-div">
          <span v-if="!tickets.length">You have no tickets.</span>
          <ticket-card v-for="(t, i) in tickets" v-bind:key="i" :ticket="{name: t}"/>
        </div>
      </b-tab>
    </b-tabs>
    <div class="footer">
      <h2 class="footer-container__heading">BEFORE YOUR VISIT</h2>
      <p>Opening hours</p>
      <p>Activities in Dummy park</p>
      <p>Find us</p>
      <p>Food & Beverages</p>
      <p>Accomodation</p>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'
import TicketCard from '../components/TicketCard.vue'
export default {
  components: { TicketCard },
  data() {
    return {
      tickets: [],
      activeTab: 0
    }
  },
  created() {
    const token = localStorage.accessToken
    const headers = { 'Authorization': 'Bearer ' + token }
    Api.get('/auth/tickets', { headers })
      .then(res => {
        this.tickets = res.data.data
        if (res.data.data.length > 0) {
          this.activeTab = 1
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
.pageTop {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 1.5rem;
}
.my-ticket-main-div {
  min-height: 25rem;
}
.nav-tabs {
  border:none !important;
  background-color: white;
  width: fit-content;
  margin: auto;
  padding: 5px 5px 4px 5px !important;
  border-radius: 50px;
}
.nav-link {
  border-radius: 50px !important;
  color: #2c3e50 !important;
}
.nav-link.active {
  background-color: var(--color-pink) !important;
  color: #2c3e50 !important;
  font-weight: bold;
  border:none !important;
}
.tab-content{
  margin-top: 30px !important;
}

.card-main-col {
  margin: 0%;
  padding: 0%;
}

.ticketButton {
  background-color: #FFFFFF !important;
  color: #2c3e50 !important;
  padding-top: 20px !important;
  border: none !important;
  margin: 0px 10px 20px 10px;
  width: 130px;
  height: 65px;
  font-weight: bold !important;
  border-radius: 10px !important;
}
</style>
