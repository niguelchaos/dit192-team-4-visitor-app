<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="checkout_form">
            <h1 class="title">Full Package</h1>
            <p>This includes entrance to the park and access to all the rides for one full day. Select your age below to order.</p>
            <br />
            <b-form-group label="Select age group" v-slot="{ ariaDescribedby }">
              <b-form-radio v-model="form" :aria-describedby="ariaDescribedby" name="some-radios" :value="{age: '0-18 years', price: 250}">0-18 years, 250 SEK</b-form-radio>
              <b-form-radio v-model="form" :aria-describedby="ariaDescribedby" name="some-radios" :value="{age: '18+ years', price: 500}">above 18 years, 500 SEK</b-form-radio>
            </b-form-group>
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
      amount: 1,
      ticketType: 'Full package'
    }
  }
}
</script>

<style>
.btnBK {
  background-color: #388659 !important;
  color: #004e64;
  border: 10px;
  padding: 30px;
  margin: 10px;
  width: 150px;
  height: 45px;
  font-family: Roboto;
  font-style: normal;
  left: 190px;
  top: 15px;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
}
</style>
