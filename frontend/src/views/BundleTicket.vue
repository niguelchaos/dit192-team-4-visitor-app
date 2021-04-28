<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div>

          <h1 class="title">Bundle Ticket</h1>
            <p>Combines multiple single ticket types:</p>
            <p><strong>Big bundle:</strong> 2 large rides, 2 family rides, 2 water rides, 5 arcade games</p>
            <p><strong>Small bundle:</strong> 1 large ride, 1 family ride, 1 water ride, 2 arcade games</p>
            <p><strong>Arcade bundle:</strong> 10 arcade games</p>

          <div>
            <b-dropdown id="dropdown-1" text="Bundle type" class="btnBundle">
            <b-dropdown-item>Big bundle</b-dropdown-item>
            <b-dropdown-item>Small bundle</b-dropdown-item>
            <b-dropdown-item>Arcade bundle</b-dropdown-item>
            </b-dropdown>
          </div>
          <br />
          <div>
            <b-dropdown id="dropdown-2" text="Age" class="btnAge">
            <b-dropdown-item>0-2 years, Free</b-dropdown-item>
            <b-dropdown-item>2-7 years, 180 SEK</b-dropdown-item>
            <b-dropdown-item>8 years+, 220 SEK</b-dropdown-item>
            </b-dropdown>
          </div>
          <b-button pill to="/Bundle Ticket/Book" class="btnBK">Book</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.btnbundle {
  background-color: white !important;
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
  padding: 80px;
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
