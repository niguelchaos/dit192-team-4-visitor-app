<template>
  <div class="pageTop">
      <br />
      <h2 class="title">Reservations</h2>
      <b-card  style="margin-left: 700px;margin-right: 700px;border-radius: 10px;">
        <h2 class ="title">{{activity.name}}</h2>
        <p>Choose a timeslot to reserve below</p>
      </b-card>
      <br />
      <div class="card" style="margin-left: 710px;margin-right: 710px;border-radius: 10px;">
        <div class="card-body">
          <h4 class="card-title" style="font-size: 1.5rem;">Timeslot 0</h4>
          <font-awesome-icon style="color:pink;width: 20px; height: 20px;" :icon="['fas','clock']"></font-awesome-icon> 3:00 - 4:30 pm
          <span style="color:" class="align-left font-weight-bolder">
            <a v-b-modal.modal-1 class="btn btn-primary bg-success mb-3" type="submit">Choose</a>
            <b-modal class="mb-3" id="modal-1" ok-only no-stacking header=no-stacking>
              <p style="font-size: 1.5rem;">Reservation Completed!</p>
            </b-modal>
          </span>
          <p class="align-middle">Left Seat 20/50</p>
        </div>
      </div>
      <br />
      <li v-for="item in slots" :key="item.id" style="list-style-type: none;">
      <div class="card" style="margin-left: 710px;margin-right: 710px;border-radius: 10px;">
        <div class="card-body">
            <h4 class="card-title" style="font-size: 1.5rem;">{{item.slot}}</h4>
            <font-awesome-icon style="color:pink;width: 20px; height: 20px;" :icon="['fas','clock']"></font-awesome-icon>{{item.time}}
            <span style="color:" class="align-left font-weight-bolder">
              <a v-b-modal.modal-1 class="btn btn-primary bg-success mb-3" type="submit">Choose</a>
              <b-modal class="mb-2" id="modal2" ok-only no-stacking header=no-stacking>
                <p style="font-size: 1.5rem;">Reservation Completed!</p>
              </b-modal>
            </span>
            <p class="align-middle">{{item.seat}}</p>
          </div>
      </div>
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
  }
}
</script>

<style scoped>
.shadow-lg{
  background-color: white;
  margin-left: 500px;
  margin-right: 500px;
  border-radius: 10px;
}
.btn-primary{
  margin-left: 200px;
 }
 .align-middle{
  position: absolute;
  left: 25px;
  width: 150px;
  top: 90px;
  padding: 10px;
 }
 .modal-header {
    border-bottom: 0 none;
}

.modal-footer {
  top: 0px;
}
</style>
