<template lang="pug">
  .container(style="margin-top: 3rem;")
    app-header
    app-form
    app-footer
</template>

<script>
import appHeader from './components/Header.vue';
import appFooter from './components/Footer.vue';
import appForm from './components/Form.vue';
export default {
  components: {
    appHeader,
    appForm,
    appFooter
  }
};
</script>

<style>
</style>
