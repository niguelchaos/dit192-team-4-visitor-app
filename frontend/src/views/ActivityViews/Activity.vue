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
            <p><strong>Category: </strong><i class="activity-type">{{ activity.type.join(', ') }}</i></p>
            <p><strong>Status: </strong>{{ activity.status }}</p>
            <p v-if="!activity.type.includes('restaurant')"><strong>Price: </strong>{{ activity.price }} kr</p>
            <b-link :to="{
                name: 'getreservation',
                params: { id: activity._id, activity: activity, type: type }
                }">
              <b-button class="btnr" pill>Reserve</b-button>
            </b-link>
          </div>
          <div class="activity_card">
            <p>{{ activity.description }}</p>
          </div>
          <div class="activity_card">
          <Timeh></Timeh>
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
import Timeh from '../../components/Timeh.vue'

export default {
  components: { MapComponent, Timeh },
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

.activity-type {
  text-transform: capitalize;
}
/* Set a style for all buttons */
.btnr {
  background-color: #4CAF50 !important;
  color: white;
  position: relative;
  top: 90%;
  left: 90%;
  transform: translate(-80%, -80%);
  -ms-transform: translate(-80%, -80%);
  background-color: #555;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
   width: 30%;
}

/* Add a hover effect for buttons */
.btnr:hover {
  opacity: 0.8;
}
</style>
