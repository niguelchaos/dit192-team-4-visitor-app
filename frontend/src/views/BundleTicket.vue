<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="checkout_form">
            <h1 class="title">Bundle Ticket</h1>
            <p>Combines multiple single ticket types:</p>
            <p align="left"><strong>Big bundle:</strong> 2 large rides, 2 family rides, 2 water rides, 5 arcade games</p>
            <p align="left"><strong>Small bundle:</strong> 1 large ride, 1 family ride, 1 water ride, 2 arcade games</p>
            <p align="left"><strong>Arcade bundle:</strong> 10 arcade games</p>
            <b-form-select v-model="form" :options="options"></b-form-select>
            <br />
            <br />
            <b-form-group label="Select age group" v-slot="{ ariaDescribedby }">
              <b-form-radio v-model="age" :aria-describedby="ariaDescribedby" name="some-radios" value="0-18 years">0-18 years (50% off)</b-form-radio>
              <b-form-radio v-model="age" :aria-describedby="ariaDescribedby" name="some-radios" value="18+ years">above 18 years</b-form-radio>
            </b-form-group>
            <b-button
              :disabled="!(age && form.price && form.subType)"
              :to="{
                name: 'book',
                params: { ticket: { age: age, price: age == '18+ years' ? form.price : form.price * 0.5, type: ticketType + ' - ' + form.subType, amount: 1} }
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
      age: '',
      form: {
        subType: '',
        price: null
      },
      ticketType: 'Bundle ticket',
      options: [
        { value: { subType: '', price: null }, text: 'Please select bundle', disabled: true },
        { value: { subType: 'Big bundle', price: 300 }, text: 'Big bundle, 300 SEK' },
        { value: { subType: 'Small bundle', price: 200 }, text: 'Small bundle, 200 SEK' },
        { value: { subType: 'Arcade bundle', price: 150 }, text: 'Arcade bundle, 150 SEK' }
      ]
    }
  }
}
</script>

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
