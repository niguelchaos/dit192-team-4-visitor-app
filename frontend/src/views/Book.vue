<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="activity_card">
            <h5 class="title">Checkout</h5>
            <p>Please enter your credit card details below</p>
          </div>
          <b-form @submit="onSubmit" class="checkout_form">
            <b-form-group id="input-group-1" label="Cardholder's name" label-for="input-1">
              <b-form-input
                id="input-1"
                class="checkout_input"
                v-model="form.name"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Card number" label-for="input-2">
              <b-form-input
                id="input-2"
                class="checkout_input"
                v-model="form.number"
                placeholder="1111-2222-3333-4444"
                required
              ></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group id="input-group-3" label="Valid through" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    class="checkout_input"
                    v-model="form.date"
                    placeholder="MM/YY"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="input-group-4" label="CVV or CVC" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    class="checkout_input"
                    v-model="form.code"
                    placeholder="123"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button
              :disabled="!(form.name && form.number && form.date && form.code)"
              :to="{
                name: 'confirmation',
                params: { id: 1723481342, details: form}
              }"
              class="main_button"
            >
              Complete purchase
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        number: '',
        date: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
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
</style>
