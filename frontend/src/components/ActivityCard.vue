<template>
  <div>
    <b-link
      :to="{
        name: 'activity',
        params: { id: activity._id, activity: activity },
      }"
    >
      <b-card class="act-card overflow-hidden text-left" img-right no-body>
        <b-col class="card-img-col" style="margin: 0%; padding: 0%">
          <b-card-img
            :src="activity.img"
            alt="Image"
            height="90"
            class="card-image"
          ></b-card-img>
        </b-col>

        <b-col
          style="font-size: 0.75rem"
          cols="7"
          no-gutters
          class="card-text-col"
        >
          <b-card-title style="font-size: 1rem" class="card-title">
            <span class="align-middle font-weight-bolder">{{
              activity.name
            }}</span>
          </b-card-title>
          <b-link href="/" class="card-link">Read More</b-link>
        </b-col>
      </b-card>
    </b-link>
  </div>
</template>

<script>
// this stupid camel case props thing i dont get it
export default {
  name: 'activity-card-item',
  props: ['activity']
}
</script>

<style scoped>
.act-card {
  padding: 5%;
  margin: 3%;
  border-radius: 15px;
}
.card-text-col {
  color: #2d3e4f;
  padding: 1%;
  padding-right: 3%;
  margin: 0%;
}
.card-image {
  border-radius: 15px;
}
.card-title {
  padding-top: 15%;
  padding-bottom: 5%;
  align-content: center;
}
.card-link {
  color: #e28daf;
}
/* Set a style for all buttons */
.btnr {
  background-color: #4CAF50 !important;
  color: white;
  position: relative;
  top: 40%;
  left: 90%;
  transform: translate(-80%, -80%);
  -ms-transform: translate(-80%, -80%);
  background-color: #555;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
   width: 30%;
}

/* Add a hover effect for buttons */
.btnr:hover {
  opacity: 0.8;
}
</style>
