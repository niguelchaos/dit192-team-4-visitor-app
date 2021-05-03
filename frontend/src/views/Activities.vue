<template>
  <div id="attractions" class="wrapper">
    <div class="pageTop">
      <br />
      <h2 class="title">Activities</h2>
    </div>
    <!-- Load attractions via API -->
    <!-- drop box -->
    <b-container>
      <div class="filter-div">
        <b-button style="background-color: white; color:black" class="btn-filter" v-for="(buttons, i) in categories" v-on:click="filterCards(buttons, i)" :key="i"
          :class="{'flt-active': buttons.state, 'flt-not-active': !buttons.state}">
        {{ buttons.type }}
        </b-button>
      </div>

      <div>
        <b-col>
          <b-form-select style="border: 0px; border-radius: 15px" v-model="filterSelected" :options="filterOptions"></b-form-select>
        </b-col>
      </div>
    </b-container>

    <!-- scrollable container -->
    <b-container class="card-main-div">
      <b-row>
        <b-col class="card-main-col" v-for="a in activities" v-bind:key="a.id" sm="12" md="6" lg="4" xl="3" no-gutters>
          <activity-card :activity="a.data" :type="a.type"></activity-card>
          <!-- idk why this works -->
        </b-col>
      </b-row>
    </b-container>
    <!-- Pagination -->
    <div class="page-bar-div overflow-auto mt-3">
      <!-- on change updates when user clicks, linkgen updates path -->
      <b-pagination-nav
        v-model="currentPage"
        v-on:change="changePage($event)"
        :link-gen="linkGen"
        :number-of-pages="totalPages"
        align="center"
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
      activities: [],
      attractions: [],
      restaurants: [],
      categories: [
        { type: 'All', state: true },
        { type: 'Attractions', state: false },
        { type: 'Games', state: false },
        { type: 'Restaurants', state: false }
      ],
      currentCategory: null,

      // TODO: Split filtering panel into a separate component
      filterSelected: null,
      filterOptions: [
        { value: null, text: 'Other potential filters' },
        { value: 'name-asc', text: 'Name ascending' },
        { value: 'name-dsc', text: 'Name descending' },
        { value: 'price-low', text: 'Lowest price' },
        { value: 'price-high', text: 'Highest price' }
      ],
      // when activities is clicked, currentroute is empty -> default to page 1
      // takes page directly from url
      currentPage:
        this.$router.currentRoute.query.currentPage === undefined
          ? 1
          : this.$router.currentRoute.query.currentPage,

      // used to get number of pages
      totalAttractions: 0,
      totalGames: 0,
      totalRestaurants: 0,
      totalActivities: 0,
      pageSize: 6,
      activityLimit: 6,
      totalPages: 3,
      // used to cancel GET when same category clicked
      prevFilter: null
    }
  },
  beforeMount() {
  },
  mounted() {
    // happens only once
    // updatePageNum already executes getActivities
    this.linkGen(this.currentPage)
    this.updatePageNum(this.currentPage)
  },
  beforeUpdate() {},
  updated() {},
  watch: {
    totalAttractions() {
      this.totalActivities = this.totalAttractions + this.totalGames + this.totalRestaurants
    },
    totalGames() {
      this.totalActivities = this.totalAttractions + this.totalGames + this.totalRestaurants
    },
    totalRestaurants() {
      this.totalActivities = this.totalAttractions + this.totalGames + this.totalRestaurants
    },
    totalActivities() {
      this.getTotalPages() // only needed for beginning - dunno how else to do it
    }
  },
  methods: {

    filterCards(filter, i) {
      console.log('prev:' + this.prevFilter.type)

      if (this.prevFilter.type === this.categories[i].type) {
        console.log('current cat clicked')
        return
      }

      let s = this.categories[i].state
      console.log('current cat:' + this.categories[i].type)

      for (const itm in this.categories) {
        this.categories[itm].state = false
        this.categories[i].state = !s
      }

      this.activities = []
      this.currentCategory = filter

      // get correct activities
      this.getTotalPages()
      this.updatePageNum(this.currentPage)

      this.prevFilter = this.currentCategory
    },

    getActivities() {
      this.getAttractions()
      this.getGames()
      this.getRestaurants()
    },

    // Sort added for each GET because it is async
    getAttractions() {
      Api.get('attractions', {
        params: {
          page: this.currentPage,
          limit: this.activityLimit
        }
      })
        .then(res => {
          this.attractions = res.data.data
          this.totalAttractions = res.data.totalAttractions

          this.populate('attractions', this.attractions)
          this.activities.sort((a, b) => a.data.name.localeCompare(b.data.name))
        })
        .catch(err => {
          this.attractions = []
          console.log(err)
        })
    },

    getGames() {
      Api.get('games', {
        params: {
          page: this.currentPage,
          limit: this.activityLimit
        }
      })
        .then(res => {
          this.games = res.data.data
          this.totalGames = res.data.totalGames

          this.populate('games', this.games)
          this.activities.sort((a, b) => a.data.name.localeCompare(b.data.name))
        })
        .catch(err => {
          this.games = []
          console.log(err)
        })
    },

    getRestaurants() {
      Api.get('restaurants', {
        params: {
          page: this.currentPage,
          limit: this.activityLimit
        }
      })
        .then(res => {
          this.restaurants = res.data.data
          this.totalRestaurants = res.data.totalRestaurants

          this.populate('restaurants', this.restaurants)
          this.activities.sort((a, b) => a.data.name.localeCompare(b.data.name))
        })
        .catch(err => {
          this.restaurants = []
          console.log(err)
        })
    },

    populate(category, source) {
      for (const i in source) {
        this.activities.push({ type: category, data: source[i] })
      }
      console.log('activities:' + this.activities.length + ' == category: ' + category)
    },

    // separated to let filtercards use GET without changing page
    changePage(pageNum) {
      this.currentPage = pageNum
      this.updatePageNum(pageNum)
    },

    // GETs activities, checks for page edge cases
    updatePageNum(pageNum) {
      this.activities = []

      if (this.currentCategory === null) {
        console.log('currentcat null, defaulting to all')
        this.currentCategory = this.categories[0]
        this.activityLimit = 2
        this.pageSize = 6
        this.prevFilter = this.categories[0]
      }

      console.log(this.currentCategory.type)

      if (this.currentPage > this.totalPages) {
        this.currentPage = 1
        this.$router.replace({ query: { currentPage: this.currentPage } })
      }

      switch (this.currentCategory.type.toLowerCase()) {
        case 'all':
          this.getActivities()
          break
        case 'attractions':
          this.getAttractions()
          break
        case 'games':
          this.getGames()
          break
        case 'restaurants':
          this.getRestaurants()
          break
      }
      console.log(this.activities)
      this.activities.sort((a, b) => a.data.name.localeCompare(b.data.name))
    },

    linkGen(pageNum) {
      return {
        // vmodel already takes care of path additions, but this needed for correct path
        query: { currentPage: pageNum },
        path: './activities'
      }
    },

    // sets pagesize, needs updatepagenum first to get corrent totalactivities
    getTotalPages() {
      if (this.currentCategory.type.toLowerCase() === 'all') {
        this.activityLimit = 2
        this.pageSize = 6
      } else {
        this.activityLimit = 3
        this.pageSize = 3
      }

      switch (this.currentCategory.type.toLowerCase()) {
        case 'all':
          this.totalPages = Math.ceil(this.totalActivities / this.pageSize)
          break
        case 'attractions':
          this.totalPages = Math.ceil(this.totalAttractions / this.pageSize)
          break
        case 'games':
          this.totalPages = Math.ceil(this.totalGames / this.pageSize)
          break
        case 'restaurants':
          this.totalPages = Math.ceil(this.totalRestaurants / this.pageSize)
          break
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

.btn-filter {
  border-radius: 15px;
  border-width: 0;
  font-size: 17px;
  font-weight: bold;
  height: 49px;
  padding-left: 20px;
  padding-right: 20px;
  color: black;
}

.msc-filter {
  border-radius: 15px;
}

.filter-div {
  width: 100%;
  display: inline-flex;
  overflow-x: auto;
  gap: 25px;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.flt-active {
 background-color: #EDADC7;
}

.flt-not-active{
  background-color: #FFFFFF;
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

::-webkit-scrollbar {
  height: 4px;
  width: 4px;
  border: 1px solid #D5D5D5;
}

::-webkit-scrollbar-track {
  background: #EEEEEE;
  box-shadow: inset 0 0 14px 14px transparent;
  border: solid 4px transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #B0B0B0;
}

</style>
