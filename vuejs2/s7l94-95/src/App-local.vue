<template>
  <div>
    <status-changer v-for="n in 5" :key="n"></status-changer>
  </div>
</template>

<script>
import StatusChanger from './StatusChanger.vue';
export default {
  components: { 'status-changer': StatusChanger }
};
</script>
