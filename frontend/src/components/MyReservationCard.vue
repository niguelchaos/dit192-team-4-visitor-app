<template>
  <div>
    <b-card
      class="res-card overflow-hidden text-left"
      img-right
      no-body
      v-b-toggle="'reservation-details-' + activity.name"
    >

      <b-col style="font-size: 0.75rem" no-gutters class="card-text-col">
        <b-card-title style="font-size: 1rem" class="card-title">
          <span class="align-middle font-weight-bolder">{{
            activity.name
          }}</span>
        </b-card-title>

        <p class="card-queue-text card-text mt-3">
          {{ activity.time }}
        </p>
      </b-col>
    </b-card>
  </div>
</template>

<script>
// this stupid camel case props thing i dont get it
export default {
  name: 'MyReservationCard',
  props: ['activity']
}
</script>

<style scoped>
.res-card {
  width: 100%;
  padding: 5%;
  margin: 3%;
  border-radius: 15px;
  /* height: 190px; */
}
.card-img-col {
  margin: 0%;
  padding: 0%;
}
.card-text-col {
  color: #2d3e4f;
  padding: 1%;
  padding-right: 3%;
  margin: 0%;
}
.card-image {
  border-radius: 15px;
  width: 130px;
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
.btnrese {
  float: right;
  height: 35px;
  width: 88px;
  right: 10%;
  background-color: #388659;
}
.card-main-div {
  margin-top: 1rem !important;
  padding: 0%;
  overflow-y: scroll;
  position: relative;
  flex: 1;
}
</style>
