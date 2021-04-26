<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="activity_card" style="padding:0px">
            <img :src="activity.img" alt="Image" class="image" />
          </div>

          <div class="activity_card">
            <h5 class="title">{{ activity.name }}</h5>
            <p><strong>Ride category: </strong><i>{{ activity.type }}</i></p>
            <p><strong>Status: </strong>{{ activity.status }}</p>
            <p><strong>Price: </strong>{{ activity.price }} kr</p>
          </div>
          <div class="activity_card">
            <p>{{ activity.description }}</p>
          </div>
          <div class="activity_card">
            <p>map</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'Attraction',
  props: {
    activity: {
      type: Object,
      required: false
    }
  },
  created() {
    // get the id from the url path
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    // activity object is not passed with props (i.e page is reloaded) => fetch the activity again
    if (!this.activity) {
      Api.get('attractions/' + id)
        .then(res => {
          this.activity = res.data.data
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
</style>
