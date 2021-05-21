<template>
  <div id="attractions" class="wrapper">
    <!-- Load attractions via API -->
    <!-- drop box -->
    <b-container>
      <div class="filter-div">
        <button class="btn-filter" v-for="(buttons, i) in activityTypes" v-on:click="changeCategory(buttons, i)" :key="i"
          :class="{'flt-active': buttons.state, 'flt-not-active': !buttons.state}">
        {{ buttons.type }}
        </button>
      </div>

      <div>
        <b-col>
          <b-form-select style="border: 0px; border-radius: 15px" v-model="filterSelected" :options="filterOptions" v-on:change="changeSortBy(filterSelected)"></b-form-select>
        </b-col>
      </div>
    </b-container>

    <!-- scrollable container -->
    <b-container class="card-main-div">
      <b-row>
        <b-col class="card-main-col" v-for="a in activities" v-bind:key="a.id" sm="12" md="6" lg="4" xl="3" no-gutters>
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
      activityTypes: [],
      activities: [],
      activityLimit: 6,
      totalPages: 1,

      // TODO: Split filtering panel into a separate component
      filterOptions: [
        { value: null, text: 'Other potential filters' },
        { value: 'name,asc', text: 'Name ascending' },
        { value: 'name,desc', text: 'Name descending' },
        { value: 'price,asc', text: 'Lowest price' },
        { value: 'price,desc', text: 'Highest price' }
      ],
      filterSelected: null,
      filterCategories: 'all',
      // when activities is clicked, currentroute is empty -> default to page 1
      // takes page directly from url
      currentPage:
        this.$router.currentRoute.query.currentPage === undefined
          ? 1
          : this.$router.currentRoute.query.currentPage
    }
  },
  beforeMount() {
    this.getActivityTypes()
    this.getActivities(this.filterCategories, this.filterSelected)
  },
  mounted() {
    this.linkGen(this.currentPage)
  },
  methods: {
    changeCategory(filter, i) {
      let s = this.activityTypes[i].state
      for (const itm in this.activityTypes) {
        this.activityTypes[itm].state = false
        this.activityTypes[i].state = !s
      }
      this.filterCategories = filter.type
      this.getActivities(this.filterCategories, this.filterSelected)
    },

    changeSortBy(selected) {
      this.getActivities(this.filterCategories, selected)
    },

    getActivityTypes() {
      Api.get('activities/types')
        .then(res => {
          this.activityTypes.push({ type: 'all', state: true })
          for (const i in res.data.data) {
            this.activityTypes.push({ type: res.data.data[i].toLowerCase(), state: false })
          }
          this.activityTypes.sort((a, b) => a.type.localeCompare(b.type))
        })
        .catch(err => {
          this.attractions = []
          console.log(err)
        })
    },

    getActivities(type, sort) {
      var params = {
        page: this.currentPage,
        limit: this.activityLimit,
        type: undefined,
        sortBy: sort
      }
      if (type !== 'all') {
        params.type = type
      }

      Api.get('activities/count', { params: { type: params.type } })
        .then(res => {
          this.totalPages = Math.ceil(res.data.data.count / this.activityLimit)
        })
        .catch(err => {
          this.totalPages = 1
          console.log(err)
        })

      Api.get('activities', {
        params: params
      })
        .then(res => {
          this.activities = res.data.data
          console.log(this.activities)
        })
        .catch(err => {
          this.activities = []
          console.log(err)
        })
    },

    // separated to let filtercards use GET without changing page
    changePage(pageNum) {
      this.currentPage = pageNum
      this.getActivities(this.filterCategories, this.filterSelected)
    },

    linkGen(pageNum) {
      return {
        // vmodel already takes care of path additions, but this needed for correct path
        query: { currentPage: pageNum },
        path: './activities'
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
  text-transform: capitalize;
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
  margin-top: 1rem !important;
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
