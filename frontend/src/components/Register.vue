<template>
  <div>
    <Logo />
    <div class="register-container">
      <img class="register-logo" src="../assets/user-circle.svg"/>
      <h2>Register account</h2>
      <div class="input-container">
        <input class="register-el register-input" type="text" placeholder="Full name" v-model="form.name" required>
        <input class="register-el register-input" type="text" placeholder="Phone number" v-model="form.phone" required>
        <input class="register-el register-input" type="password" placeholder="Password" v-model="form.password" required>
      </div>
      <button class="register-el register-btn" v-on:click="register()">Register</button>
      <p class="reg-option">Have an account? <b-link :to="{ name: 'login', params: { target: this.target }}">Sign in here →</b-link></p>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'
import Logo from './Logo'
export default {
  name: 'Register',
  components: { Logo },
  props: {
    target: String
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      if (this.form.phone !== '' && this.form.password !== '' && this.form.name !== '') {
        Api.post('auth/register', this.form)
          .then(res => {
            localStorage.accessToken = res.data.token
            this.$router.push({ name: this.target })
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log('Phone number, full name, and password must be present in the form.')
      }
    }
  }
}

</script>

<style>

.register-container {
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

.logo-pane {
  margin-bottom: 1rem;
}

.register-el {
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

.register-input {
  border: 2px solid;
  border-color: #E28DAF;
  margin-bottom: 1rem;
  padding: 0 1rem 0 1rem;
}

.register-btn {
  margin: 2rem 0 2rem 0;
  background: #388659;
  font-weight: bold;
  font-size: 11pt;
  border: none;
  color: white;
}

.register-logo {
  width: 4rem;
  margin-bottom: 1rem;
}

</style>
