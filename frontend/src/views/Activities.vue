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
        <button class="btn-filter" v-for="(buttons, i) in categories" v-on:click="filterCards(buttons, i)" :key="i"
          :class="{'flt-active': buttons.state, 'flt-not-active': !buttons.state}">
        {{ buttons.type }}
        </button>
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
      activities: [],
      attractions: [],
      categories: [
        { type: 'All', state: true },
        { type: 'Attractions', state: false },
        { type: 'Games', state: false },
        { type: 'Restaurants', state: false }
      ],
      restaurants: [],

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

    filterCards(filter, i) {
      let s = this.categories[i].state
      for (const itm in this.categories) {
        this.categories[itm].state = false
        this.categories[i].state = !s
      }

      this.activities = []
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
