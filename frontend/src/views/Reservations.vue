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
          <h2 class="title">Reservations</h2>
          <b-button href="/">Go to frontpage</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  components: { Logo },
  name: 'Reservations'
}
</script>

<style>
</style>
