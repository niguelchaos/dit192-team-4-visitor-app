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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  background: #FFFFFF;
  /* min-width: 25rem; */
  }
</style>
