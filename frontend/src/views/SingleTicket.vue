<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div>

          <h1 class="title">Single Ticket</h1>

            <p>Your ticket to access to a single activity once. Select type of activity, age and book.</p>
            <p>Note: You need entrance ticket also.</p>

          <div>
            <b-dropdown id="dropdown-1" text="Activity type" class="btnActivity">
            <b-dropdown-item>Arcade games</b-dropdown-item>
            <b-dropdown-item>Large rides</b-dropdown-item>
            <b-dropdown-item>Family rides</b-dropdown-item>
            <b-dropdown-item>Water rides</b-dropdown-item>
            </b-dropdown>
          </div>
          <br />
          <div>
            <b-dropdown id="dropdown-2" text="Age" class="btnAge">
            <b-dropdown-item>0-2 years, Free</b-dropdown-item>
            <b-dropdown-item>2-7 years, 100 SEK</b-dropdown-item>
            <b-dropdown-item>8 years+, 180 SEK</b-dropdown-item>
            </b-dropdown>
            <b-button pill to="/singleticket/Book" class="btnBK">Book</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.btnactivity {
  background-color: white;
  border: 10px;
  border: #edadc7 !important;
  color: #004e64 !important;
  width: 93px;
  height: 24px;
  left: 119px;
}
.btnBK {
  background-color: #388659 !important;
  color: #004e64;
  border: 10px;
  padding: 50px;
  margin: 50px;
  width: 120px;
  height: 45px;
  font-family: Roboto;
  font-style: normal;
  left: -6px;
  top: 11px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}
</style>
