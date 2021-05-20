<template>
  <div>
    <div class="user-container" id="user-title-container">
      <div class="user-info">
        <img class="user-logo" src="../assets/user-circle.svg"/>
        <p id="username">{{userData.name}}</p>
        <p>Some nice imo</p>
      </div>
    </div>

    <div class="user-container">
      <div class="input-container">
        <div class="user-info-sect">
          <label>Phone number</label>
          <input class="el user-input" type="text" placeholder="Phone number" :value="userData.phone" disabled>
        </div>
        <div class="user-info-sect">
          <label>Name</label>
          <input class="el user-input" type="text" placeholder="Name" :value="userData.name" disabled>
        </div>
        <div class="user-info-sect">
          <label>Password (?)</label>
          <input class="el user-input" type="password" placeholder="Password (?)" value="tryguessingwhatcauseitsnothere" disabled>
        </div>
      </div>
      <button class="el logout-btn" v-on:click="logout()">Sign out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      form: {
        phone: undefined,
        password: undefined
      }
    }
  },
  props: {
    userData: {
      phone: String,
      name: String,
      id: String
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('accessToken')
      this.$router.push({ name: 'home' })
    }
  }
}

</script>

<style>

.user-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content !important;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  background: #FFFFFF;
  min-width: 25rem;
  max-width: 30rem;
}

#user-title-container {
  margin-bottom: 1rem;
}

.user-info-sect {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: baseline;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
}

#username {
  font-weight: bold;
  font-size: 16pt;
}

p {
  text-align: left;
  margin-bottom: 0 !important;
}

.logo-pane {
  margin-bottom: 1rem;
}

.el {
  width: 100%;
  border-radius: 0.5rem;
  height: 3.5rem;
}

.reg-option {
  margin: 0 0 0 0;
}

.input-container {
  margin-top: 2rem;
  width: 100%;
}

.user-input {
  border: 2px solid;
  border-color: #E28DAF;
  margin-bottom: 1rem;
  padding: 0 1rem 0 1rem;
}

.logout-btn {
  margin: 2rem 0 2rem 0;
  background: #E34040;
  font-weight: bold;
  font-size: 11pt;
  border: none;
  color: white;
}

.user-logo {
  width: 3rem;
  margin-bottom: 0.5rem;
}

</style>
