<template>
  <div>
      <div class="title">
        <h4>{{title}}</h4>
      </div>
      <div class="description">
          {{description}}
      </div>
      <div class="status">
        Status: <span :class="{green: status === 'Open', red: status === 'Closed'}">{{status}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',
  data() {
    return {
      title: 'The Loophole Plunge',
      description: 'The first and only roller coaster to feature a loop-the-looping design. The loop will be so tight you won\'t believe your eyes when you reach the top!',
      status: 'Closed'
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
