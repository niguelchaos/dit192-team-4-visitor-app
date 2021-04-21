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
      <!-- Pagination -->
      <div class="page-bar-div overflow-auto rounded mt-3">
        <!-- on change updates when user clicks, linkgen updates path -->
        <b-pagination-nav v-model="currentPage" v-on:change="updatePageNum($event)" :link-gen="linkGen" :number-of-pages="3" align="fill" use-router></b-pagination-nav>
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
      // when activities is clicked, currentroute is empty -> default to page 1
      // takes page directly from url
      currentPage: this.$router.currentRoute.query.currentPage === undefined ? 1 : this.$router.currentRoute.query.currentPage
    }
  },
  mounted() { // happens only once
  // updatePageNum already executes getAttractions
    this.linkGen(this.currentPage)
    this.updatePageNum(this.currentPage)
  },
  beforeUpdate() {
  },
  updated() {
  },
  methods: {
    getAttractions() {
      // console.log(this.$router.currentRoute.query.currentPage)
      Api.get('attractions', {
        params: {
          page: this.currentPage
        }
      })
        .then(res => {
          this.attractions = res.data.data
        })
        // || [] }).bind(this)
        .catch(err => {
          this.attractions = []
          console.log(err)
        })
    },

    // updates page number, calls attractions every time page is changed
    updatePageNum(pageNum) {
      this.currentPage = pageNum
      // console.log(this.currentPage)
      this.getAttractions()
    },

    linkGen(pageNum) {
      return {
        // vmodel already takes care of path additions, but this needed for correct path
        query: { currentPage: pageNum }
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
