<template>
  <div id="attractions" class="wrapper">
    <div class="pageTop">
      <br />
      <h2 class="title">Reservations</h2>
    </div>
    <!-- Load attractions via API -->
    <!-- drop box -->
    <b-container>
      <div class="currentreservations-div">

        <b-button-group class="d-md-none" size="md" style="border-radius: 15px;">
          <b-button
            v-for="(button, index) in categories"
            :key="index"
            :pressed="button.state"
            variant="outline-primary"
            class="text-center text-nowrap"
            v-on:click="changeCategory(button, index)"
          >
            {{ button.type }}
          </b-button>
        </b-button-group>

        <!-- for large screens -->
        <b-button-group class="d-none d-md-inline-flex" size="lg" style="border-radius: 15px;">
          <b-button
            v-for="(button, index) in categories"
            :key="index"
            :pressed="button.state"
            variant="outline-primary"
            class="text-center text-nowrap"
            v-on:click="changeCategory(button, index)"
          >
            {{ button.type }}
          </b-button>
        </b-button-group>

        <!-- <button class="btn-filter" v-for="(buttons, i) in categories" v-on:click="filterCards(buttons, i)" :key="i"
          :class="{'flt-active': buttons.state, 'flt-not-active': !buttons.state}">
        {{ buttons.type }}
        </button> -->
      </div>

      <div>
        <b-col>
          <b-form-select style="border: 0px; border-radius: 15px;width:200px;" v-model="filterSelected" :options="filterOptions" class="float-center mt-3"></b-form-select>
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
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'
import ActivityCard from '@/components/ReservationCard.vue'
export default {
  components: { ActivityCard },
  data() {
    return {
      activities: [],
      attractions: [],
      categories: [
        { type: 'All', state: true },
        { type: 'My Reservations', state: false }
      ],
      prevCategory: null,
      currentCategory: null,
      restaurants: [],

      // TODO: Split filtering panel into a separate component
      filterSelected: null,
      filterOptions: [
        { value: null, text: 'filter options' },
        { value: 'name', text: 'Restaurant' },
        { value: 'name', text: 'Rides' }
      ],
      // when activities is clicked, currentroute is empty -> default to page 1
      // takes page directly from url
      currentPage:
        this.$router.currentRoute.query.currentPage === undefined
          ? 1
          : this.$router.currentRoute.query.currentPage
    }
  },
  beforeMount() {
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

    changeCategory(filter, i) {
      if (this.prevCategory.type === this.categories[i].type) {
        console.log('current cat clicked')
        return
      }

      let s = this.categories[i].state
      for (const itm in this.categories) {
        this.categories[itm].state = false
        this.categories[i].state = !s
      }

      this.activities = []
      this.currentCategory = filter

      switch (filter.type.toLowerCase()) {
        case 'all':
          this.populate('attractions', this.attractions)
          this.populate('games', this.games)
          this.populate('restaurants', this.restaurants)
          break
        case 'attractions':
          this.populate('attractions', this.attractions)
          break
        case 'games':
          this.populate('games', this.games)
          break
        case 'restaurants':
          this.populate('restaurants', this.restaurants)
          break
      }
      this.activities.sort((a, b) => a.data.name.localeCompare(b.data.name))

      this.prevCategory = this.currentCategory
    },

    getActivities() {
      this.getAttractions()
      this.getGames()
      this.getRestaurants()
    },

    getAttractions() {
      Api.get('attractions', {
        params: {
          page: this.currentPage
        }
      })
        .then(res => {
          this.attractions = res.data.data
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
          page: this.currentPage
        }
      })
        .then(res => {
          this.games = res.data.data
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
          page: this.currentPage
        }
      })
        .then(res => {
          this.restaurants = res.data.data
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
    },

    // updates page number, calls attractions every time page is changed
    updatePageNum(pageNum) {
      this.currentPage = pageNum

      if (this.currentCategory === null) {
        console.log('currentcat null, defaulting to all')
        this.currentCategory = this.categories[0]
        this.prevCategory = this.categories[0]
      }

      this.getActivities()
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

.cat-active {
 background-color: #EDADC7;
}

.cat-not-active{
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
