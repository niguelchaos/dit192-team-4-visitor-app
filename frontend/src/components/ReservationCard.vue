<template>
  <div>
    <b
      :to="{
        name: type,
        params: { id: activity._id, activity: activity }
      }"
    >
      <b-card
        class="act-card overflow-hidden text-left"
        img-right
        no-body
      >
        <b-col class="card-img-col" style="margin:0%; padding:0%;">
          <b-card-img
            :src="activity.img"
            alt="Image"
            height="90"
            class="card-image"
          ></b-card-img>
        </b-col>

        <b-col
          style="font-size: 0.75rem;"
          cols="7"
          no-gutters
          class="card-text-col"
        >
          <b-card-title style="font-size: 1rem;" class="card-title">
            <span class="align-middle font-weight-bolder">{{
              activity.name
            }}</span>
          </b-card-title>
          <br />
          <div class="fotter">
              <b-col>
                  <b-row>
                      <br />
                      <p class="card-text">Queue: min</p>
                      <b-button class="btnrese" pill to= "/reservations/reserve/getreservation">Reserve</b-button>
                  </b-row>
              </b-col>
          </div>
        </b-col>
      </b-card>
    </b>
  </div>
</template>

<script>
// this stupid camel case props thing i dont get it
export default {
  name: 'activity-card-item',
  props: ['activity', 'type']
}
</script>

<style scoped>
.act-card {
   padding: 5%;
   margin: 3%;
   border-radius: 15px;
   height: 190px;
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
.btnrese{
    float: right;
    height:35px;
    width:88px;
    right: 10%;
    background-color: rgb(40, 124, 40)
    }
</style>
