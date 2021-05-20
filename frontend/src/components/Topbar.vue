<template>
  <div>
    <div class="top-overlay">
      {{title}}
    </div>
    <div class="top-wrapper">
      <b-button :to="{name: 'account', params: { target: 'account' }}" class="top-btn shadow-none">
        <img src="../assets/user-circle.svg"/>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data() {
    return {
      title: this.$route.meta.title || ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.title = to.meta.title || ''
    }
  }
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
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.top-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  padding: 0 1rem 0 1rem;
  justify-content: center;
  align-items: center;
  z-index: 1;
  pointer-events: none;
  background: none;
  color: #2D3E4F;
  font-weight: bold;
  font-size: 18pt;
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
