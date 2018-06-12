<template>
  <div class="container">
    <form>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6">
          <appForm></appForm>
        </div>
      </div>
    </form>
    <hr>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-md-6">
        <appSummary></appSummary>
      </div>
    </div>
  </div>
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
