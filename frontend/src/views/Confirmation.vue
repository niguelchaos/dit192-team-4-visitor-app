<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="activity_card">
            <h4 class="title">Thank you for your purchase!</h4>
            <p><strong>Order number: </strong><i>{{id}}</i></p>
            <p><strong>Ticket: </strong><i>{{ticket.type}}</i></p>
            <p><strong>Age: </strong><i>{{ticket.age}}</i></p>
            <p><strong>Amount: </strong><i>{{ticket.amount}}</i></p>
            <p><strong>Total: </strong><i>{{ticket.amount * ticket.price}} SEK</i></p>
          </div>
          <div class="activity_card">
            <h5>Customer details</h5>
            <br />
            <p><b>Name: </b>{{details.name}}</p>
            <p><b>Card number: </b> **** **** **** {{details.number.slice(details.number.length - 4)}}</p>
          </div>
          <div class="activity_card">
           <b-button to="/tickets" class="main_button">Back to my tickets</b-button>
          </div>
        </b-col>
      </b-row>
      <br />
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'Confirmation',
  props: {
    details: {
      type: Object,
      required: false
    },
    ticket: {
      type: Object,
      required: false
    },
    id: {
      type: Number,
      required: false
    }
  },
  created() {
    // activity object is not passed with props (i.e page is reloaded) => fetch the activity again
    if (!this.details) {
      this.details = {
        name: 'NaN',
        number: 'NaN'
      }
    } else {
      const token = localStorage.accessToken
      const headers = { 'Authorization': 'Bearer ' + token }
      Api.put('/auth/ticket', {
        ticket: this.ticket.type + ' (' + this.ticket.age + ')'
      }, { headers })
        .then(res => {
          this.tickets = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.activity_card {
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  background: white;
  margin-top: 15px;
  text-align: left;
  overflow: hidden;
}
.image {
  width: 100%;
}
.main_button {
    background: var(--color-green) !important;
    width: 100%;
}
</style>
