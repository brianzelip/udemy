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
  data() {
    return {
      quotes: ['hello how are you', 'to be or not to be', 'hello i love you']
    };
  },
  components: {
    appHeader,
    appForm,
    appFooter
  }
};
</script>

<style>
</style>
