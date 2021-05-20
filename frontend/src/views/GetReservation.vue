<template>
  <div class="pageTop">
      <b-card  class = "topcard">
        <h2 class ="title">{{object.name}}</h2>
        <p>Choose a timeslot to reserve below</p>
      </b-card>
      <br />
    <li v-for="item in object.timeslot" :key="item.id" style="list-style-type: none;">
      <b-card class="slotcard">
            <h4 class="card-title" style="font-size: 1.5rem;">{{item.slot}}</h4>
            <font-awesome-icon class="icon-card" :icon="['fas','clock']"></font-awesome-icon><p class= "time">{{item.time}} </p>
            <p class="text">Left Seat={{item.seat}}</p>
            <b-button v-b-modal.modal-1 class="btn btn-card bg-success mb-3" @click='sub(item)'>Choose</b-button>
            <span style="color:" class="align-left font-weight-bolder">
              <b-modal id="modal2" ok-only no-stacking header=no-stacking>
                <p v-if="item.seat>0" class="msg1" style="font-size: 1.5rem;">Reservation Completed!</p>
                <p v-if="item.seat<1" class="msg2" style="font-size: 1.5rem;color:red;">You can't reserve more!</p>
                <p v-if="item.seat==1" class="msg" style="font-size: 1.5rem;color:red;">One Resrvation left!</p>
              </b-modal>
            </span>
      </b-card>
      <br>
    </li>
    <br/>
  </div>
</template>
<script>
import { Api } from '@/Api'
export default {
  name: 'activity-card-item',
  props: ['activity', 'type', 'value'],
  data: function () {
    return {
      object: undefined
    }
  },
  beforeMount() {
    this.object = this.activity
    console.log(this.object)
  },
  methods: {
    emitResult(item) {
      console.log(this.object)
      this.$emit('input', item.seat)
    },
    sub(item) {
      if (item.seat > 0) {
        item.seat -= 1
        this.sendReservation(item)
      // this.result -= 1
      }
      this.emitResult(item)
    },
    sendReservation(item) {
      const token = localStorage.accessToken
      const headers = { 'Authorization': 'Bearer ' + token }
      Api.put('/auth/reservation', {
        reservation:
          [{
            name: item.name,
            slot: item.slot,
            time: item.time
          }]
      },
      { headers })
        .then(res => console.log(res))
    }
  }

}
</script>
<style scoped>
.topcard{
  border-radius: 10px;
  }
.slotcard{
border-radius: 10px;
height: 9.5rem;

}
.icon{
  margin-top:0%;
  margin-left: 0%;
}
 .btn-card{
   margin-left: 60%;
  margin-right: 0%;
  width: 35%;
  margin-top:3%;
  height:2rem;
 }
 .icon-card{
margin-top:0%;
position: absolute;
left: 5%;
color:pink;
width: 20px;
height: 20px;
 }
 .align-middle{
  position: absolute;
  left: 14%;
  width: 35%;
  top: 62%;
  padding: 10px;
 }
 .text{
position: absolute;
left: 8%;
top: 45%;
padding: 10px;
 }
 .modal-header {
    border-bottom: 0 none;
}
.time{
position: absolute;
left: 8%;
top: 33%;
padding: 10px;
}

.modal-footer {
  top: 0px;
}
</style>
