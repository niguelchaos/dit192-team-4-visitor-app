<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <Logo></Logo>
          <!-- <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div> -->
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="title">Welcome to Dummy Park!</h2>
        </b-col>
      </b-row>
      <!-- Mobile (< 768px): stack columns by making one half-width and one full-width
      Desktop (>= 768px): keep both columns in same row in 4:8 ratio-->
      <b-row>
        <b-col>
          In this app you can book tickets, find our rides and see your
          reservations. Welcome!
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="map">
            <h4>Map over the park</h4>
            <!-- <img class="map_img" src="../assets/Map.jpeg" alt="map" /> -->
            <map-component :content="attractions" />
          </div>
        </b-col>
      </b-row>
      <b-row class="footer">
        <b-col>
          <p>Address: Göteborgsvägen 1</p>
          <p>E-mail: contact@email.com</p>
          <p>Opening Times: 1pm - 10pm</p>
          <a style="color:white;" href="/home/policies">Policies</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Logo from '../components/Logo.vue'
import MapComponent from '../components/Map.vue'

export default {
  components: { Logo, MapComponent },
  name: 'home',
  data() {
    return {
      message: '',
      attractions: []
    }
  },
  mounted() {
    this.getMessage()
    this.getAttractions()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    },
    getAttractions() {
      Api.get('/attractions')
        .then(res => {
          this.attractions = res.data.data || []
        })
        // .bind(this)
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
  .logo {
    height: 100px;
    margin-bottom: 50px;
    margin-top: 20px;
  }

  .title {
    margin-bottom: 20px;
  }

  .footer {
    background: var(--color-green);
    color: white;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-top: 100px;
  }

  .map {
    margin-top: 50px;
  }

  .map_img {
    height: 500px;
    margin-top: 10px;
  }
</style>
