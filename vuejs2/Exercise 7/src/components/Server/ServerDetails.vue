<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">No server selected</p>
    <p v-else>Server #{{ server.id }} is currently {{ server.status }}</p>
    <hr>
    <button @click="changeServerToNormal">Change to Normal</button>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  data() {
    return {
      server: null
    };
  },
  created() {
    eventBus.$on('serverWasClicked', server => {
      this.server = server;
    });
  },
  methods: {
    changeServerToNormal() {
      // this works without having to pass the new status around
      // because objects and arrays in JavaScript are passed by reference,
      // objects are reference type, therefore the objects in the main servers
      // array (in Servers.vue) only exist in one place in memory for each object,
      // so when a value there is changed in one place, that value is updated
      // everywhere. See the tip in
      // https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow,
      // or 9:12 min:sec mark in
      // https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/practice/72/instructor-solution
      this.server.status = 'Normal';
    }
  }
};
</script>
