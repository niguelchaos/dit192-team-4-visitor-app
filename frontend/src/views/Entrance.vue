<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="checkout_form">
            <h2 class="title">Entrance</h2>
            <p class="block-heading__body" aria-hidden="false">Your entrance ticket to Dummy park. The ticket is valid for only one visit.</p>
            <p class="block-heading__body" aria-hidden="false">The entrance ticket does not give access to rides.</p>
            <br />
            <b-form-group label="Select age group" v-slot="{ ariaDescribedby }">
              <b-form-radio v-model="form" :aria-describedby="ariaDescribedby" name="some-radios" :value="{age: '0-18 years', price: 25}">0-18 years, 25 SEK</b-form-radio>
              <b-form-radio v-model="form" :aria-describedby="ariaDescribedby" name="some-radios" :value="{age: '18+ years', price: 50}">above 18 years, 50 SEK</b-form-radio>
            </b-form-group>
            <label for="tickets">Enter number of tickets</label>
            <b-form-input v-model="amount" class="checkout_input" type="number" id="btnticket" name="tickets" placeholder="Enter amount"/>
            <br />
            <b-button
              :disabled="!(form.age && form.price && amount)"
              :to="{
                name: 'book',
                params: { ticket: { age: form.age, price: form.price, amount: amount, type: ticketType } }
              }"
              class="main_button"
            >
              Book
            </b-button>
          </div>
        </b-col>
      </b-row>
   </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        age: '',
        price: null
      },
      amount: null,
      ticketType: 'Entrance'
    }
  }
}
</script>

<style>
.checkout_form{
 width: 100%;
  border-radius: 15px;
  padding: 20px;
  background: white;
  margin-top: 15px;
  text-align: left;
  overflow: hidden;
  border: none;
}
.checkout_input{
  width: 100% !important;
  border: 1px solid var(--color-pink) !important;
}
label{
  margin-bottom: 0px !important;
  font-size: 0.8rem !important;
}
.image {
  width: 100%;
}
.main_button {
  background: var(--color-green) !important;
  width: 100%;
}
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
