<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div>

          <h2 class="title">Entrance</h2>

            <p class="block-heading__body" aria-hidden="false">Your ticket for passing Dummy park. Select your age and book tickets. The ticket is valid for only one visit.</p>
            <p class="block-heading__body" aria-hidden="false">The entrance ticket does not give access to rides.</p>

            <select> id="dropdown-1"
              <option>-Age-</option>
              <option>0-3 years, Free</option>
              <option>3-7 years, 60 SEK</option>
              <option>8 years+ 150 SEK</option>
            </select>
            <br />
            <label for="tickets">Number of tickets you would like to buy:</label>
            <input type="number" id="btnticket" name="tickets" />

            <b-button pill to="/ticketprices/entrance/book" class="btnBK">Book</b-button>
        </b-col>
      </b-row>
   </b-container>
  </div>
</template>

<style>
.btnticket {
  background-color: #edadc7;
  border: 10px;
  color: #004e64;
  padding: 10px;
  margin: 20px;
  width: 120px;
  height: 36px;
  font-family: Roboto;
  font-style: normal;
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
