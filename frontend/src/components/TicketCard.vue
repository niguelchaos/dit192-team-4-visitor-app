<template>
  <div>
      <b-card
        class="res-card overflow-hidden text-left"
        img-right
        no-body
        v-b-toggle="'reservation-details-' + ticket.name"
      >
      <b-button class="delBtn" v-on:click="deleteTicket">✕</b-button>

        <b-col class="card-img-col text-right">
          <b-card-img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58557/ticket-emoji-clipart-md.png"
            alt="Image"
            class="ticket-icon"
          ></b-card-img>
        </b-col>

        <b-col
          style="font-size: 0.75rem;"
          no-gutters
          class="card-text-col"
        >
          <b-card-title style="font-size: 1rem;" class="card-title">
            <span class="align-middle font-weight-bolder">{{
              ticket.name
            }}</span>
          </b-card-title>
        </b-col>
      </b-card>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'TicketCard',
  props: ['ticket'],
  methods: {
    deleteTicket: function() {
      const headers = {'Authorization': 'Bearer eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTI2M2FjNWEyYTNkMzM2ODE5Mjk1NSIsImlhdCI6MTYyMTI1NTA4NywiZXhwIjoxNjIxMzQxNDg3LCJhdWQiOiJ3ZWJhcHAiLCJpc3MiOiJ0ZWFtNGRiIiwic3ViIjoiMDcwMDExMDAxMSJ9.AQOKYg13xwpLzQPoyQ4pRS2jDcb0GNtIjEcMyOZua3VMRbG6GN8BpAFvCg_FvMdYibN_UJBWWSoyJsaVfEZA4zUOAY_-oKiFdJzmT68MGU0RbLSJs2vMzIF9Wsv9SJWtdj9j618ejP_UyXsD7r1WIlvXYbAChKQBkjaf20_Jn3bfN2jR'}
      Api.put('/auth/deleteTicket',
      { ticket: this.ticket.name },
      { headers })
    .then(res => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.delBtn {
  background: transparent;
  color: black;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0px;
}
.res-card {
   padding: 5%;
   margin: 3%;
   border-radius: 15px;
   /* height: 190px; */
}
.card-img-col {
  margin:0%;
  padding:0%;
}
.card-text-col {
  color: #2d3e4f;
  padding: 1%;
  padding-right: 3%;
  margin: 0%;
}
.ticket-icon {
  height:70px;
  width:70px;
  margin-left: auto;
}
.card-title {
  padding-top: 15%;
  padding-bottom: 1%;
  align-content: center;
}
.card-queue-text {
  padding: 0;
}
.card-link {
  color: #e28daf;
}
.btnrese{
  float: right;
  height:35px;
  width:88px;
  right: 10%;
  background-color: #388659;
}
</style>
