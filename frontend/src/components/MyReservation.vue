<template>
  <div>
    <!-- <b-container class="card-main-div"> -->
      <b-row v-for="a in reservations" :key="a.id" id="card-main-col">
        <b-col sm="12" md="6" lg="4" xl="3" no-gutters>
          <activity-card :activity="a"></activity-card>
        </b-col>
      </b-row>
   <!-- </b-container> -->
  </div>
</template>

<script>
import ActivityCard from '@/components/MyReservationCard.vue'
import { Api } from '@/Api'

export default {
  components: { ActivityCard },
  name: 'activity-card-item',
  props: ['activity', 'type'],
  data() {
    return {
      reservations: []

    }
  },
  created() {
    const token = localStorage.accessToken
    const headers = { 'Authorization': 'Bearer ' + token }
    Api.get('/auth/reservations', { headers })
      .then(res => {
        this.reservations = res.data.data
      })
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
#card-main-col {
  margin: 1rem;
  padding: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
  margin: 0%;
  padding: 0%;
  overflow-y: scroll;
  position: relative;
  flex: 1;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
