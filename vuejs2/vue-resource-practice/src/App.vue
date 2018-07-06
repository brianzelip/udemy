<template lang="pug">
  main
    button(type="button" @click="fetchData") Fetch data
    ol
      li(v-for="id in ids") {{ id }}
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  data() {
    return {
      body: '',
      ids: []
    };
  },
  methods: {
    fetchData() {
      this.$http.get('topstories.json').then(response => {
        console.log(response);
        this.ids = response.body;
      });
    }
  }
};
</script>
