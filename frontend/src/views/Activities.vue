<template>
  <div id="attractions">
    <b-container class="attraction-container" fluid>
      <b-row class="logo-row">
        <b-col xs="12" align-self="center">
          <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div>
        </b-col>
      </b-row>

      <b-row class="list-row">
        <b-col class="list-col" md="12">
          <h2 class="title">Activities</h2>
          <!-- Load attractions via API -->
            <!-- drop box -->
            <!-- filter container -->
            <!-- scrollable container -->
            <b-container class="card-main-div" fluid>
              <b-row class="card-main-row">
                <b-col class="card-main-col" v-for="a in attractions" v-bind:key="a.id" sm="12" md="6" lg="4" xl="3" no-gutters>
                  <activity-card :attraction-name="a.name"></activity-card>
                  <!-- idk why this works -->
                </b-col>
              </b-row>
            </b-container>
          <!-- <ul>
            <li v-for="a in attractions" v-bind:key="a.id">
              {{ a.name + ": " + a.description }}
            </li>
          </ul> -->
          <b-button href="/">Go to frontpage</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
import ActivityCard from '@/components/ActivityCard.vue'
export default {
  components: { ActivityCard },
  data() {
    return {
      attractions: []
    }
  },
  mounted() {
    this.getAttractions()
  },
  methods: {
    getAttractions() {
      Api.get('attractions')
        .then(res => {
          this.attractions = res.data.data
        })
        // || [] }).bind(this)
        .catch(err => {
          this.attractions = []
          console.log(err)
        })
    }
  }

}
</script>

<style>
.attraction-container {

}
/* .list-row {
  height: 50%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
} */
.list-col {
  /* height: 70%;
  display: block;
  max-height: 70%; */
    /* overflow-y: hidden; */
  /* flex-direction: column; */
}
.card-main-div {
  margin:0%;
  padding:0%;
  position: relative;
  overflow-y: scroll;
  height: 55vh;
  min-height:15vh;
  max-height:65vh;
}

.card-main-col {
  margin: 0%;
  padding: 0%;
}
</style>
