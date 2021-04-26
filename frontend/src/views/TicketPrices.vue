<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="logo">
            <img class="logo_img" src="../assets/logo.png" alt="logo" />
          </div>
        </b-col>
      </b-row>
      </b-container>

      <b-row>
        <b-col>
          <h2 class="title">Tickets & Prices</h2>
          </b-col>
          </b-row>
          <b-row>
          <b-col>
            <p>Here you can purchase tickets for entrance and other activities</p>
            </b-col>
            </b-row>
        <b-row>
          <b-col>
             <ul class="filter-group__list"></ul>
             <b-button pill to= "/ticketsprices/entrance" class="btnentrance">Entrance</b-button>
             <b-button pill to="/ticketprices/singleticket" class="btnST">Single Ticket</b-button>
             <br>
             <b-button pill to="/ticketprices/Bundle Ticket" class="btnBT">Bundle Ticket</b-button>
             <b-button pill to="/ticketprices/Full Package" class="btnFP">Full Package</b-button>
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

<script>
export default {}
</script>

<style>
.btnentrance{
         background-color: white;
         border: 10px;
         color: #004e64;
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
    .btnFP{
         background-color: white;
         border: 10px;
         color: #004e64;
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
     .btnST{
         background-color: white;
         border: 10px;
         color: #004e64;
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
      .btnBT{
         background-color: white;
         border: 10px;
         color: #004e64;
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
