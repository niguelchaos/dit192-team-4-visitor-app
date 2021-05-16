<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <h1 class="title">Bundle Ticket</h1>
            <p>Combines multiple single ticket types:</p>
            <p align="left"><strong>Big bundle:</strong> 2 large rides, 2 family rides, 2 water rides, 5 arcade games</p>
            <p align="left"><strong>Small bundle:</strong> 1 large ride, 1 family ride, 1 water ride, 2 arcade games</p>
            <p align="left"><strong>Arcade bundle:</strong> 10 arcade games</p>
          <div>
            <select> id="dropdown-1"
              <option>Bundle type</option>
              <option>Big Bundle, 300 SEK</option>
              <option>Small Bundle, 200 SEK</option>
              <option>Arcade Bundle, 150 SEK</option>
            </select>
            <br />
            <select> id="dropdown-2"
              <option>-Age-</option>
              <option>0-18 years</option>
              <option>above 18</option>
            </select>
          </div>
          <b-button pill to="/ticketprices/bundleticket/book" class="btnBK">Book</b-button>
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
