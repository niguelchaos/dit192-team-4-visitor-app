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
                <a href="#">Register</a>
				      </div>
				      <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
				      </div>
			      </div>
        </div>
      </div>
    </b-container>
  </div>
  <!-- Load attractions via API -->
  <!-- drop box -->
        <!-- scrollable container -->
    <b-container class="card-main-div">
      <b-row>
        <b-col class="card-main-col" v-for="a in activities" v-bind:key="a.id" sm="12" md="6" lg="4" xl="3" no-gutters>
          <activity-card :activity="a.data" :type="a.type"></activity-card>
          <!-- idk why this works -->
        </b-col>
      </b-row>
    </b-container>
    <!-- Pagination -->
  </div>
</template>
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
