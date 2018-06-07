<template lang="pug">
  .container(style="margin-top: 3rem;")
    app-header
    app-footer
</template>

<script>
import appHeader from './components/Header.vue';
import appFooter from './components/Footer.vue';
export default {
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style>
</style>
