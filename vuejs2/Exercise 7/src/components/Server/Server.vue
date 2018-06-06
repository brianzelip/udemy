<template>
  <li class="list-group-item" @click="showStatus" style="cursor: pointer">Server #{{ server.id }} (status: {{ server.status }})</li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: ['server'],
  methods: {
    showStatus() {
      eventBus.$emit('serverWasClicked', this.server);
    }
  }
};
</script>
