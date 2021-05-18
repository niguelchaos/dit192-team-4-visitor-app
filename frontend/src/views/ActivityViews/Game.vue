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
            <p><strong>Status: </strong>{{ activity.status }}</p>
            <p><strong>Price: </strong>{{ activity.price }} kr to play.</p>
          </div>
          <div class="activity_card">
            <p>{{ activity.description }}</p>
          </div>
          <div class="activity_card">
            <map-component :content="[activity]"></map-component>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
import MapComponent from '../../components/Map.vue'

export default {
  components: { MapComponent },
  name: 'Game',
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
      Api.get('activities/' + id)
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
