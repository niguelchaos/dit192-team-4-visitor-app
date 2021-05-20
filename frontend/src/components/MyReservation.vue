<template>
  <b-container class="wrapper">
    <b-row v-for="a in reservations" :key="a.id">
    <b-col class="card-main-col" sm="12" md="6" lg="4" xl="3" no-gutters>
        <activity-card :activity="a
"></activity-card> </b-col
    ></b-row>

  </b-container>
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
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTNlMzI3ZWFjNjY5MWNmYzVmMzQyNSIsImlhdCI6MTYyMTM1MzQzMSwiZXhwIjoxNjIxNDM5ODMxLCJhdWQiOiJ3ZWJhcHAiLCJpc3MiOiJ0ZWFtNGRiIiwic3ViIjoiMDcwOTExMTExMSJ9.AGzbka1d7OHk11yZOzIs2VOm0STaIm5wbXQ38QoldQQnWPI1L94kYYmng01f-W6QjD45FiWnZdIHd1faKa1nq8NgAWNYpycPbEHBaBb3SlOteZZQGWJss4oMVlQOyFRx_TTduGemMfZvAKk3jDjb3DS3PhqRFXLEaEuPgQ8VcbdQj8c5' }
    // eslint-disable-next-line no-undef
    Api.get('/auth/reservations', { headers })
      .then(res => {
        console.log(res.data.data)
        this.reservations = res.data.data
        console.log(this.reservations)
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
  align-content: center;
}
</style>
