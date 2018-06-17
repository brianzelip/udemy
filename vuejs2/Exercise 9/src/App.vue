<template lang="pug">
  .container.mt-4
    .row.justify-content-center(v-show="!formSubmitted")
      .col-12.col-sm-8
        appForm
    .row.justify-content-center(v-show="formSubmitted")
      .col-12.col-sm-8
        appSummary
</template>

<script>
import { formBus } from './main';
import Form from './components/Form.vue';
import Summary from './components/Summary.vue';

export default {
  data() {
    return {
      formSubmitted: false
    };
  },
  components: {
    appForm: Form,
    appSummary: Summary
  },
  created() {
    formBus.$on('formWasSubmitted', () => {
      this.formSubmitted = true;
    });
  }
};
</script>
