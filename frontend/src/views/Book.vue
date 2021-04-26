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

    <div class="col-50">
            <h3>Booking</h3>
    </div>
    <br>
    <div class="input-fields">
      <div class="column-1">
        <label for="cardholder">Cardholder's Name</label>
        <input type="text" id="cardholder" />
    </div>
    </div>

      <div class="column-2">
        <label for="cardnumber">Card Number</label>
        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
      </div>

        <div class="small-inputs">
          <div>
            <label for="date">Valid thru</label>
            <input type="text" id="date" placeholder="MM / YY" />
          </div>

          <div>
            <label for="verification">CVV / CVC *</label>
            <input type="password" id="verification"/>
          </div>
        </div>
        <span class="info"> * CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.
        </span>
        <b-row>
        <b-col>
          <b-button pill to="/Book/Confirm Pay" class="btnCP">Confirm Pay</b-button>
        </b-col>
        </b-row>
  </div>
</template>

<style>
.btnCP{
         background-color: #e28daf;
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