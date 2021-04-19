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
        <b-col class="list-col">
          <h2 class="title">Activities</h2>
          <!-- Load attractions via API -->
            <!-- drop box -->
            <!-- filter container -->
            <!-- scrollable container -->
            <b-container class="card-main-div">
              <b-row class="card-main-row">
                <b-col class="card-main-col" v-for="a in attractions" v-bind:key="a.id" sm="12" md="6" lg="4" xl="3" no-gutters>
                  <div>
                  <b-card class="act-card overflow-hidden rounded text-left" img-right no-body>
                    <b-col class="card-img-col" style="margin:0%; padding:0%;">
                      <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="card-image rounded-3"></b-card-img>
                    </b-col>
                    <b-col style="font-size: 0.75rem;" cols="7" no-gutters class="card-text-col">
                    <b-card-title style="font-size: 1rem;" class="card-title">
                      <span class="align-middle font-weight-bolder" >{{a.name}}</span>
                    </b-card-title>
                      <b-link href="#" class="card-link">Read More</b-link>
                    </b-col>
                  </b-card>
                  </div>
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
  height:55vh;
  /* max-height: 75vh; */
}
.act-card {
  padding: 5%;
  margin: 3%;
}
.card-main-col {
  margin: 0%;
  padding: 0%;
}
.card-text-col {
  color: #2D3E4F;
  padding: 0%;
  margin: 0%;
}
.card-title {
  padding-top: 15%;
  padding-bottom: 5%;
  align-content: center;
}
.card-link {
  color: #E28DAF;
}

</style>
