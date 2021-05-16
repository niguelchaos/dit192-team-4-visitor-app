<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="checkout_form">
            <h1 class="title">Single Ticket</h1>

              <p>Your ticket to access to a single activity once. Select type of activity, age and book.</p>
              <p>Note: You need entrance ticket also.</p>

            <div>
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
            {{form.subType}} {{form.price}}
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
      ticketType: 'Single ticket',
      options: [
        { value: { subType: '', price: null }, text: 'Please select ticket type', disabled: true },
        { value: { subType: 'Arcade games', price: 20 }, text: 'Arcade games, 20 SEK' },
        { value: { subType: 'Family rides', price: 30 }, text: 'Family rides, 30 SEK' },
        { value: { subType: 'Water rides', price: 40 }, text: 'Water rides, 40 SEK' },
        { value: { subType: 'Large rides', price: 60 }, text: 'Large rides, 60 SEK' }
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
