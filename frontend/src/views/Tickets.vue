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
          <b-tab class="tab1" title="Buy Tickets" active><b-card-text><ul>
          <b-button pill to= "/ticketprices/entrance" class="btnentrance">Entrance</b-button>
          <b-button pill to="/ticketprices/singleticket" class="btnST">Single Ticket</b-button>
          <br />
          <b-button pill to="/ticketprices/bundleticket" class="btnBT">Bundle Ticket</b-button>
          <b-button pill to="/ticketprices/fullpackage" class="btnFP">Full Package</b-button></ul>
          </b-card-text></b-tab>
          <b-tab class="tab2" title="My Tickets"><b-card-text>tab2 contents</b-card-text></b-tab>
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
.tab1 {
  background: #c7efcf;
  border-radius: 25px;
  color: black;
  font-weight: bolder;
  margin-left: 0%;
  margin-right: 0%;
  border-radius: 0px;
  height: 9.5rem;
}

.tab2 {
  background: #c7efcf;
  border-radius: 25px;
  color: black;
  font-weight: bolder;
  margin-left: 0%;
  margin-right: 0%;
  border-radius: 0px;
  height: 9.5rem;
}

.card-main-col {
  margin: 0%;
  padding: 0%;
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
