<template>
  <div class="app">
    <Topbar />
    <div class="content">
      <router-view />
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
export default {
  components: {
    Navbar, Topbar
  },
  data() {
    return {
      accessToken: ''
    }
  },
  mounted() {
    if (localStorage.accessToken) {
      this.accessToken = localStorage.accessToken
    }
  },

  methods: {
    validateAccess() {
      if (localStorage.accessToken) {
        /*
        Api.post('auth/login', this.form)
          .then(res => {
            localStorage.accessToken = res.data.token;
          })
          .catch(err => {
            console.log(err)
          }) */
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style>
.app {
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  padding: 1rem 0.5rem 0rem 0.5rem;
  background-color: #c7efcf;
  border: 15px solid white;
  overflow: auto;
  height: calc(100vh - 140px); /* 70px is height of navbar */
  min-width: 18rem;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
