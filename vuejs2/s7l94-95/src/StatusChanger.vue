<template>
  <div>
    <h1>Status: {{ status }}</h1>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'All Good'
    };
  },
  methods: {
    changeStatus: function() {
      this.status === 'All Good'
        ? (this.status = 'All Bad')
        : (this.status = 'All Good');
    }
  }
};
</script>
