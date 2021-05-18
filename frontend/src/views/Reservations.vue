<template>
  <div id="attractions" class="wrapper">
    <div class="pageTop">
      <br />
      <h2 class="title">Reservations</h2>
      <p>You need to login your account in order to reserve timeslots on rides.</p>
    </div>
    <div class signin>
      <b-container>
        <div class="d-flex justify-content-center h-120">
          <div class="card">
            <h3>Sign in</h3>
            <div class="card-body">
              <form action=" action_page" method="post">
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="user name" placeholder="User name" name="uname" required>
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="user name" placeholder="password" name="uname" required>
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox">Remember Me
                </div>
                <div class="form-group">
                  <b-button pill to= "/reservations/reserve" class="btn float-right login_btn">Login</b-button>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links" >
                <a href="#" v-on:click="createUser()">Register</a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="#" >Forgot your password?</a>
              </div>
            </div>
        </div>
      </div>
      <!-- <b-button v-on:click="loginUser()"></b-button>
      <b-button v-on:click="addReservation()"></b-button>
      <b-button v-on:click="getReservation()"></b-button>
      <b-button v-on:click="deleteReservation()"></b-button> -->
      <br />
      {{reservations[0]}}
    </b-container>
  </div><i class="fas fa-route-interstate"></i>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'Reservations',
  data() {
    return {
      user: {},
      reservations: [],
      id: ''
    }
  },
  created() {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTM3NjlhNTEzZGVlMDkwMDk3ZDI5MSIsImlhdCI6MTYyMTMzMTk3NiwiZXhwIjoxNjIxNDE4Mzc2LCJhdWQiOiJ3ZWJhcHAiLCJpc3MiOiJ0ZWFtNGRiIiwic3ViIjoiMDcwOTExMTExMSJ9.AeI69_5Tnr5WuqPB_KNo8X8DvZSatZDDq12fUEkUNokFLs-3Yqa6QtxQh7Hw9TU5CLe4OfcCKiueKs60kzQJ6uSaALEkiUYfE4lFk3nP1wk1UyY1iPpvhnS_FqXXQXKc4jMGHEA4Cksx3QDn_3Wybml5eK6-UKU9zUy2BMQ80yZIKA1u' }
    Api.get('/auth/reservations', { headers })
      .then(res => {
        console.log(res.data.data)
        this.reservations = res.data.data
        console.log(this.reservations)
      })
  },
  methods: {
    createUser() {
      Api.post('/auth/register', {
        name: 'Viktor',
        phone: '0709111111',
        password: 'testtest!'
      })
        .then(res => {
          console.log(res.data._id)
        })
    },
    loginUser() {
      Api.post('/auth/login', {
        phone: '0709111111',
        password: 'testtest!'
      })
        .then(res => {
          this.user['token'] = res.data.token
          console.log(this.user['token'])
        })
    },
    addReservation() {
      const headers = { 'Authorization': 'Bearer eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTM3NjlhNTEzZGVlMDkwMDk3ZDI5MSIsImlhdCI6MTYyMTMzMTk3NiwiZXhwIjoxNjIxNDE4Mzc2LCJhdWQiOiJ3ZWJhcHAiLCJpc3MiOiJ0ZWFtNGRiIiwic3ViIjoiMDcwOTExMTExMSJ9.AeI69_5Tnr5WuqPB_KNo8X8DvZSatZDDq12fUEkUNokFLs-3Yqa6QtxQh7Hw9TU5CLe4OfcCKiueKs60kzQJ6uSaALEkiUYfE4lFk3nP1wk1UyY1iPpvhnS_FqXXQXKc4jMGHEA4Cksx3QDn_3Wybml5eK6-UKU9zUy2BMQ80yZIKA1u' }
      Api.put('/auth/reservation',
        {
          reservation:
            [{
              name: 'Loops',
              slot: 'Timeslot 2',
              time: '1:00-1:30'
            }]
        },
        { headers }
      ).then(res => console.log(res))
    },
    deleteReservation() {
      const headers = { 'Authorization': 'Bearer eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTM3NjlhNTEzZGVlMDkwMDk3ZDI5MSIsImlhdCI6MTYyMTMzMTk3NiwiZXhwIjoxNjIxNDE4Mzc2LCJhdWQiOiJ3ZWJhcHAiLCJpc3MiOiJ0ZWFtNGRiIiwic3ViIjoiMDcwOTExMTExMSJ9.AeI69_5Tnr5WuqPB_KNo8X8DvZSatZDDq12fUEkUNokFLs-3Yqa6QtxQh7Hw9TU5CLe4OfcCKiueKs60kzQJ6uSaALEkiUYfE4lFk3nP1wk1UyY1iPpvhnS_FqXXQXKc4jMGHEA4Cksx3QDn_3Wybml5eK6-UKU9zUy2BMQ80yZIKA1u' }
      Api.put('/auth/deleteReservation',
        { reservation: this.reservations[0] },
        { headers })
        .then(res => {
          window.location.reload()
        })
    }
  }
}
</script>

<style scoped>

.container{
height: 100%;
align-content: center;
}

.card{
height: 300px;
margin-top: auto;
margin-bottom: auto;
width: 300px;
align-content: center;
background-color:hsla(180, 50%, 98%, 0.904) !important;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #e599b8;
}

.card-header h3{
color: white;
}

.input-group-prepend span{
width: 0px;
background-color: #e599b8;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;
width: 150px;

}

.remember{
color: #070101;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #e599b8;
width: 100px;

}
.account {
        color: #0c0c0c;
          }

.login_btn:hover{
color: black;
background-color: white;
}
.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>
