<template>
  <div>
    <b-container>
      <b-row class="title">
        <h4>{{title}}</h4>
      </b-row>
      <b-row class="description">
        {{description}}
      </b-row>
      <b-row class="status">
        <b-col>
          <b-row>
            Status:
          </b-row>
          <b-row>
            <span :class="{green: status === 'Open', red: status === 'Closed'}">{{status}}</span>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            Queue Time:
          </b-row>
          <b-row>
            {{queueTime}}
          </b-row>
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
</style>
