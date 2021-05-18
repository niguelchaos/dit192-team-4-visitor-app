<template>
  <div class="login-container">
    <img class="login-logo" src="../assets/user-circle.svg"/>
    <h2>Sign in</h2>
    <div class="input-container">
      <input class="login-el login-input" type="text" placeholder="Phone number" v-model="form.phone" required>
      <input class="login-el login-input" type="password" placeholder="Password" v-model="form.password" required>        
    </div>
    <button class="login-el login-btn" v-on:click="login()">Sign in</button>
    <p>Don't have an account? Register here---></p>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'Login',
  data() {
    return {
      form: { 
        phone: undefined,
        password: undefined
      }
    }
  },
  methods: {
    login() {
      if (this.form.phone != "" && this.form.password != "") {
        Api.post('auth/login', this.form)
          .then(res => {
            localStorage.accessToken = res.data.token;
          })
          .catch(err => {
            console.log(err)
          })
        }
      else {
        console.log("Phone number and password must be present in the form.")
      }
    }
  }
}

</script>

<style>

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content !important;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem !important;
  background: #FFFFFF;
  min-width: 25rem;
  max-width: 30rem;
}

.login-el {
  width: 100%;
  border-radius: 0.5rem;
  height: 3.5rem;
}

.input-container {
  margin-top: 3rem;
  width: 100%;
}

.login-input {
  border: 2px solid;
  border-color: #E28DAF;
  margin-bottom: 1rem;
  padding: 0 1rem 0 1rem;
}

.login-btn {
  margin: 2rem 0 2rem 0;
  background: #388659;
  font-weight: bold;
  font-size: 11pt;
  border: none;
  color: white;
}

.login-logo {
  width: 4rem;
  margin-bottom: 1rem;
}

</style>
