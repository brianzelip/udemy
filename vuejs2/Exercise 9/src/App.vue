<template lang="pug">
  .container
    .row.justify-content-center
      .col-12.col-sm-8
        appForm
    hr
    .row.justify-content-center
      .col-12.col-sm-8.col-md-6
        appSummary
</template>

<script>
import Form from './components/Form.vue';
import Summary from './components/Summary.vue';

export default {
  components: {
    appForm: Form,
    appSummary: Summary
  }
};
</script>
