<template>
  <div>
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
      <b-row class="footer">
        <b-col>
          <p>Address: Göteborgsvägen 1</p>
          <p>E-mail: contact@email.com</p>
          <p>Opening Times: 1pm - 10pm</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.getMessage()
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
</style>
