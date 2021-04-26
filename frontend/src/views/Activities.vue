<template>
  <div id="attractions" class="wrapper">
    <div class="pageTop">
      <br />
      <h2 class="title">Activities</h2>
    </div>
    <!-- Load attractions via API -->
    <!-- drop box -->
    <!-- filter container -->
    <!-- scrollable container -->
    <b-container class="card-main-div">
      <b-row>
        <b-col class="card-main-col" v-for="a in attractions" v-bind:key="a.id" sm="12" md="6" lg="4" xl="3" no-gutters>
          <activity-card :activity="a"></activity-card>
          <!-- idk why this works -->
        </b-col>
      </b-row>
    </b-container>
    <!-- Pagination -->
    <div class="page-bar-div overflow-auto mt-3">
      <!-- on change updates when user clicks, linkgen updates path -->
      <b-pagination-nav
        v-model="currentPage"
        v-on:change="updatePageNum($event)"
        :link-gen="linkGen"
        :number-of-pages="3"
        align="fill"
        use-router
        size="md"
      ></b-pagination-nav>
    </div>
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
      currentPage:
        this.$router.currentRoute.query.currentPage === undefined
          ? 1
          : this.$router.currentRoute.query.currentPage
    }
  },
  mounted() {
    // happens only once
    // updatePageNum already executes getAttractions
    this.linkGen(this.currentPage)
    this.updatePageNum(this.currentPage)
  },
  beforeUpdate() {},
  updated() {},
  methods: {
    getAttractions() {
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
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card-main-div {
  margin: 0%;
  padding: 0%;
  overflow-y: scroll;
  position: relative;
  flex: 1;
}
.card-main-col {
  margin: 0%;
  padding: 0%;
}
.page-bar-div {
  height: 55px;
  padding: 0px 20px;
}
</style>
