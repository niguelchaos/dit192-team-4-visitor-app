<template>
  <div class="pageTop">
      <br />
      <h2 class="title">Reservations</h2>
      <b-card  class = "topcard">
        <h2 class ="title">{{activity.name}}</h2>
        <p>Choose a timeslot to reserve below</p>
      </b-card>
      <br />
      <li v-for="item in slots" :key="item.id" style="list-style-type: none;">
      <b-card class="slotcard">
            <h4 class="card-title" style="font-size: 1.5rem;">{{item.slot}}</h4>
            <font-awesome-icon class="icon-card" style="color:pink;width: 20px; height: 20px;" :icon="['fas','clock']"></font-awesome-icon>{{item.time}}
            <p class="text">{{item.seat}}</p>
            <span style="color:" class="align-left font-weight-bolder">
              <b-button v-b-modal.modal-1 class="btn btn-card bg-success mb-3" type="submit">Choose</b-button>
              <b-modal class="mb-2" id="modal2" ok-only no-stacking header=no-stacking>
                <p style="font-size: 1.5rem;">Reservation Completed!</p>
              </b-modal>
            </span>
      </b-card>
      <br>
      </li>
      <br/>
  </div>
</template>
<script>
export default {
  name: 'activity-card-item',
  props: ['activity', 'type'],
  data: function () {
    return {
      slots: [
        { slot: 'Timeslot 1', time: '10:00-10:30 AM', seat: '45/50 seats left' },
        { slot: 'Timeslot 2', time: '10:30-11:00 AM', seat: '30/50 seats left' },
        { slot: 'Timeslot 3', time: '11:00-11:30 AM', seat: '15/50 seats left' },
        { slot: 'Timeslot 4', time: '11:30-12:00 AM', seat: '2/20 seats left' },
        { slot: 'Timeslot 5', time: '12:00-12:30 AM', seat: '2/20 seats left' },
        { slot: 'Timeslot 6', time: '1:00-1:30 PM', seat: '2/20 seats left' },
        { slot: 'Timeslot 7', time: '1:30-2:00 PM', seat: '8/20 seats left' },
        { slot: 'Timeslot 8', time: '2:30-3:00 PM', seat: '4/20 seats left' },
        { slot: 'Timeslot 9', time: '3:30-4:00 PM', seat: '3/20 seats left' },
        { slot: 'Timeslot 10', time: '4:30-5:00 PM', seat: '3/20 seats left' }
      ] }
  },
  methods: {
    buttonClick() {
      var i = 3
      // eslint-disable-next-line eqeqeq
      while (i > 0) {
        i--
        document.getElementById('dec').value = i
      }
    }

  }

}
</script>
<style scoped>
.topcard{
  margin-left: 32%;
  margin-right: 32%;
  border-radius: 10px;
}
.testcard{
margin-left: 35%;
margin-right: 35%;
border-radius: 10px;
height: 9.5rem;}
.slotcard{
margin-left: 35%;
margin-right: 35%;
border-radius: 10px;
height: 9.5rem;
}
.icon{
  margin-top:0%;
  margin-left: 0%;
}
.btn-test{
  margin-left: 20%;
  margin-right: 0%;
  width: 20%;
  margin-top:3%;
  height:2rem;
 }
 .btn-card{
   margin-left: 20%;
  margin-right: 0%;
  width: 20%;
  margin-top:3%;
  height:2rem;
 }
 .icon-card{
margin-top:0%;
margin-left: 0%;
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
left: 14%;
width: 35%;
top: 62%;
padding: 10px;
 }
 .modal-header {
    border-bottom: 0 none;
}

.modal-footer {
  top: 0px;
}
</style>
