<template>
  <div>
    <b-container fluid class="m-auto">
      <b-row class="title">
        <h5>{{title}}</h5>
      </b-row>
      <b-row class="description">
        {{description}}
      </b-row>
      <b-row class="status">
        <!-- Status col -->
        <b-col class="statusCol" cols=3>
          <b-col>Status:</b-col>
          <b-col><span :class="{green: status === 'Open', red: status === 'Closed'}">{{status}}</span></b-col>
        </b-col>
        <!-- Queue col -->
        <b-col class="queueCol" cols=6>
          <b-col>
            Queue Time:
          </b-col>
          <b-col>
            {{queueTime}}
          </b-col>
        </b-col>
        <b-col class="linkCol" cols=6>
          <b-link :to="{
              name: type,
              params: { id: activity._id, activity: activity }
            }"
            id="goToActivity"
          >Go to this activity</b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',
  props: ['title', 'description', 'status', 'queueTime', 'type', 'activity']
}
</script>

<style scoped>
.status {
    margin-top: 1em;
}
.green {
    color: var(--color-green);
}
.red {
    color: red;
}
.statusCol {
  margin-left:-1.5em;
}
.queueCol {
  margin-right:-3em;
}
.linkCol {
  margin-right: -12em;
}
#goToActivity {
  color: var(--color-green);
}
.title {
  margin-bottom: 0em;
  margin-right: 0em;
  margin-left: 0em;
}
.description {
  margin-right: 0em;
  margin-left: 0em;
}
</style>
