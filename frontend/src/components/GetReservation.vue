<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="activity_card">
            <h5 class="title">{{ activity.name }}</h5>
            <p><strong>Status: </strong>{{ activity.status }} right now.</p>
          </div>

          <div class="activity_card">
            <h2 class="title">Reservations</h2>
            <p>Here you will fill the time slot and reserve</p>
            <p>This is will be done in sprint 3</p>
            {{activity.name}}
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'GetReservationPage',
  props: ['activity', 'type']
}
</script>

<style scoped>
.activity_card {
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  background: white;
  margin-top: 15px;
  text-align: left;
  overflow: hidden;
}
</style>
