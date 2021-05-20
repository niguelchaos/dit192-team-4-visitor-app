<template>
  <div class="time">
    <router-link to="/">
        <img class="time_img" src="../assets/busy.jpeg" alt="time" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Time',
  props: []
}
</script>

<style scoped>
.time {
    height: 100px;
    margin-bottom: 80px;
    margin-top: 10px;
  }
</style>
