<template>
  <li class="list-group-item" @click="showStatus">Server #{{ server.id }}</li>
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
