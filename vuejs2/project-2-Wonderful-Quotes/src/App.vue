<template lang="pug">
  .container(style="margin-top: 3rem;")
    app-header
    app-form
    app-quote-grid(:quotes="quotes")
    app-footer
</template>

<script>
import appHeader from './components/Header.vue';
import appFooter from './components/Footer.vue';
import appForm from './components/Form.vue';
import appQuoteGrid from './components/QuoteGrid.vue';
export default {
  data() {
    return {
      quotes: ['hello how are you', 'to be or not to be', 'hello i love you']
    };
  },
  components: {
    appHeader,
    appForm,
    appQuoteGrid,
    appFooter
  }
};
</script>

<style>
</style>
