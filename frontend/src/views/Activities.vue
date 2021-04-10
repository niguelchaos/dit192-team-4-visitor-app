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
          <ul>
            <li v-for="a in attractions" v-bind:key="a">
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
</style>
