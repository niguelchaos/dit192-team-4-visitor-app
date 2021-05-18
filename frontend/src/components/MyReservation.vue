<template>
  <b-container class="card-main-div">
    <b-row>
      <b-col class="card-main-col" sm="12" md="6" lg="4" xl="3" no-gutters>
        <activity-card :activity="dummyObj"></activity-card>
      </b-col>
      <b-col class="card-main-col" sm="12" md="6" lg="4" xl="3" no-gutters>
        <activity-card :activity="dummyObj2"></activity-card> </b-col
    ></b-row>
  </b-container>
</template>

<script>
import ActivityCard from '@/components/MyReservationCard.vue'
export default {
  components: { ActivityCard },
  name: 'activity-card-item',
  props: ['activity', 'type'],
  data() {
    return {
      dummyObj: {
        name: 'dummy',
        text: 'Reserved for 2-2:30 pm',
        img:
          'https://media-cdn.tripadvisor.com/media/photo-s/02/2a/4d/af/bakken.jpg'
      },
      dummyObj2: {
        name: 'dummy2',
        text: 'Reserved for 3-3:30 pm',
        img:
          'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW11c2VtZW50JTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
      }
    }
  }
}
</script>

<style scoped>
.res-card {
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
</style>
