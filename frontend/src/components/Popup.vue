<template>
  <div>
    <b-container fluid>
      <b-row class="title">
        <h4>{{title}}</h4>
      </b-row>
      <b-row class="description">
        {{description}}
      </b-row>
      <b-row class="status">
        <!-- Status col -->
        <b-col class="statusCol" cols=4>
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
          <a href="/activities">Go to this activity</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',
  props: {
    title: String,
    description: String,
    status: String,
    queueTime: String
  }
}
</script>

<style>
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
  margin-right: -10em;
}
</style>
