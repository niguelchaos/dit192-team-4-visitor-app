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
  padding: 1rem 1rem 1rem 1rem;
  background-color: #c7efcf;
  border: 15px solid white;
  overflow: auto;
  height: calc(100vh - 140px); /* 70px is height of navbar */
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
