<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div>

          <h1 class="title">Full Package</h1>

            <p>Your ticket to have access of all the rides for one day. Select your age and book tickets.</p>
            <p>Login required to book the full package</p>
            <br />
            <b-dropdown id="dropdown-2" text="Age" class="btnAge">
            <b-dropdown-item>0-2 years, Free</b-dropdown-item>
            <b-dropdown-item>2-7 years, 250 SEK</b-dropdown-item>
            <b-dropdown-item>8 years+, 320 SEK</b-dropdown-item>
            </b-dropdown>
          <b-button pill to="/fullpackage/registerandbook" class="btnBK">Register and book</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.btnBK {
  background-color: #388659 !important;
  color: #004e64;
  border: 10px;
  padding: 90px;
  margin: 50px;
  width: 150px;
  height: 45px;
  font-family: Roboto;
  font-style: normal;
  left: 190px;
  top: 15px;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
}
</style>
