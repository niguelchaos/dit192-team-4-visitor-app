<template>
  <div class="logo">
    <router-link to="/">
        <img class="logo_img" src="../assets/logo.png" alt="logo" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: []
}
</script>

<style scoped>
.logo {
    height: 100px;
    margin-bottom: 50px;
    margin-top: 20px;
  }
</style>
