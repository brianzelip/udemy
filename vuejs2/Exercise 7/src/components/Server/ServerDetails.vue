<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">No server selected</p>
    <p v-else>Server #{{ server.id }} is currently {{ server.status }}</p>
    <hr>
    <button @click="changeToNormal">Change to Normal</button>
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
    changeToNormal() {}
  }
};
</script>
