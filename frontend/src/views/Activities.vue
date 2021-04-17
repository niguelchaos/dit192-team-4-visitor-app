<template>
  <div id="attractions">
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="title">Activities</h2>
          <!-- Load attractions via API -->
          <b-card class="act-card overflow-hidden rounded" img-right no-body>
            <b-row>
              <b-col xs="7" no-gutters class="card-col">
                <div class="card-title"><span>Super Ride</span></div>
                <!-- <b-card-body title="Super Ride"></b-card-body> -->
                <b-link href="#" class="card-link">Read More</b-link>
              </b-col>
              <b-col xs="5">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="card-image rounded-3"></b-card-img>
              </b-col>
            </b-row>
          </b-card>

          <ul>
            <li v-for="a in attractions" v-bind:key="a.id">
              {{ a.name + ": " + a.description }}
            </li>
          </ul>
          <b-button href="/">Go to frontpage</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
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
      Api.get('/attractions')
        .then(res => {
          this.attractions = res.data.data || []
        }).bind(this)
        .catch(err => {
          console.log(err)
        })
    }
  }

}
</script>

<style>
.act-card {
  padding: 5%;
}
.card-col {
  align-content: center;
  padding: 0%;
  margin: 0% ;
}
.card-title {
  padding: 5%;
  align-content: center;
}
/* .act-card-body {
  padding: 0%;
  align-content: center;
} */
/* .act-card-text {
  padding: 0%;
  align-content: center;
} */

</style>
