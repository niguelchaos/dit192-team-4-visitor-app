<template>
  <div id="attractions">
    <b-container class="attraction-container">
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
        </b-col>
      </b-row>

      <div class="page-bar-div overflow-auto rounded mt-3">
        <b-pagination-nav  v-on:change="updatePageNum($event)" :link-gen="linkGen" :number-of-pages="10" align="fill" use-router></b-pagination-nav>
      </div>

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
      attractions: [],
      page: 1
    }
  },
  mounted() { // happens only once
    this.getAttractions()
  },
  beforeUpdate() {
    // this.getAttractions()
  },
  updated() {
    // this.getAttractions()
  },
  methods: {
    getAttractions() {
      Api.get('attractions', {
        params: {
          page: this.page
        }
      }) // add axios params here
        .then(res => {
          this.attractions = res.data.data
        })
        // || [] }).bind(this)
        .catch(err => {
          this.attractions = []
          console.log(err)
        })
    },

    updatePageNum(pageNum) {
      this.page = pageNum
      console.log(this.page)
      this.getAttractions()
    },

    linkGen(pageNum) {
      return {
        path: this.page === 1 ? '?' : `?page=${this.page}`,
        query: { page: pageNum }
      }
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
  height: 50vh;
  min-height:15vh;
  max-height:65vh;
}
.card-main-col {
  margin: 0%;
  padding: 0%;
}
</style>
