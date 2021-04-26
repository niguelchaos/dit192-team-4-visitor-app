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
          <h2 class="title">Entrance</h2>
          </b-col>
          </b-row>
          <b-row>
          <b-col>
            <p class="block-heading__body" aria-hidden="false">Your ticket for passing Dummy park. Select your age and book tickets. The ticket is valid for only one visit.</p>
            <p class="block-heading__body" aria-hidden="false">The entrance ticket does not give access to rides.</p>
          </b-col>
          </b-row>
<div>
   <b-dropdown id="dropdown-1" text="Age" class="m-md-2">
    <b-dropdown-item>0-3 years, Free</b-dropdown-item>
    <b-dropdown-item>3-7 years, 60 SEK</b-dropdown-item>
    <b-dropdown-item>8 years+ 150 SEK</b-dropdown-item>
   </b-dropdown>
</div>
<label for="tickets">Number of tickets you would like to buy:</label>
<input type="number" id="btnticket" name="tickets">

<b-button pill to="/entrance/book" class="btnBK">Book</b-button>
</div>
</template>

<style>
.btnticket{
  background-color: white;
         border: 10px;
         color: #004e64;
         padding: 10px;
         margin: 20px;
         width: 120px;
         height: 36px;
         font-family: Roboto;
         font-style: normal;
}
.btnBK{
        background-color: #388659;
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
