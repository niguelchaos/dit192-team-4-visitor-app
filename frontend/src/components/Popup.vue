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
  data() {
    return {
      title: 'The Loophole Plunge',
      description: 'The first and only roller coaster to feature a loop-the-looping design. The loop will be so tight you won\'t believe your eyes when you reach the top!',
      status: 'Closed',
      queueTime: '10 minutes'
    }
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
