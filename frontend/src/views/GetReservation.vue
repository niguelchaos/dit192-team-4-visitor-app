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
          <h4 class="card-title" style="font-size: 1.5rem;">Timeslot 1</h4>
          <font-awesome-icon style="color:pink;width: 20px; height: 20px;" :icon="['fas','clock']" ></font-awesome-icon>  1:00 - 2:30 pm
          <a class="btn btn-primary bg-success mb-3" type="submit">Choose</a>
          <p class="align-middle">Left Seat 2/50</p>
        </div>
      </div>
      <br />
      <div class="card" style="margin-left: 710px;margin-right: 710px;border-radius: 10px;">
        <div class="card-body">
          <h4 class="card-title" style="font-size: 1.5rem;">Timeslot 2</h4>
          <font-awesome-icon style="color:pink;width: 20px; height: 20px;" :icon="['fas','clock']"></font-awesome-icon> 3:00 - 4:30 pm
          <span style="color:" class="align-left font-weight-bolder">
            <a class="btn btn-primary bg-success mb-3" type="submit">Choose</a>
          </span>
          <p class="align-middle">Left Seat 20/50</p>
        </div>
      </div>
      <br />
      <div class="card" style="margin-left: 710px;margin-right: 710px;border-radius: 10px;">
        <div class="card-body">
          <h4 class="card-title" style="font-size: 1.5rem;">Timeslot 3</h4>
          <font-awesome-icon style="color:pink;width: 20px; height: 20px;" :icon="['fas','clock']"></font-awesome-icon> 3:00 - 4:30 pm
          <span style="color:" class="align-left font-weight-bolder">
            <a v-b-modal.modal-1 class="btn btn-primary bg-success mb-3" type="submit">Choose</a>
            <b-modal class="mb-2" id="modal-1" ok-only no-stacking header=no-stacking>
              <p style="font-size: 1.5rem;">Reservation Completed!</p>
            </b-modal>
          </span>
          <p class="align-middle">Left Seat 20/50</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'activity-card-item',
  props: ['activity', 'type']
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
