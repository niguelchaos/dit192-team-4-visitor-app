<template>
  <div id="attractions" class="wrapper">
    <div class="pageTop">
      <br />
      <h2 class="title">Tickets & Prices</h2>
    </div>
    <b-row>
      <b-col>
        <p>Here you can purchase tickets for entrance and other activities</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-card no-body>
          <b-tabs pills card align="center">
          <b-tab title="Buy Tickets" active><b-card-text><ul class="tab1"></ul>
          <b-button pill to= "/ticketprices/entrance" class="btnentrance">Entrance</b-button>
          <b-button pill to="/ticketprices/singleticket" class="btnST">Single Ticket</b-button>
          <br />
          <b-button pill to="/ticketprices/bundleticket" class="btnBT">Bundle Ticket</b-button>
          <b-button pill to="/ticketprices/fullpackage" class="btnFP">Full Package</b-button>
          </b-card-text></b-tab>
          <b-tab title="My Tickets"><b-card-text>Tab contents 2</b-card-text></b-tab>
          </b-tabs>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-row class="footer">
      <b-col>
        <h2 class="footer-container__heading">BEFORE YOUR VISIT</h2>
        <p>Opening hours</p>
        <p>Activities in Dummy park</p>
        <p>Find us</p>
        <p>Food & Beverages</p>
        <p>Accomodation</p>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mobile-categorybuttons {
  background-color: #f6fff3;
  border-radius: 35px;
  padding: 2%;
  font-size: 17px;
}
.pc-categorybuttons {
  background-color: #ffffff;
  border-radius: 40px;
  padding: 1%;
  font-size: 20px;
}

.flt-active {
 background-color: #EDADC7;
}

.flt-not-active{
  background-color: #FFFFFF;
}

.tab1 {
  background-color: #EDADC7 !important;
  border-radius: 25px;
  color: black;
  font-weight: bolder;
}

.tab2 {
  background-color: #EDADC7 !important;
  border-radius: 25px;
  color: black;
  font-weight: bolder;
}

.card1-not-active{
  background-color: #f6fff3 !important;
  border-radius: 25px;
  color: #2D3E4F;
  font-weight: normal;
}

.card-main-div {
  margin: 0%;
  padding: 0%;
  overflow-y: scroll;
  position: relative;
  flex: 1;
}
.card-main-col {
  margin: 0%;
  padding: 0%;
}
.page-bar-div {
  height: 55px;
  padding: 0px 20px;
}
.btnentrance {
  background-color: #FFFFFF !important;
  border: 10px;
  color: black !important;
  padding: 10px;
  margin: 20px;
  width: 120px;
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  left: -6px;
  top: 11px;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
}
.btnFP {
  background-color: #FFFFFF !important;
  border: 10px;
  color: black !important;
  padding: 10px;
  margin: 20px;
  width: 120px;
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  left: -6px;
  top: 11px;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
}
.btnST {
  background-color: #FFFFFF !important;
  border: 10px;
  color: black !important;
  padding: 10px;
  margin: 20px;
  width: 120px;
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  left: -6px;
  top: 11px;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
}
.btnBT {
  background-color: #FFFFFF !important;
  border: 10px;
  color: black !important;
  padding: 10px;
  margin: 20px;
  width: 120px;
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  left: -6px;
  top: 11px;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
}
</style>
