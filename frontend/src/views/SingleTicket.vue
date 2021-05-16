<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <h1 class="title">Single Ticket</h1>

            <p>Your ticket to access to a single activity once. Select type of activity, age and book.</p>
            <p>Note: You need entrance ticket also.</p>

          <div>
            <select> id="dropdown-1"
              <option>Activity type</option>
              <option>Arcade games, 20 SEK</option>
              <option>Family rides, 30 SEK</option>
              <option>Water rides, 40 SEK</option>
              <option>Large rides, 60 SEK</option>
            </select>
            <br />
            <select> id="dropdown-2"
              <option>-Age-</option>
              <option>0-18 years</option>
              <option>above 18</option>
            </select>
            <b-button pill to="/ticketprices/singleticket/book" class="btnBK">Book</b-button>
          </div>
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
