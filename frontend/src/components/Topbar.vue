<template>
  <div class="top-wrapper">
      <b-button :to="{name: 'account'}" class="top-btn shadow-none">
        <img src="../assets/user-circle.svg"/>
      </b-button>
   </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: []
}
</script>

<style scoped>
.top-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: var(--color-pink);
  display: flex;
  padding: 0 1rem 0 1rem;
  flex-direction: row-reverse;
  justify-content: left;
  align-items: center;
}

.top-btn {
  background: var(--color-pink);
  display: flex;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border: none;
  border-radius: 1rem;
  font-size: 0.8em;
  height: 3rem;
  width: 3rem;
}
.top-btn:hover,
.top-btn:focus,
.top-btn:active,
a.router-link-active {
  background: var(--color-pink-dark) !important;
}
</style>
