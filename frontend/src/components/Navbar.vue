<template>
  <div class="nav-wrapper">
    <b-button to="/" class="nav-btn shadow-none">Home </b-button>
    <b-button to="/activities" class="nav-btn shadow-none">Activities</b-button>
    <b-button to="/reservations" class="nav-btn shadow-none"
      >Reservations</b-button
    >
    <b-button to="/ticketprices" class="nav-btn shadow-none">Tickets</b-button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: []
};
</script>

<style scoped>
.nav-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: var(--color-pink);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.nav-btn {
  background: var(--color-pink);
  border: none;
  font-size: 0.8em;
  padding: 12px;
}
.nav-btn:hover,
.nav-btn:focus,
.nav-btn:active,
a.router-link-exact-active {
  background: var(--color-pink-dark) !important;
}
</style>
