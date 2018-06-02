<template>
  <div id="app">
    <h1>Status: {{ status }}</h1>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default ('app',
{
  data: function() {
    return {
      status: 'All Good'
    };
  },
  methods: {
    changeStatus: function() {
      this.status = 'All Bad';
    }
  }
});
</script>
