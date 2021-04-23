<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs="12" align-self="center">
          <div class="activity_card" style="padding:0px">
            <img :src="activity.img" alt="Image" class="image" />
          </div>

          <div class="activity_card">
            <h5 class="title">{{ activity.name }}</h5>
            <p><strong>Status: </strong>{{ activity.status }}</p>
            <p><strong>Price: </strong>{{ activity.price }} kr</p>
          </div>
          <div class="activity_card">
            <p>{{ activity.description }}</p>
          </div>
          <div class="activity_card">
            <p>map</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Activity",
  props: {
    activity: {
      type: Object,
      required: false // User can accept a userData object on params, or not. It's totally optional.
    }
  }
};
</script>

<style>
.activity_card {
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  background: white;
  margin-top: 15px;
  text-align: left;
  overflow: hidden;
}
.image {
  width: 100%;
}
</style>
